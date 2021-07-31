import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native'

function ImageDetail(props) {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image score - {props.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
})

export default ImageDetail;