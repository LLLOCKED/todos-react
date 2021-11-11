
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Todos({todo, deleteTodo, compliteTodo}) {
  return (
    <TouchableOpacity style={[styles.item, todo.done ? styles.itemColorDone : styles.itemColor]} onLongPress={ () => deleteTodo(todo.id)} 
        onPress = {() => compliteTodo(todo.id)}>
        <Text style={todo.done ? styles.textDone : styles.text}>{todo.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 20,
    opacity: 0.9
  },
  itemColor:{
    backgroundColor: '#AF8D94',
  },
  itemColorDone:{
    backgroundColor: 'gray',
  },
  text: {
      color: 'white',
  },
  textDone: {
    color: 'white',
    textDecorationColor: 'blue',
    textDecorationLine: 'line-through',

  }
});
