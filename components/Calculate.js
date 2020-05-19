import React, { useState , useReducer} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import Calculations from './components/Calculations';

const Calculate = ({buttonTitle, lat1, lon1, lat2,lon2, distance, bearing}) => {
    const [state, setState] = useState({coordinate: ''});

    const updateStateObject = (vals) =>{
        setState({
            ...state,
            ...vals,
        });
    };
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder = 'Enter the latitude of your starting location.' 
                onChangeText = {(lat1) => updateStateObject({coordinate: lat1})} //or you could do (val) => {setName(val);}
                value = {state.lat1}/>
            <TextInput 
                placeholder = 'Enter the longitude of your starting location.' 
                onChangeText = {(lon1) => updateStateObject({coordinate: lon1})} //or you could do (val) => {setName(val);}
                value = {state.lon1}/>
            <TextInput 
                placeholder = 'Enter the latitude of your end location.' 
                onChangeText = {(lat2) => updateStateObject({coordinate: lat2})} //or you could do (val) => {setName(val);}
                value = {state.lat2}/>
            <TextInput 
                placeholder = 'Enter the longitude of your end location.' 
                onChangeText = {(lon2) => updateStateObject({coordinate: lon2})} //or you could do (val) => {setName(val);}
                value = {state.lon2}/>
            <Button 
            title= {buttonTitle}
            onPress = {() =>{
                dist = Calculations.computeDistance(lat1, lon1, lat2, lon2);
                bear = Calculations.computeBearing(lat1, lon1, lat2, lon2);
                updateStateObject({distance: `Distance: ${dist}km`});
                updateStateObject({bearing: `Bearing: ${bear}`});
            }} />
        </View>
    );
};


export default Calculate;