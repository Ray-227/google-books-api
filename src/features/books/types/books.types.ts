import { IBook, IFilterBook } from '../../../types/types'
import ACTIONS from '../store/actions'

export interface BookState {
	books: IBook[]

	filter: object

	count: number
	isLoading: boolean
	isError: boolean
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

export type BookAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction

export interface FetchBookListWorker {
	payload: IFilterBook
}

export interface SaveSearchBooksAction {
	type: ACTIONS.SAVE_SEARCH_BOOKS
	payload: IFilterBook
}
