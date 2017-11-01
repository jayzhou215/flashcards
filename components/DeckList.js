import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckList extends Component {

  renderItem = (item) => (
    <View style={{padding: 10,}} >
      <TouchableOpacity onPress={ () =>this.props.navigation.navigate('Deck', {
          deckId: item.item.title
        }) }>
        <Text>{JSON.stringify(item)}</Text>
      </TouchableOpacity>
    </View>
  )

  _keyExtractor = (item, index) => item.title

  render() {
    const { deckList }  = this.props
    return (
      <View style={{flex: 1}}>
        <Text>Decks</Text>
        <FlatList
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
