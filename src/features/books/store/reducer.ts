import { BookAction, BookState } from '../types/books.types'

import ACTIONS from './actions'

const initialState: BookState = {
	books: [],
	count: 0,
	filter: {
		search: '',
		maxResults: 30,
		subject: 'all',
		orderBy: 'relevance',
		isLoadMore: false
	},
	booksIsLoading: false,
	booksIsError: false,

	bookDetail: {
		id: '',
		volumeInfo: {
			imageLinks: {
				medium: ''
			},
			title: '',
			publisher: '',
			publishedDate: '',
			categories: [],
			authors: [],
			description: ''
		}
	},

	bookDetailIsLoading: true,
	bookDetailIsError: false
}

export default function reducer(state = initialState, action: BookAction): BookState {
	switch (action.type) {
		case ACTIONS.FETCH_BOOKS:
			return {
				...state,
				booksIsLoading: true,
				booksIsError: false,
				filter: action.payload
			}
		case ACTIONS.FETCH_BOOKS_SUCCESS:
			return {
				...state,
				books: action.payload.filter.isLoadMore ? [...state.books, ...action.payload.books] : action.payload.books,
				count: action.payload.booksCount,
				booksIsLoading: false,
				booksIsError: false
			}
		case ACTIONS.FETCH_BOOKS_ERROR:
			return {
				...state,
				booksIsLoading: false,
				booksIsError: true
			}
		case ACTIONS.FETCH_BOOK_DETAIL:
			return {
				...state,
				bookDetailIsLoading: true,
				bookDetailIsError: false
			}
		case ACTIONS.FETCH_BOOK_DETAIL_SUCCESS:
			return {
				...state,
				bookDetailIsLoading: false,
				bookDetailIsError: false,
				bookDetail: action.payload.bookDetail
			}
		case ACTIONS.FETCH_BOOK_DETAIL_ERROR:
			return {
				...state,
				bookDetailIsLoading: false,
				bookDetailIsError: true
			}
		default:
			return state
	}
}
