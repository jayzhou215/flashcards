import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../utils/styles'

class AddDeck extends Component {

  render() {
    return (
      <View style={[styles.container, styles.center, {paddingLeft: 24, paddingRight: 24}]}>
        <Text style={[styles.bigText, {fontSize: 48}]} >What is the title of your new deck?</Text>
        <TextInput
          style={[styles.input, {marginTop: 40, }]}
          onChangeText={(text) => {}}
          placeholder='Deck title'/>
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default AddDeck