import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

const reducer = (state, action) => {
  // state === {count: number}
  // action === {type: 'increment' || 'decremet', payload: 1} 
  switch(action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload}
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

function CounterScreen(props) {

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <View>
      <Button 
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 })
        }}
      />
      <Button 
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 })

        }}
      />
      
      <Text>Current Count: {state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
})

export default CounterScreen;