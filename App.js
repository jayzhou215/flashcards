import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { lightBlack, white, black } from './utils/colors'
import { Constants } from 'expo'
import reducer from './reducers/decks'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import { setLocalNotification } from './utils/notifications'

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
    backgroundColor: white,

  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: DeckView,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.deckId
    })
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card'
    }
  }
}, {
  navigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: black,
    },
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
