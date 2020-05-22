import React, { useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import {computeDistance, computeBearing} from './Calculations';

const Calculate = ({buttonTitle, buttonTitle2, latt1, lon1, lat2,lon2, distance, bearing}) => {
    const [state, setState] = useState({lat1: '', lon1: '', lat2: '', lon2: '', distance: '', bearing: ''});

    const updateStateObject = (vals) =>{
        setState({
            ...state,
            ...vals,
        });
    };
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder = 'Starting latitude' 
                onChangeText = {(lat1) => updateStateObject({lat1: lat1})} //or you could do (val) => {setName(val);}
                value = {state.lat1}/>
            <TextInput 
                placeholder = 'Starting longitude' 
                onChangeText = {(lon1) => updateStateObject({lon1: lon1})} //or you could do (val) => {setName(val);}
                value = {state.lon1}/>
            <TextInput 
                placeholder = 'Ending latitude' 
                onChangeText = {(lat2) => updateStateObject({lat2: lat2})} //or you could do (val) => {setName(val);}
                value = {state.lat2}/>
            <TextInput 
                placeholder = 'Ending longitude' 
                onChangeText = {(lon2) => updateStateObject({lon2: lon2})} //or you could do (val) => {setName(val);}
                value = {state.lon2}/>
            <Button 
            title= {buttonTitle}
            onPress = {() =>{
                updateStateObject({distance: `Distance: ${computeDistance( lat1, lon1, lat2, lon2)}`}, {bearing: `Bearing: ${computeBearing(lat1, lon1, lat2, lon2)}`}
            }} />

            <Button 
            title= {buttonTitle2}
            onPress = {() =>{
               updateStateObject({lat1: ''}, {lon1: ''},{lat2: ''}, {lon2: ''}, {distance: ''}, {bearing: ''})
}}/>
            <Text> {state.distance}</Text>
            <Text> {state.bearing}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default Calculate;
