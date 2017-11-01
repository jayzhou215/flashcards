import React, { Component } from 'react'
import { Text, View } from 'react-native'

class DeckView extends Component {

  static navigationOptions = ({navigation}) => {
    const title = navigation.state.params.deckId
    return {
      title
    }
  }

  render () {
    const title = this.props.navigation.state.params.deckId
    return (
      <View>
        <Text>DeckView - {title}</Text>

      </View>
    )
  }
}

export default DeckView
