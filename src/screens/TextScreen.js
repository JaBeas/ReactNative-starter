import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'

function TextScreen(props) {

  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
     />
      {password.length < 5 ? <Text>Password must be five characters</Text> : null}
    </View>

  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
})

export default TextScreen;