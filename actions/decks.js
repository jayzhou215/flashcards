export const RECEIVE_DECKS = 'receive_decks'
export const ADD_DECK = 'add_deck'

export function receiveDecks (decks) {
  return {
    type : RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type : ADD_DECK,
    deck,
  }
}
