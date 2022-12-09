import * as React from 'react';
import { SegmentedButtons, Button, Menu, Divider, Provider } from 'react-native-paper';
import { StyleSheet,View} from 'react-native';

const SegBtn = (props) => {

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = (type) => {
    props.setType(type);
    setVisible(false);
  }

  return (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={ 
          <Button 
           icon="dots-vertical"
           buttonColor='#34A853' 
           mode="contained" 
           onPress={openMenu}>
           New game
          </Button>}>

          <Menu.Item 
           onPress={() => {closeMenu('two');}} 
           leadingIcon="account-multiple" 
           title="Two player" />
          <Menu.Item 
           onPress={() => {closeMenu('single');}} 
           leadingIcon="account-outline"  
           title="Single player" />
          <Divider />
          <Menu.Item 
           onPress={() => {closeMenu('single');}} 
           leadingIcon="repeat" 
           title="Repeat" />
        </Menu>
  );

}

export default SegBtn;

const styles = StyleSheet.create({
  segStyle:{
    marginTop:1,
  }
});