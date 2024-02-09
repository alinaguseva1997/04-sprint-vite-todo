import {Deck} from "./decks-api";

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return {...state, decks: action.decks}
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({type: 'SET-DECKS' as const, decks })

type DecksActions = ReturnType<typeof setDecksAC>
