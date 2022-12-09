import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      flex:1
    },
    appName:{
      fontFamily:'PermanentMarker-Regular',
      textAlign: 'center',
      fontSize: 35,
      marginTop: 50,
      color: '#F65314'
  },
  surfaceSound: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 8,
    height: 60,
    width: 300,
    marginTop: 40,
    borderRadius: 25,
    backgroundColor: '#F65314'
  },
  surfacePlay: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 8,
    height: 60,
    width: 300,
    marginTop: 40,
    borderRadius: 25,
    backgroundColor: '#00A1F1'
  },
  surfaceScore: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 8,
    height: 60,
    width: 300,
    marginTop: 40,
    borderRadius: 25,
    backgroundColor: '#7B0099'
  },
  
  surfaceAbout: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 8,
    height: 60,
    width: 300,
    marginTop: 40,
    borderRadius: 25,
    backgroundColor: '#FFBB00'
  },
  btnStyle:{ 
    height: 40,
    width: 300
  },
  
  switchText:{
    fontFamily:'PermanentMarker-Regular',
    fontWeight:'bold',
    padding: 2,
    fontSize: 16,
    color: '#ffffff'
  }
  });

  export default styles;