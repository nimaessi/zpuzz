import { Text, View, ImageBackground,ScrollView,Image,Animated } from 'react-native';
import { Switch,Surface,Button } from 'react-native-paper';
import React,{useState} from 'react';
import { NativeModules } from 'react-native';
import styles from '../style/HomeStyle';
import { playSound } from './Function';

const Home = ({navigation}) => {
  const { SharePrefModule } = NativeModules;
  const [isSwitchOn, setIsSwitchOn] = useState(SharePrefModule.getSound());
  const onToggleSwitch = () => {
    isSwitchOn ? SharePrefModule.setSound(false) : SharePrefModule.setSound(true);
    console.log('Change setting ....',SharePrefModule.getSound());
    setIsSwitchOn(!isSwitchOn);
  }
 
  return (
    <ImageBackground 
      source={require('../img/memoryBg.jpg')} 
      resizeMode='cover' 
      style={{flex:1}}>
        <ScrollView>
          <View style={styles.container}>
              <Text style={styles.appName}>Zpuzz</Text>

              <Surface style={styles.surfacePlay} elevation={4}>
                <Button
                  style={styles.btnStyle}
                  icon="play" 
                  mode="text" 
                  textColor='#ffffff'
                  labelStyle={{fontSize:16, fontWeight:'bold'}}
                  onPress={()=> {navigation.navigate('Game'); playSound('click');}}>
                 Memory Game
                </Button>
              </Surface>

              <Surface style={styles.surfaceScore} elevation={4}>
                <Button
                  style={styles.btnStyle}
                  icon="play" 
                  mode="text" 
                  textColor='#ffffff'
                  labelStyle={{fontSize:16, fontWeight:'bold'}}
                  onPress={()=>navigation.navigate('TicTacToe')}>
                  Tic Tac Toe
                </Button>
              </Surface>
              
              <Surface style={styles.surfaceSound} elevation={4}>
                <Text style ={styles.switchText}>Sound</Text>
                <Switch value={isSwitchOn} color='#A4C639' onValueChange={onToggleSwitch} />
              </Surface>
           </View>
        </ScrollView>
    </ImageBackground>
  )
}

export default Home;

