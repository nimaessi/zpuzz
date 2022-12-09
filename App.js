import React from 'react';
import {useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from './components/Game';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import TicTacToe from './components/TicTacToe';
import Test from './components/Test';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen options={{headerShown:false, orientation: 'portrait'}} name="SplashScreen" component={SplashScreen}/>
          <Stack.Screen options={{headerShown:false}} name="Game" component={Game} />
          <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown:false , orientation: 'portrait'}} name="TicTacToe" component={TicTacToe} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
