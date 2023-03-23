import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'

import { reducers, rootSagas } from '../reducers'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
	...reducers
})

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore() {
	const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), applyMiddleware(sagaMiddleware)))

	sagaMiddleware.run(rootSagas)

	return { store }
}
