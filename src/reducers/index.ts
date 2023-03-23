import { all } from 'redux-saga/effects'

import booksReducer from '../features/books/store/reducer'
import booksSaga from '../features/books/store/saga'

export const reducers = {
	books: booksReducer
}

export function* rootSagas() {
	yield all([booksSaga()])
}
