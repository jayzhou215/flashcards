import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, black } from '../utils/colors'

class QuizView extends Component {

  state = {
    curPage: 0,

  }

  render() {
    const { questions } = this.props
    const { curPage } = this.state
    const totalPage = questions.length
    return (
      <View>
        <Text>QuizView - {curPage} / {totalPage} - {  JSON.stringify(questions[curPage]) }</Text>
      </View>
    )
  }
}

function mapStateToProps(state, {navigation}) {
  const deckId = navigation.state.params.deckId
  const deck = state[deckId]
  return {
    questions: deck.questions,
  }
}

export default connect(mapStateToProps)(QuizView)
