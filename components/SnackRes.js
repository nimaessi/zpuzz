import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const SnackRes = ({visible,setSnack,result}) => {

  const onToggleSnackBar = () => setSnack(!visible);
  const onDismissSnackBar = () => setSnack(false);
  var txt;
  result ? txt = 'Game Finished! Winning player :'+ result :'Game Finished';
  return (
    <View style={styles.container}>
      <Snackbar 
        onDismiss={onDismissSnackBar}
        visible={visible}>
       {txt}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SnackRes;