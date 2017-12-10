import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

/**
* Function that returns a custom textInput component!.
* @param {function} onPress: function that "makes our smartphone talk" ;)
**/

export function TextInputMod({ onChangeText }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write something to speech"
        placeholderTextColor="white"
        multiline
        numberOfLines={4}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: 10
  },
  textInput: {
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    borderColor: '#FFFF'
  }
})
