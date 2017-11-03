import { StackNavigator } from 'react-navigation'
import { Tabs } from './Tabs'
import DeckView from './decks/DeckView'
import QuizView from './QuizView'
import AddCard from './AddCard'
import { white, black } from '../utils/colors'

export const MainNavigator = StackNavigator({
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
