import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound404 from '../pages/NotFound404'

import { routes } from './routes.data'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					return <Route key={route.path} path={route.path} element={<route.element />} />
				})}
				<Route path='*' element={<NotFound404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
