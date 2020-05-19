import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

const Clear = ({buttonTitle}) => {
    const [state, setState] = useState({name: '', greeting});

    const updateStateObject = (vals) =>{
        setState({
            ...state,
            ...vals,
        });
    };
    return (
        <View style={styles.container}>
            <Text> {state.greeting} </Text>
            <TextInput 
                placeholder = 'Enter your name' 
                onChangeText = {(val) => updateStateObject({name: val})} //or you could do (val) => {setName(val);}
                value = {state.name}/>
            <Button 
            title= {buttonTitle}
            onPress = {() =>{
                updateStateObject({greeting: `${greeting} to you ${state.name}`});
            }} />
        </View>
    );
};

export default Clear;