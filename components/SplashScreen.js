import { View, StyleSheet,ImageBackground} from 'react-native';
import React,{useEffect} from 'react';

const SplashScreen = ({navigation}) => {
 
useEffect(() =>{
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);
},[]);
  

return(
  <View style={styles.container}>
    <ImageBackground source={require('../img/memoryGamecopy.jpg')} 
      resizeMode = "cover" 
      style={styles.image}>
    </ImageBackground>
  </View>
);

}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});