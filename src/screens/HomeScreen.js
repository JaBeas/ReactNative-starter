import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// destructured from (props.navigation) below. This cleans up onPress a little
const HomeScreen = ( {navigation} ) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text> 
      <Button 
        title='Go to Components Demo' 
        onPress={() => navigation.navigate('Components')}
      />
      <Button
      title='Go to List Demo'  
      onPress={() => navigation.navigate('List')}>
      </Button>
      <Button
      title='Go to Image Demo'  
      onPress={() => navigation.navigate('Image')}>
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
