import { all, call, debounce, put } from 'redux-saga/effects'

import { IBook } from '../../../types/types'
import { fetchBooksRequest } from '../gateway/BooksGateway'
import { FetchBookListWorker } from '../types/books.types'

import ACTIONS, { fetchBooksError, fetchBooksSuccess } from './actions.js'

function* fetchBookListWorker({ payload }: FetchBookListWorker): Iterator<any> {
	try {
		// @ts-ignore
		const { totalItems: booksCount, items: books }: IBook[] = yield call(fetchBooksRequest, payload)
		yield put(fetchBooksSuccess({ booksCount, books }))
	} catch (error) {
		yield put(fetchBooksError())
	}
}

function* fetchTodoBookWatcher(): Iterator<any> {
	// @ts-ignore
	yield debounce(500, ACTIONS.FETCH_BOOKS, fetchBookListWorker)
}

export default function* saga() {
	yield all([call(fetchTodoBookWatcher)])
}
