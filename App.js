/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Goal from './components/Goal';
import GoalInput from './components/GoalInput';
import Login from './screens/Login';


function App() {

  let [goalText,setGoalText] = useState('')
  let [goals, setGoals] = useState([])

  const handleClick = (enteredText) => {
    setGoals(
      [...goals, enteredText]
    )
  }

  const handleDelete = (id) => {
        setGoals(
          goals.filter(
            goal => goal != id
          )
        )
  }

  let [modalVisible, setModalVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalVisible(!modalVisible)
  }

  return (
      <View style={style.mainContainer}>
        <Login></Login>
      </View>      
  );
}

const style = StyleSheet.create(
  {
    mainContainer: {
      padding: 20,
      flex: 1
    },
  }
)

export default App;
