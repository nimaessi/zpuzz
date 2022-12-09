import { StyleSheet, Text, View,ImageBackground,BackHandler} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button,Surface} from 'react-native-paper';
import styles from '../style/GameStyle';
import Mycards from './Mycards';
import {imgs} from './Pic';
import { playSound } from './Function';
import WinModal from './WinModal';
import { NativeModules } from 'react-native';
const Game = ({navigation}) => {

    const [cards,setCards] = useState([]);
    const [turns,setTurns] = useState(0);
    const [score,setScore] = useState(0);
    const [choiceOne,setChoiceOne] = useState(null);
    const [choiceTwo,setChoiceTwo] = useState(null);
    const [disabled,setDisabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [start,setStart] = useState(false);
    const { SharePrefModule } = NativeModules;
  
    const shuffleCards = () =>{
        const shuffledCards = [...imgs, ...imgs]
              .sort(() => Math.random() - 0.5)
              .map((card) => ({...card, id: Math.random()}));
        setCards(shuffledCards);
        setTurns(0);
        setScore(0);
        setVisible(false);
        setStart(true);
    }   
    const handleChoice = (card) => {
      SharePrefModule.getSound() ? playSound('click') : "";
      if(choiceOne){
        if(card[0].id != choiceOne[0].id){setChoiceTwo(card);}
      }else{
        setChoiceOne(card);
      }
    }
    useEffect(()=>{
      if(choiceOne && choiceTwo){
        setDisabled(true);
        if(choiceOne[0].img === choiceTwo[0].img)
        {
          setCards(prevCards =>{
            return prevCards.map(card =>{
              if(card.img === choiceOne[0].img){
                SharePrefModule.getSound() ? playSound('correct') : "";
                setScore( score => score + 1);
                return {...card, matched: true};
              }else{
                return card;
              }
            })
          });
          resetTurn();
        }else{
          SharePrefModule.getSound() ? playSound('invalid') : "";
          setTimeout(() => resetTurn(),1200);
        }
      }
    },[choiceOne,choiceTwo]);
    
    const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(pervTurn => pervTurn + 1);
      setDisabled(false);
    }
    useEffect(() => {
      if(score === 12){
        setVisible(true);
        setStart(false);
        console.log('you win .....');
      }
    },[score]);

    useEffect(() => {
      shuffleCards();
      const backAction  = () =>{
        setStart(false);
        navigation.navigate('Home');
        return true;
      }
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return () => backHandler.remove();
    }, []);
      
  return ( 
    <ImageBackground 
      source={require('../img/memoryBg.jpg')} 
      resizeMode='cover' 
      style={{flex:1}}
    >
      <View style={styles.containerBg}>
        <Button 
          buttonColor='#E1E8ED' 
          icon="plus" 
          mode="contained-tonal" 
          textColor='#221F1F'
          style={styles.newGame} 
          onPress={shuffleCards}>
          New Game
        </Button>
        <Mycards 
          img={cards}
          handleChoice = {handleChoice}
          choiceOne = {choiceOne ? choiceOne[0].id : 0}
          choiceTwo = {choiceTwo ? choiceTwo[0].id : 0}
          disabled = {disabled}
        />
        <WinModal 
          start={start} 
          visible ={visible} 
          setVisible ={setVisible}
          shuffleCards ={shuffleCards}
          navigation ={navigation}/>
      </View>
    </ImageBackground>
  );
}

export default Game;    