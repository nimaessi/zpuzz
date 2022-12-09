import { StyleSheet, Text, View,ImageBackground, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Surface,Button } from 'react-native-paper';
import SegBtn from './BtnNav';
import styles from '../style/TicTacStyle';
import SnackRes from './SnackRes';
import { playSound } from './Function';
import { NativeModules,useColorScheme } from 'react-native';

const TicTacToe = () => {

  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState("X");
  const [disable,setDisable] = useState(false);
  const [type,setType] = useState("single");
  const [snack, setSnack] = useState(false);
  const [resultGame,setResultGame] = useState('draw');
  const { SharePrefModule } = NativeModules;
 
  const clickBoard = (i) =>{
    if(!disable){
      if(board[i] ==""){
        player =="X" ? setPlayer("O") : setPlayer("X")
      }
      setBoard(board.map((val,idx) =>{
        if(idx == i && val =="" ){return player;}
        else{return val}
      }));
      SharePrefModule.getSound() ? playSound('click') :"";
    }
  }
  const winner = () =>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(i = 0; i< lines.length; i++){
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setDisable(true);
        SharePrefModule.getSound() ? playSound('correct') :"";
        return board[a];
      }
    }
    return null;
  }
  const reset = () =>{
    setBoard(["","","","","","","","",""]);
    setPlayer("X");
    setDisable(false);
  }
  const singlePlayer = () =>{
    for(j = 0; j < 9; j++){
       // Returns a random integer from 0 to 8:
       let randomNum = Math.floor(Math.random() * 9);
       let val = board[randomNum];
       if(val ==""){
        clickBoard(randomNum);
        break;
       }
    }    
  }
  useEffect(()=>{
    let res = winner();
    setResultGame(res);
    if(res === null){
      if(type ==="single" && player =="O"){
        setTimeout(() => singlePlayer(),1000);
      }
    }
    else{setSnack(true);}
  },[board]);

  useEffect(()=>{
    reset();
  },[type]);

  return (
    <ImageBackground 
      source={require('../img/memoryBg.jpg')} 
      resizeMode='cover' 
      style={{flex:1}}>
      <View style={styles.segContainer}>
        <SegBtn setType={setType} reset={reset}/>
      </View>
      <View style={styles.container}>
          <Text style={styles.typeGame}>{type} player</Text>
          <View style={styles.row}>
              <Surface style={styles.surfaceTop} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(0)}>
                      <Text style={styles.txtXo}>{board[0]}</Text>
                  </TouchableOpacity>
                </Surface>
                <Surface style={styles.surfaceTop} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(1)}>
                      <Text style={styles.txtXo}>{board[1]}</Text>
                  </TouchableOpacity>
                </Surface>
                <Surface style={styles.surfaceTopRight} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(2)}>
                        <Text style={styles.txtXo}>{board[2]}</Text>
                    </TouchableOpacity>
                </Surface>
          </View>
          <View style={styles.row}>
              <Surface style={styles.surface} elevation={4}>
                <TouchableOpacity style={styles.xo} onPress={() => clickBoard(3)}>
                     <Text style={styles.txtXo}>{board[3]}</Text>
                </TouchableOpacity>
              </Surface>
                <Surface style={styles.surface} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(4)}>
                      <Text style={styles.txtXo}>{board[4]}</Text>
                  </TouchableOpacity>
                </Surface>
                <Surface style={styles.surfaceRight} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(5)}>
                      <Text style={styles.txtXo}>{board[5]}</Text>
                  </TouchableOpacity>
                </Surface>
          </View>
          <View style={styles.row}>
              <Surface style={styles.surface} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(6)}>
                      <Text style={styles.txtXo}>{board[6]}</Text>
                  </TouchableOpacity>
                </Surface>
                <Surface style={styles.surface} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(7)}>
                      <Text style={styles.txtXo}>{board[7]}</Text>
                  </TouchableOpacity>
                </Surface>
                <Surface style={styles.surfaceRight} elevation={4}>
                  <TouchableOpacity style={styles.xo} onPress={() => clickBoard(8)}>
                      <Text style={styles.txtXo}>{board[8]}</Text>
                  </TouchableOpacity>
                </Surface>
          </View>
      </View>
      <SnackRes visible={snack} setSnack={setSnack} result={resultGame}/>
    </ImageBackground>

  );
}

export default TicTacToe;