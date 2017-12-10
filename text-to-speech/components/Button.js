import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

/**
* Function that executes the speech action pressing a button,
* it also returns a custom "button like" component!.
* @param {function} onPress: function that "makes our smartphone talk" ;)
**/

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.touchable, colors.button]}
    >
      <Text style={[styles.text, colors.text]}>Tap to talk!</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    width: '80%'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  }
})

const colors = StyleSheet.create({
  button: {
    backgroundColor: '#f49e4c'
  },
  text: {
    color: 'white'
  }
})
