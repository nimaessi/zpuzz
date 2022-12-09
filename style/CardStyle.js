import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    imgCard:{
        height: 110,
        width: 110
    },
    container : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        margin : 3,
        justifyContent : 'center',
        alignItems : 'center'     
    },
    itemStyle : {
        margin : 2,
        width : 110,
        height : 110
     }
});

export default styles;