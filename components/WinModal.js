import { StyleSheet, View,ImageBackground,Image } from 'react-native';
import React,{useState,useEffect} from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import styles from '../style/WinStyle';
import { useRoute } from '@react-navigation/native';


const WinModal = (props) => {

    const showModal = () => props.setVisible(true);
    const hideModal = () => props.setVisible(false); 
    const [intervalID, setInterID] = useState();
    const [routeName,setRouteName] = useState(null);
    const [time,setTime] = useState(null);
    var sec = 0;
    var min = 0;  

    useEffect(()=>{
      var myInterval = setInterval(() =>{
        if(props.start){
          if(sec < 60){sec++;}
          else{sec = 0; min++;}
          setTime(min+':'+sec);
          console.log(sec,min);
        }
      }, 1000);
      setInterID(myInterval);
      if(!props.start){
        clearInterval(intervalID); 
        console.log('clear');
      }
    },[props.start]);

    return (
      <Provider>
        <Portal>
          <Modal
            visible = {props.visible}  
            onDismiss={hideModal}
            style={styles.myModal}>
                <ImageBackground 
                 source={require('../img/memoryBg.jpg')} 
                 resizeMode='cover'>
                    <Button icon="close" 
                     mode="text"
                     style={{width:25}}
                     onPress={hideModal}>
                    </Button>
                    <Text style={styles.winTxt}>You Win</Text>
                    <Text style = {styles.time}>Time :{time}</Text>
                    <Button 
                      icon="repeat" 
                      mode="contained" 
                      buttonColor="#F65314"
                      style={styles.btn}
                      contentStyle={{padding:2}}
                      labelStyle={{fontSize:16, fontWeight:'bold'}}
                      onPress={props.shuffleCards}>
                     Replay
                    </Button>
                    <Button 
                      icon="menu" 
                      mode="contained" 
                      buttonColor="#00A1F1"
                      style={styles.btn}
                      contentStyle={{padding:2}}
                      labelStyle={{fontSize:16, fontWeight:'bold'}}
                      onPress={() => props.navigation.navigate('Home')}>
                    Menu
                    </Button>
                </ImageBackground>
          </Modal>
        </Portal>
      </Provider>
    );
}

export default WinModal;