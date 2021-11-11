import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({setCreateTodo, getCreateTodo, anotherFunc, createTodo}) {
  return (
      <SafeAreaView>
        <TextInput placeholder = 'Новая задача' style={styles.textInput} 
        value={createTodo}
        onChangeText = {text => setCreateTodo(text)} 
      >          
      </TextInput>
      <TouchableOpacity style={styles.item} 
        onPress= { () => {getCreateTodo({id: uuidv4(), name: createTodo, done: false}), anotherFunc()}}
        >
        <Text style={styles.text}>Добавить</Text>
      </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
  text: {
      color: 'white',
  },
  item: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 50,
    backgroundColor: '#555751',
    alignItems: 'center',
    borderRadius: 20,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    height: 50,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
});
