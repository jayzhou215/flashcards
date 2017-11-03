import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'

class DeckView extends Component {

  goQuiz = () => {
    if (this.props.questionLength === 0) {
      Alert.alert('no questions yet...')
      return
    }
    this.props.navigation.navigate('Quiz', {deckId: this.props.title})
  }

  addCard = () => {
    this.props.navigation.navigate('AddCard', {deckId: this.props.title})
  }

  render () {
    const { title, questionLength, } = this.props
    return (
      <View style={{flex:1, backgroundColor: white}}>
        <View style={{flex:2, justifyContent: 'center'}}>
            <DeckItem title={title} questionLength={questionLength} fromDeckView={true} />
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.addCard}
            style={[styles.btn, {backgroundColor: white, borderColor: black}]}
            >
            <Text style={[styles.btnText, {color: black}]}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor={white}
            style={[styles.btn, {marginTop: 5, backgroundColor: black, borderWidth: 0}]}
            onPress={this.goQuiz}
            >
            <Text style={styles.btnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state, {navigation}) {
  const deckId = navigation.state.params.deckId
  const deck = state[deckId]
  return {
    title: deck.title,
    questionLength: deck.questions.length
  }
}

export default connect(mapStateToProps)(DeckView)
