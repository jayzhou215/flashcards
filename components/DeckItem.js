import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { white, black, gray } from '../utils/colors'

function DeckItem ({onPress, title, questionLength, fromDeckView}) {
  return (
    <View style={styles.itemContainer} >
      <TouchableOpacity onPress={onPress}>
        <Text style={ [styles.header, fromDeckView && {fontSize: 30}] }>{title}</Text>
        <Text style={ [styles.subHeader, fromDeckView && {fontSize: 20}] }>{questionLength} cards</Text>
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
