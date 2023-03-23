import { BookAction, BookState, FetchBooksAction } from '../types/books.types'

import ACTIONS from './actions'

const initialState: BookState = {
	books: [],
	count: 0,
	filter: {
		search: '',
		maxResults: 30,
		subject: 'all',
		orderBy: 'relevance'
	},
	isLoading: false,
	isError: false
}

export default function reducer(state = initialState, action: BookAction): BookState {
	switch (action.type) {
		case ACTIONS.FETCH_BOOKS:
			console.log(`LOG: action.payload`, action.payload)
			return {
				...state,
				isLoading: true,
				isError: false,
				filter: action.payload
			}
		case ACTIONS.FETCH_BOOKS_SUCCESS:
			return {
				...state,
				books: action.payload.books,
				count: action.payload.booksCount,
				isLoading: false,
				isError: false
			}
		case ACTIONS.FETCH_BOOKS_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true
			}
		default:
			return state
	}
}
