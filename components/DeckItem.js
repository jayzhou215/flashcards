import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { white, black, gray } from '../utils/colors'

function DeckItem ({onPress, title, questionLength}) {
  return (
    <View style={styles.itemContainer} >
      <TouchableOpacity onPress={onPress}>
        <Text style={ styles.header }>{title}</Text>
        <Text style={ styles.subHeader }>{questionLength} cards</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DeckItem

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: white,
  },
  header: {
    fontSize: 20,
    color: black,
    textAlign: 'center',
  },
  subHeader: {
    marginTop: 4,
    fontSize: 14,
    color: gray,
    textAlign: 'center',
  },
})
