import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculate from './components/Calculate';
import Calculations from './components/Calculate';
import Clear from './components/Clear';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> 'Please enter your coordinates you wish to calculate.' </Text>
      <Calculate buttonTitle = 'Calculate'/>
      <Clear buttonTitle = 'Clear'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
