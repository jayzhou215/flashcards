import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/types'

function decks ( state = {}, action ) {

  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case ADD_CARD:
      const { title, card } = action
      const { questions } = state[title]
      questions.push(card)
      return {
        ...state,
        [title]: {
          title,
          questions,
        }
      }
    default:
      return state
  }

}

export default decks
