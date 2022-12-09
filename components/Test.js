import { StyleSheet,Animated, Text, View, Button, SafeAreaView } from 'react-native';
import React, { useRef,useEffect } from "react";

const Test = ({navigation}) => {
  
  const neonLight = useRef(new Animated.Value(0)).current;

  useEffect(() =>{
    Animated.loop(
      Animated.sequence([
        Animated.timing(neonLight, {
          duration: 500,
          toValue: 24,
          useNativeDriver: true
        }),
        Animated.timing(neonLight, {
          duration: 100,
          toValue: 0,
          useNativeDriver: true
        }),
        Animated.timing(neonLight, {
          duration: 100,
          toValue: 24,
          useNativeDriver: true
        })
      ]),
      {
        iterations: -1
      }
    ).start()
  },[]);
    
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.myImg,{elevation: neonLight,backgroundColor: 'violet'}]}>
      </Animated.View>
      <Animated.View style={[styles.myImg,{elevation: neonLight,backgroundColor: 'violet'}]}>
      </Animated.View>
      <Animated.View style={[styles.myImg,{elevation: neonLight,backgroundColor: 'violet'}]}>
      </Animated.View>
    </SafeAreaView>
  );
}

export default Test;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'#0f0f0f',
      flexDirection:'row'
    },
    myImg:{
        width:45,
        height:300,
        borderRadius:16,
        shadowColor: 'white',
        margin:16,
        shadowOffset: {
          width: 32,
          height: 25,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 33,
    }
  });