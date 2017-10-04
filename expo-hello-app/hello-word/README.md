-------------

<p align="center"><img src="https://camo.githubusercontent.com/0a5cdea7053e94023fb22b5241aa5e774ce0df9e/68747470733a2f2f63646e2e7261776769742e636f6d2f616873616e617a696d2f776f726b73686f702f6d61737465722f696d672f72656163742d6e61746976652d6c6f676f2e737667" width="300"> <img src="https://forums.expo.io/uploads/expo/original/1X/1d48ac50860f7131a2c5ec14c5d3e61001adfdcd.png" width="180"></p>

<p align="center">Hello Word Example - Buid Native apps</p>

[comment]: # (Resources)

[logo]: https://forums.expo.io/uploads/expo/original/1X/1d48ac50860f7131a2c5ec14c5d3e61001adfdcd.png

Pre-conditions
-------------

#### <i class="icon-list"></i> We need

> - [Nodejs](https://nodejs.org/en/)
> - [Exponet CLI](https://expo.io/)
> - [Exponet App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)
> - (Optional) [Yarn](https://yarnpkg.com/en/)

> **Note:**

> - Expoclient app must be installed on our mobile device to view our app in "real time" without the need for any android emulator or ios,  also, you can install emulators like genimotion.
> - You can use yarn instead of npm, the commands that appear in the repository will mostly be used with yarn

Get Started
-------------
```sh
$ exp init hello-word
$ cd hello-word
$ exp start
```

... And that's it!

> **Note:**  You need to create an account at expo, the above command will allow you to do this.

#### <i class="icon-folder"></i> Project Structure

Expo creates the following structure in our working folder, here a brief description of the most important files:

| FILE NAME        | Description                  | More Information  |
 ----------------- | ---------------------------- | ------------------
| package.json| Node ecosystem configuration file   | [Nodesource](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/) |
| app.json | "Is your go-to place for configuring parts of your app that don’t belong in code"   | [Expo](https://docs.expo.io/versions/latest/guides/configuration.html)  |
| App.js   | React native root file component | [Expo](https://docs.expo.io/versions/latest/guides/routing-and-navigation.html#reviewing-the-tab-template) |
| .babelrc  | Babel API options file | [Babeljs](https://babeljs.io/docs/usage/babelrc/) |
| .watchmanconfig | Watchman configuration file | [Watchman](https://facebook.github.io/watchman/) |


### Sources
  [1]: https://expo.io/
  [2]: https://facebook.github.io/react-native/
