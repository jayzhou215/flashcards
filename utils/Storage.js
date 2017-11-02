import { AsyncStorage } from 'react-native'

const KEY_DECKS = 'decks'

// return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(KEY_DECKS)
    .then(JSON.parse)
}

// take in a single id argument and return the deck associated with that id.
export function getDeck(deckId) {
  return AsyncStorage.getItem(KEY_DECKS)
    .then(JSON.parse)
    .then((data) => {
      return data[deckId]
    })
}

// take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
  return AsyncStorage.getItem(KEY_DECKS)
    .then(JSON.parse)
    .then((data) => {
      if (data && data[title]) {
        return false
      }
      const newData = {
        ...data,
        [title] : {title,}
      }
      console.log(newData)
      AsyncStorage.setItem(KEY_DECKS, JSON.stringify(newData))
      return true
    })

}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (!data[title]) {
        console.log('Error! no such title: ', title)
        return
      }
      const oldQuestions = data[title].questions
      const newQuestions = oldQuestions ? oldQuestions.push(card) : [card]
      const newData = {
        ...data,
        [title] : {title, newQuestions}
      }
      AsyncStorage.setItem(KEY_DECKS, JSON.stringify(newData))
    })

}
