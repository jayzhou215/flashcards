import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { lightBlack, white } from './utils/colors'
import { Constants } from 'expo'
import reducer from './reducers/decks'

function DeckView ({navigation}) {
  return (
    <View>
      <Text>DeckView {navigation.state.params.deckId && JSON.stringify(navigation.state.params.deckId)}</Text>

    </View>
  )
}

function AddDeck() {
  return (
    <View>
      <Text>Add Deck</Text>
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'ADD DECKS',
    },
  }
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activateTintColor: lightBlack,
    height: 56,
    backgroundColor: white,

  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: DeckView,
  }
})

function LightBlackStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar  translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


export default class App extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
