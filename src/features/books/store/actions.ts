import { IBook, IFilterBook } from '../../../types/types'
import {
	FetchBooksAction,
	FetchBooksErrorAction,
	FetchBooksSuccessAction,
	FetchBooksSuccessPayload,
	SaveSearchBooksAction
} from '../types/books.types'

enum ACTIONS {
	FETCH_BOOKS = 'FETCH_BOOKS',
	FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
	FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',

	SAVE_SEARCH_BOOKS = 'SAVE_SEARCH_BOOKS'
}

export const fetchBooks = (payload: IFilterBook): FetchBooksAction => ({
	type: ACTIONS.FETCH_BOOKS,
	payload
})

export const fetchBooksSuccess = (payload: FetchBooksSuccessPayload): FetchBooksSuccessAction => ({
	type: ACTIONS.FETCH_BOOKS_SUCCESS,
	payload
})

export const fetchBooksError = (): FetchBooksErrorAction => ({
	type: ACTIONS.FETCH_BOOKS_ERROR
})

export const saveSearchBooks = (payload: IFilterBook): SaveSearchBooksAction => ({
	type: ACTIONS.SAVE_SEARCH_BOOKS,
	payload
})

export default ACTIONS
