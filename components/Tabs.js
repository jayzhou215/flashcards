import DeckList from './decks/DeckList'
import AddDeck from './AddDeck'
import { TabNavigator } from 'react-navigation'
import { white, lightBlack } from '../utils/colors'

export const Tabs = TabNavigator({
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
