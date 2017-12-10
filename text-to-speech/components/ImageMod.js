import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'

/**
* Function that executes the actions of pressing a image,
* it also returns a my github profile's image in a react component!.
* This component uses inline styles.
**/

export function ImageMod() {
  return (
    <TouchableOpacity
      onPress={() => openWebBrowser('https://github.com/NoRoboto')}
    >
      <Image
        source={{
          uri:
            'https://avatars1.githubusercontent.com/u/8453089?s=400&u=9873e91bd823c820ae77540203d3388d340b55a9&v=4'
        }}
        style={{ width: 125, height: 125 }}
      />
    </TouchableOpacity>
  )
}

/**
* Function that opens a WebBrowser.
* @param {string} url: a web url
**/

function openWebBrowser(url) {
  WebBrowser.openBrowserAsync(url)
}
