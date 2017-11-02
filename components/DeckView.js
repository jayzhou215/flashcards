import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'
import { white, black } from '../utils/colors'

class DeckView extends Component {

  goQuiz = () => {
    this.props.navigation.navigate('Quiz', {deckId: this.props.title})
  }

  addCard = () => {
    this.props.navigation.navigate('AddCard', {deckId: this.props.title})
  }

  render () {
    const { title, questions, } = this.props
    return (
      <View style={{flex:1, backgroundColor: white}}>
        <View style={{flex:2, justifyContent: 'center'}}>
            <DeckItem title={title} questionLength={questions ? questions.length : 0} fromDeckView={true} />
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.addCard}
            >
            <Text style={styles.addCardBtn}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor={white}
            style={[styles.startQuizBtn, {marginTop: 5}]}
            onPress={this.goQuiz}
            >
            <Text style={styles.startQuizText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addCardBtn: {
    borderRadius: Platform.OS === 'ios' ? 6 : 2,
    borderColor: black,
    borderWidth: 1,
    fontSize: 16,
    color: black,
    paddingTop: 16,
    paddingBottom: 16,
    width: 200,
    textAlign: 'center',
  },
  startQuizBtn: {
    borderRadius: Platform.OS === 'ios' ? 6 : 2,
    borderWidth: 1,
    borderColor: white,
    backgroundColor: black,
    paddingTop: 16,
    paddingBottom: 16,
    width: 200,

  },
  startQuizText: {
    fontSize: 16,
    color: white,
    textAlign: 'center',
  }
})

function mapStateToProps(state, {navigation}) {
  const deckId = navigation.state.params.deckId
  const deck = state[deckId]
  return {
    title: deck.title,
    questions: deck.questions
  }
}

export default connect(mapStateToProps)(DeckView)
