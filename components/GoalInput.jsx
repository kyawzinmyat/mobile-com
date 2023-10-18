import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput(props) {
    let [goalText, setGoalText] = useState('')
    const handleTextInput = (enteredText) => {
        setGoalText(enteredText);
    }

    const handleAdd = () => {
        props.addGoal(goalText)
        setGoalText('')
    }

    return (
       <Modal visible={props.visible} animationType='slide'>
         <View style={style.TextInputContainer}>
            <TextInput value={goalText} style={style.textInput} onChangeText={handleTextInput}></TextInput>
            <Button title='Add Goal' onPress={handleAdd} />
        </View>
       </Modal>
    )
}

const style = StyleSheet.create({
    textInput: {
        borderColor: '#ccc',
        borderWidth: 2,
        width: '70%',
        borderRadius: 20
    },
    TextInputContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})