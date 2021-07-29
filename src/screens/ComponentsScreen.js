import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function ComponentsScreen(props) {

  const name = 'Jaikar'

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.name} >My name is {name}</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  }
})

export default ComponentsScreen;