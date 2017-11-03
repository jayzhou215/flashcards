import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { lightBlack, white, black } from './utils/colors'
import { Constants } from 'expo'
import reducer from './components/decks/reducer'
import { setLocalNotification } from './utils/notifications'
import { MainNavigator } from './components/MainNavigator'

function LightBlackStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar  translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <LightBlackStatusBar backgroundColor={lightBlack} barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
