import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/types'

function decks ( state = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}, action ) {

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
