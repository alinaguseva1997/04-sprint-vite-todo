import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const desksApi = {
  fetchDesks() {
    return instance.get<FetchDecksResponseType>('/v2/decks')
  }
}

type FetchDecksResponseType = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}
export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: Date
  updated: Date
  cardsCount: number
  author: Author
}
type Author = {
  id: string
  name: string
}
type Pagination = {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}