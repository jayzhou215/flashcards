import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../utils/styles'

class AddCard extends Component {

  render() {
    return (
      <View style={[styles.container, styles.center, {paddingLeft: 24, paddingRight: 24}]}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {}}
          placeholder='input question'/>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {}}
          placeholder='input anwser'/>
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default AddCard
