import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './assets/styles/index.scss'
import configureStore from './core/configureStore'
import Router from './routes/Router'

const { store } = configureStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
)
