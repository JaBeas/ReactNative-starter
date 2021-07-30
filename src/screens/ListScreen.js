import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

function ListScreen(props) {


// two ways of assigning keys to an array of obj. First is directly below by inputing the keys in 
// before runtime. The other is adding them at runtime using keyExtractor which is part of FlatList   
// keyExtractor in this case uses item.name as the key, this can be done only if all the .name strings are uniqe 

// const friends = [
//   {name: 'Friend #1', key: '1'},
//   {name: 'Friend #2', key: '2'},
//   {name: 'Friend #3', key: '3'},
//   {name: 'Friend #4', key: '4'},
//   {name: 'Friend #5', key: '5'},
//   {name: 'Friend #6', key: '6'},
//   {name: 'Friend #7', key: '7'},
//   {name: 'Friend #8', key: '8'},
//   {name: 'Friend #9', key: '9'},
// ]

const friends = [
  {name: 'Friend #1', age: 1},
  {name: 'Friend #2', age: 2},
  {name: 'Friend #3', age: 3},
  {name: 'Friend #4', age: 4},
  {name: 'Friend #5', age: 5},
  {name: 'Friend #6', age: 6},
  {name: 'Friend #7', age: 7},
  {name: 'Friend #8', age: 8},
  {name: 'Friend #9', age: 9},
]

  return (
  
    <FlatList 
    // changes the list to a horizontal orientation
    // horizontal={true}
    // removes horizontal scroll bar
    // showsHorizontalScrollIndicator={false}

    keyExtractor={(friends) => friends.name}
      data={friends} 
      // below {item} is destructuring for the friends array 
      renderItem={( {item} ) => {
        return (
          <Text style={styles.textStyle}> 
           {item.name} - Age {item.age}
          </Text>
        )
      }}  
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen;