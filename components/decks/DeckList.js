import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, black, gray } from '../../utils/colors'
import DeckItem from './DeckItem'
import { receiveDecks } from './actions'
import { getDecks } from '../../utils/Storage'
import { styles } from '../../utils/styles'

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

  goAddDeck = () => {
    this.props.navigation.navigate('AddDeck')
  }

  render() {
    const { deckList }  = this.props
    if (deckList.length === 0) {
        return (
          <View style={[styles.container, styles.center]}>
            <Text>No deck yet...</Text>
            <TouchableOpacity onPress={this.goAddDeck} style={styles.btn}>
              <Text style={styles.btnText}>Add a new deck</Text>
            </TouchableOpacity>
          </View>
        )
    }
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
