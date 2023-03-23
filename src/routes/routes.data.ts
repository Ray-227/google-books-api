import BookDetail from '../features/books/components/BookDetail'

import Books from '../features/books/pages/Books'

export const routes = [
	{
		path: '/',
		element: Books
	},
	{
		path: '/book/detail/:id',
		element: BookDetail
	}
]
