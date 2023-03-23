import { all, call, debounce, put, takeLatest } from 'redux-saga/effects'

import { IBook, IBookDetail } from '../../../types/types'
import { fetchBookDetailRequest } from '../gateway/BookDetailGateway'
import { fetchBooksRequest } from '../gateway/BooksGateway'
import { FetchBookDetailWorker, FetchBooksWorker } from '../types/books.types'

import ACTIONS, { fetchBookDetailError, fetchBookDetailSuccess, fetchBooksError, fetchBooksSuccess } from './actions.js'

function* fetchBooksWorker({ payload }: FetchBooksWorker): Iterator<any> {
	try {
		// @ts-ignore
		const { totalItems: booksCount, items: books }: IBook[] = yield call(fetchBooksRequest, payload)
		yield put(fetchBooksSuccess({ booksCount, books, filter: payload }))
	} catch (error) {
		yield put(fetchBooksError())
	}
}

function* fetchBooksWatcher(): Iterator<any> {
	// @ts-ignore
	yield debounce(500, ACTIONS.FETCH_BOOKS, fetchBooksWorker)
}

function* fetchBookDetailWorker({ payload }: FetchBookDetailWorker): Iterator<any> {
	try {
		// @ts-ignore
		const bookDetail: IBookDetail = yield call(fetchBookDetailRequest, payload)
		yield put(fetchBookDetailSuccess({ bookDetail }))
	} catch (error) {
		yield put(fetchBookDetailError())
	}
}

function* fetchBookDetailWatcher(): Iterator<any> {
	// @ts-ignore
	yield takeLatest(ACTIONS.FETCH_BOOK_DETAIL, fetchBookDetailWorker)
}

export default function* saga() {
	yield all([call(fetchBooksWatcher), call(fetchBookDetailWatcher)])
}
