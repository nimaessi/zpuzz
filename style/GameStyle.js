import { StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    containerBg:{
      alignItems: 'center',
      flex:1
    },
    appName:{
        fontFamily:'PermanentMarker-Regular',
        textAlign: 'center',
        fontSize: 25,
        top: 15,
    },
    txtView:{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    newGame:{
      width: 200,
      marginTop: 35,
      margin: 15,
    },
    imgCard:{
      height: 120,
      width: 120
  },
});

export default styles;