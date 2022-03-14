import * as React from 'react';
import { useState} from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [syote,setSyote]=useState('');

  const speak = () => {
    const thingToSay = syote;
    console.log("syote ",syote)
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
        <TextInput style={styles.inputti}
          autoFocus={true}
          onChangeText={text => setSyote(text)}
        />
      <Button title="Press to hear some words" onPress={speak} />
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
  inputti:{
    fontSize: 18, 
    width: 210,
    borderColor:'black',
    borderWidth:2,

   }
});
