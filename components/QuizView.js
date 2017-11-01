import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, black, green, red } from '../utils/colors'
import { styles } from '../utils/styles'

class QuizView extends Component {

  state = {
    curPage: 0,
    isQuestion: false,
    correctNumber: 0,
  }

  render() {
    const { questions } = this.props
    const { curPage, isQuestion } = this.state
    const totalPage = questions.length
    return (
      <View style={styles.container}>
        <Text>{curPage} / {totalPage}</Text>
        <View style={styles.topContainer}>
          <Text style={styles.bigText}>{ isQuestion ? questions[curPage].question : questions[curPage].answer }</Text>
          <Text style={styles.redText}>{ isQuestion ? 'Question' : 'Answer' }</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            underlayColor={green}
            style={[styles.btn, { backgroundColor:green, borderColor:green }]}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor={red}
            style={[styles.btn, { backgroundColor:red, borderColor:red, marginTop: 5 }]}>
            <Text style={styles.btnText}>Incorrect</Text>
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
    questions: deck.questions,
  }
}

export default connect(mapStateToProps)(QuizView)
