import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { styles } from '../utils/styles'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/Storage'
import { addDeck } from '../actions/decks'

class AddCard extends Component {

  state = {
    question: null,
    answer: null
  }

  onInputQuestion = (text) => {
    this.setState((state) => ({
      ...state,
      question: text
    }))
  }

  onInputAnswer = (text) => {
    this.setState((state) => ({
      ...state,
      answer: text
    }))
  }

  submitCard = () => {
    if (!this.state.question) {
      Alert.alert('Input a question please!')
      return
    }
    if (!this.state.answer) {
      Alert.alert('Input a answer please!')
      return
    }
    const { question, answer } = this.state
    const { title, questions } = this.props
    addCardToDeck(title, {question, answer})
    questions.push({question, answer})
    this.props.dispatch(addDeck({
      [title] : {
        title,
        questions,
      }
    }))
    this.props.navigation.goBack()
  }


  render() {
    const { title, questions } = this.props
    return (
      <View style={[styles.container, styles.center, {paddingLeft: 24, paddingRight: 24}]}>
        <Text>{title} - {questions?JSON.stringify(questions): "no questions yet"}</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onInputQuestion}
          placeholder='input question'/>
        <TextInput
          style={styles.input}
          onChangeText={this.onInputAnswer}
          placeholder='input anwser'/>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.submitCard}
          >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

function mapStateToProps (decks, { navigation }) {
  const { deckId } = navigation.state.params
  const { title, questions } = decks[deckId]
  return {
    title,
    questions,
    navigation,
  }
}

export default connect(mapStateToProps)(AddCard)
