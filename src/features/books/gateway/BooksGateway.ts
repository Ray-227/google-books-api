import { fetchRequest } from '../../../core/fetchRequest'
import { IFilterBook } from '../../../types/types'
import { getQueryGoogleAPI } from '../../../utils/getQueryGoogleAPI'

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
const fetchBooksQuery = ({
	search = '',
	subject = 'all',
	maxResults = 30,
	startIndex = 0,
	orderBy = 'relevance'
}: IFilterBook) => {
	const query = getQueryGoogleAPI({
		q: {
			search,
			subject
		},
		maxResults,
		startIndex,
		orderBy
	})

	return `https://www.googleapis.com/books/v1/volumes?${query}&key=${API_KEY}`
}
export const fetchBooksRequest = async (filter: IFilterBook) => {
	if (!!filter.search) {
		return fetchRequest({
			url: fetchBooksQuery(filter)
		})
	} else {
		return []
	}
}
