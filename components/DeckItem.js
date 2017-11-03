import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { white, black, gray } from '../utils/colors'
import { styles } from '../utils/styles'

function DeckItem ({onPress, title, questionLength, fromDeckView}) {
  return (
    <View style={[styles.container, styles.center, {height: 150}]} >
      <TouchableOpacity onPress={onPress}>
        <Text style={ [styles.header, fromDeckView && {fontSize: 30}] }>{title}</Text>
        <Text style={ [styles.subHeader, fromDeckView && {fontSize: 20}] }>{questionLength} cards</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DeckItem
