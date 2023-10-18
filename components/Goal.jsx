import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Goal({ title, onDelete }) {
  
  const handleOnPressGoal = () => {
    onDelete(title)
  }

  return (
    <Pressable onPress={handleOnPressGoal}>
      <View>
        <Text style={style.goal}>{title}</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create(
  {
    goal: {
      padding: 30,
      backgroundColor: '#00ff7f',
      marginVertical: 10,
      borderRadius: 20
    }
  }
)
