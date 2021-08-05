import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

function BoxScreen() {
  return (
    <View style={styles.ParentStyle}>
      <View style={styles.viewOneStyle}/>
      <View style={styles.viewTwoStyle}/>
      <View style={styles.viewThreeStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  ParentStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }, 
  viewOneStyle: {
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  viewThreeStyle: {
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
})

export default BoxScreen;