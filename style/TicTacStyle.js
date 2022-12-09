import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    segContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    typeGame:{
      fontFamily:'PermanentMarker-Regular',
      fontSize: 18,
      marginBottom: 20,
      color: '#34A853'
    },
    container:{
      flex: 9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    surface:{
      width: 100,
      height: 100,
      borderRightWidth: 7,
      borderTopWidth: 7,
      borderColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#E1E8ED'
      
    },
    surfaceTop:{
      width: 100,
      height: 100,
      borderRightWidth: 7,
      borderColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#E1E8ED'
      
    },
    surfaceRight:{
      width: 100,
      height: 100,
      borderTopWidth: 7,
      borderColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#E1E8ED'
      
    },
    surfaceTopRight:{
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#E1E8ED'
      
    },
    row:{
      display : 'flex',
      flexDirection : 'row',
      flexWrap : 'wrap',
      justifyContent : 'center',
      alignItems : 'center'     
    },
    xo:{
      width: 99,
      height: 99,
      alignItems: "center"
    },
    txtXo:{
      fontFamily:'PermanentMarker-Regular',
      fontSize: 65,
      color:'#66757F'
    },
    btnNew:{
      marginTop: 25
    }
  
  });
  export default styles;  