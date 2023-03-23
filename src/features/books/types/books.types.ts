import { IBook, IBookDetail, IFilterBook } from '../../../types/types'
import ACTIONS from '../store/actions'

export interface BookState {
	books: IBook[]

	filter: IFilterBook

	count: number
	booksIsLoading: boolean
	booksIsError: boolean

	bookDetail: IBookDetail

	bookDetailIsLoading: boolean
	bookDetailIsError: boolean
}
export interface FetchBooksAction {
	type: ACTIONS.FETCH_BOOKS
	payload: IFilterBook
}

export interface FetchBooksSuccessPayload {
	books: IBook[]
	booksCount: number
}
export interface FetchBooksSuccessAction {
	type: ACTIONS.FETCH_BOOKS_SUCCESS
	payload: FetchBooksSuccessPayload
}

export interface FetchBooksErrorAction {
	type: ACTIONS.FETCH_BOOKS_ERROR
}

export interface FetchBooksWorker {
	payload: IFilterBook
}

export interface FetchBookDetailWorker {
	payload: FetchBookDetailPayload
}

export interface FetchBookDetailPayload {
	id: string | undefined
}
export interface FetchBookDetailAction {
	type: ACTIONS.FETCH_BOOK_DETAIL
	payload: FetchBookDetailPayload
}

export interface FetchBookDetailSuccessPayload {
	bookDetail: IBookDetail
}
export interface FetchBookDetailSuccessAction {
	type: ACTIONS.FETCH_BOOK_DETAIL_SUCCESS
	payload: FetchBookDetailSuccessPayload
}
export interface FetchBookDetailErrorAction {
	type: ACTIONS.FETCH_BOOK_DETAIL_ERROR
}

export type BookAction =
	| FetchBooksAction
	| FetchBooksSuccessAction
	| FetchBooksErrorAction
	| FetchBookDetailAction
	| FetchBookDetailSuccessAction
	| FetchBookDetailErrorAction
