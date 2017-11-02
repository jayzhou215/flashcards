import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, black, gray } from '../utils/colors'
import DeckItem from './DeckItem'
import { receiveDecks } from '../actions/decks'
import { getDecks } from '../utils/Storage'

class DeckList extends Component {

  componentDidMount() {
    getDecks().then((decks) => {
      this.props.dispatch(receiveDecks(decks))
    })
  }

  renderItem = ({item}) => (
    <DeckItem
      title={item.title}
      questionLength={item.questions ? item.questions.length : 0}
      onPress={ () => this.props.navigation.navigate('Deck', {deckId: item.title}) }/>
  )

  _keyExtractor = (item, index) => item.title

  separator = () => (
    <View style={ {height: 0.5, backgroundColor: black,} } />
  )

  render() {
    const { deckList }  = this.props
    return (
      <View style={{flex: 1}}>
        <FlatList
          ItemSeparatorComponent={this.separator}
          keyExtractor={this._keyExtractor}
          data={deckList}
          renderItem={this.renderItem}/>
      </View>
    )
  }
}



function mapStateToProps (decks) {
  const deckList = Object.keys(decks).map((key) => {
    return decks[key]
  })
  return {
    deckList
  }
}

export default connect(mapStateToProps)(DeckList)
