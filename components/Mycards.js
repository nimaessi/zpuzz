import { ScrollView, View } from 'react-native';
import React,{useRef} from 'react';
import { Card } from 'react-native-paper';
import {ImgAddress} from'./Pic';
import styles from '../style/CardStyle';

const Item = ({img,id,handleChoice,matched,choiceOne,choiceTwo,disabled}) => {
    var pic;
    const card = [{"img": img , "id": id}];
    if(matched || choiceOne === id || choiceTwo === id){
         pic = ImgAddress(img);
    }else{
        pic = require('../img/backCard2.jpg');
    }
    
    return(
        <Card key={id} onPress={() => {!disabled ? handleChoice(card) : ""}}>
            <Card.Cover  source={pic} style={styles.imgCard}/>
        </Card>
    );
}

const Mycards = (props) => {
   
  return (
    <ScrollView>
    <View style={styles.container}>
        {
        props.img.map( (item , index) =>
            <View
                key={item.id}
                style={styles.itemStyle}>
                <Item 
                    img={item.img} 
                    id={item.id} 
                    handleChoice={props.handleChoice} 
                    matched={item.matched}
                    choiceOne={props.choiceOne}
                    choiceTwo={props.choiceTwo}
                    disabled = {props.disabled}
                
                />
            </View>
        )
        }

    </View>
    </ScrollView>
  );
}

export default Mycards;