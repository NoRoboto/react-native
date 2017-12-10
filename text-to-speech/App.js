import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import { Speech, Constants } from 'expo'

import { TextInputMod } from './components/TextInputMod.js'
import { ImageMod } from './components/ImageMod.js'
import { Button } from './components/Button.js'
import { speechOptions } from './config/config'

export default class App extends React.Component {
  /**
  * "the right place to initialize state"
  * @state-param {string} isTalking: flag, true if Expo.Speech is speaking, otherwise
  * false.
  **/
  constructor() {
    super()
    this.state = { text: '' }
    this.handleTalk = this.handleTalk.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
  }

  /**
  * Function that invokes the text to speech api from expo sdk
  * @param {string} text: a message to speech
  **/

  handleTalk() {
    const { text } = this.state
    text.length > 0 && Speech.speak(text, speechOptions)
  }

  /**
  * Function that sets the text to speech
  * @param {string} message: new value for text (state variable)
  **/

  onChangeText(message) {
    this.setState({
      text: message
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.fullWidth}>
        <View style={[styles.fullWidth, colors.background]}>
          <View style={[styles.containerTitle]}>
            <Text style={styles.title}>Text To Speech</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.containerBody}>
              <ImageMod />
              <TextInputMod onChangeText={this.onChangeText} />
              <Button onPress={this.handleTalk} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  fullWidth: {
    flex: 1
  },
  horizontalCenter: {
    alignItems: 'center'
  },
  containerBody: {
    flex: 1,
    marginTop: '15%',
    marginBottom: '15%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerTitle: {
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: Constants.statusBarHeight + 10
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center'
  }
})

const colors = StyleSheet.create({
  background: {
    backgroundColor: '#21A0A0'
  }
})
