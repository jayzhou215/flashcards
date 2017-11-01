import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, black, gray } from '../utils/colors'
import DeckItem from './DeckItem'

class DeckList extends Component {

  renderItem = ({item}) => (
    <DeckItem
      title={item.title}
      questionLength={item.questions.length}
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
