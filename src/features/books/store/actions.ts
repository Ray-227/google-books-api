import { IBook, IFilterBook } from '../../../types/types'
import {
	FetchBookDetailAction,
	FetchBookDetailErrorAction,
	FetchBookDetailPayload,
	FetchBookDetailSuccessAction,
	FetchBookDetailSuccessPayload,
	FetchBooksAction,
	FetchBooksErrorAction,
	FetchBooksSuccessAction,
	FetchBooksSuccessPayload
} from '../types/books.types'

enum ACTIONS {
	FETCH_BOOKS = 'FETCH_BOOKS',
	FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
	FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',

	FETCH_BOOK_DETAIL = 'FETCH_BOOKS_DETAIL',
	FETCH_BOOK_DETAIL_SUCCESS = 'FETCH_BOOKS_DETAIL_SUCCESS',
	FETCH_BOOK_DETAIL_ERROR = 'FETCH_BOOKS_DETAIL_ERROR'
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

export const fetchBookDetail = (payload: FetchBookDetailPayload): FetchBookDetailAction => ({
	type: ACTIONS.FETCH_BOOK_DETAIL,
	payload
})

export const fetchBookDetailSuccess = (payload: FetchBookDetailSuccessPayload): FetchBookDetailSuccessAction => ({
	type: ACTIONS.FETCH_BOOK_DETAIL_SUCCESS,
	payload
})

export const fetchBookDetailError = (): FetchBookDetailErrorAction => ({
	type: ACTIONS.FETCH_BOOK_DETAIL_ERROR
})

export default ACTIONS
