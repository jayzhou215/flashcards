import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'

function DeckView () {
  return (
    <View>
      <TouchableOpacity>
          <Text>DeckView</Text>
      </TouchableOpacity>

    </View>
  )
}

function DeckList ({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Deck')}>
          <Text>DeckList</Text>
      </TouchableOpacity>
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
  },
  Deck: {
    screen: DeckView,
  }
})


export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
