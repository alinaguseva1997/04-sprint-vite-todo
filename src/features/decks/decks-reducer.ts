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
    case 'ADD-DECK': {
      return {...state, decks: [action.deck,...state.decks] }
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({type: 'SET-DECKS' as const, decks })
export const addDeckAC = (deck: Deck) => ({type: 'ADD-DECK' as const, deck })

type DecksActions =
    | ReturnType<typeof setDecksAC>
    | ReturnType<typeof addDeckAC>
