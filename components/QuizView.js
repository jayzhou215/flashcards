import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, StyleSheet, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import { white, black, green, red } from '../utils/colors'
import { styles } from '../utils/styles'

class QuizView extends Component {

  state = {
    curPage: 0,
    isInQuestionPage: true,
    correctNumber: 0,
  }

  toggle = () => {
    this.setState((state) => ({
      ...state,
      isInQuestionPage: !state.isInQuestionPage
    }))
  }

  onCorrectPressed = () => {
    if (this.isLastPage()) {
      this.showResultInfo(this.state.correctNumber + 1)
    } else {
      this.setState((state) => ({
        ...state,
        isInQuestionPage: true,
        correctNumber: state.correctNumber + 1,
        curPage: state.curPage + 1,
      }))
    }
  }

  onIncorrectPressed = () => {
    if (this.isLastPage()) {
      this.showResultInfo(this.state.correctNumber)
    } else {
      this.setState((state) => ({
        ...state,
        isInQuestionPage: true,
        curPage: state.curPage + 1,
      }))
    }
  }

  isLastPage () {
    return this.state.curPage + 1 >= this.props.questions.length
  }

  restartQuiz = () => {
    this.setState(()=> ({
      curPage: 0,
      isInQuestionPage: true,
      correctNumber: 0,
    }))
  }

  back = () => {
    this.props.navigation.goBack()
  }

  showResultInfo = (correctNumber) => {
    const { questions } = this.props
    var result
    if (correctNumber > questions.length / 2) {
      result = `Good! ${correctNumber} questions is correct!`
    } else if (correctNumber === 0) {
      result = `Ah oh... no question is correct.`
    } else {
      result = `${correctNumber} questions is correct!`
    }
    const restartQuiz = this.restartQuiz
    const back = this.back
    Alert.alert(result,
      '',
      [
        { text: 'restart quiz', onPress: restartQuiz },
        { text: 'back', onPress: back }
      ],
      { cancelable: false }
    )
  }

  render() {
    const { questions } = this.props
    const { curPage, isInQuestionPage } = this.state
    const totalPage = questions.length
    return (
      <View style={styles.container}>
        <Text>{curPage + 1} / {totalPage}</Text>

        <View style={styles.topContainer}>
          <Text style={styles.bigText}>
            { isInQuestionPage ? questions[curPage].question : questions[curPage].answer }
          </Text>
          <TouchableOpacity onPress={this.toggle}>
            <Text style={styles.redText} >
              { isInQuestionPage ? 'Question' : 'Answer' }
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={this.onCorrectPressed}
            underlayColor={green}
            style={[styles.btn, { backgroundColor:green, borderColor:green }]}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onIncorrectPressed}
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
