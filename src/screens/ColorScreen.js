import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native'

function ColorScreen(props) {

  const [colors, setColors] = useState([])

  return (
    <View>
      <Button 
        title='Add a color'
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}  
      />
      <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={( { item } ) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }}/>
          )
        }}
      />

    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 265)
  const green = Math.floor(Math.random() * 265)
  const blue = Math.floor(Math.random() * 265)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  
})

export default ColorScreen;