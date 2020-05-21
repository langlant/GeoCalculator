import React, { useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import Calculate from './Calculate';


const Clear = () =>{
<View style={styles.container}>
    <Calculate
      <Button
      title={ButtonTitle}
      onPress = {() => {
        updateStateObject({lat1: ''},{lon1: ''},{lat2: ''},{lon2: ''},{distance: ''}, {bearing: ''});

      }}
      />
    />
</View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Clear;