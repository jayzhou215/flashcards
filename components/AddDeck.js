import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { styles } from '../utils/styles'
import { getDeck, saveDeckTitle } from '../utils/Storage'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'

class AddDeck extends Component {

  state = {
    title: null,
  }

  submit = () => {
    const title = this.state.title
    if (!title) {
      Alert.alert('Input a title please!')
      return
    }
    saveDeckTitle(title)
      .then((success) => {
        if (success) {
          this.setState(() => ({title: null}))
          Alert.alert('success')
          this.props.dispatch(addDeck({
            [title]: {title, questions: []}
          }
          ))
          if (this.textInput) {
            this.textInput.clear()
          }
        } else {
          Alert.alert('exist deck title: ' + title)
        }
      })

  }

  render() {
    return (
      <View style={[styles.container, styles.center, {paddingLeft: 24, paddingRight: 24}]}>
        <Text>{JSON.stringify(this.props.decks)}</Text>
        <Text style={[styles.bigText, {fontSize: 48}]} >What is the title of your new deck?</Text>
        <TextInput
          style={[styles.input, {marginTop: 40, }]}
          onChangeText={(text) => {this.setState( ()=>({title: text}))} }
          ref={input => { this.textInput = input }}
          placeholder='Deck title'/>
        <TouchableOpacity style={styles.btn} onPress={this.submit}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddDeck)
