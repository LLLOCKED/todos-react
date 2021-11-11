
import React , {useState, useEffect} from 'react';
import { StyleSheet, Alert, FlatList, ImageBackground, Dimensions, SafeAreaView} from 'react-native';
import TodoItem from '../components/TodoItem'
import 'react-native-get-random-values'
import AddTodoItem from '../components/AddTodoItem'

export default function Home() {

  const image = require('../resource/image/2.jpg');

  const [todos, setTodos] = useState([]);
  const [createTodo, setCreateTodo] = useState('')

  const getCreateTodo = (createTodo) =>{
    if(createTodo.name.length > 3){
      setTodos([...todos, {...createTodo}])
    }else{
      Alert.alert("Название задачи должно быть не меньше 4 символов!")
    }
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => {
        return prevTodo.filter(todos => todos.id != id)
    })
  }

  const compliteTodo = (id) => {
      const index = todos.findIndex(todos => todos.id === id)
      let taskCopy = [...todos]
      if(taskCopy[index].done == false){
        taskCopy[index].done = true
      }else{
        taskCopy[index].done = false
      }
      setTodos(taskCopy)
  }

  const anotherFunc = (val) =>{
    setCreateTodo('')
  }


  return (
    <SafeAreaView style = {styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <AddTodoItem setCreateTodo= {setCreateTodo}
          getCreateTodo = {getCreateTodo}
          anotherFunc = {anotherFunc}
          createTodo = {createTodo}
      />
      <FlatList 
        style = {styles.flat}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo = {item} 
                    deleteTodo = {deleteTodo}
                    compliteTodo = {compliteTodo}/>
        )}
        keyExtractor={item => item.id}
        inverted={false}
      />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flat: {
    marginBottom: 50
  },
  text: {
    color: 'white',
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
