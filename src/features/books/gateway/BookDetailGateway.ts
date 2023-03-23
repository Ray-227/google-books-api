import { fetchRequest } from '../../../core/fetchRequest'
import { FetchBookDetailPayload } from '../types/books.types'

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
const fetchBookDetailQuery = ({ id }: FetchBookDetailPayload) =>
	`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`

export const fetchBookDetailRequest = (payload: FetchBookDetailPayload) =>
	fetchRequest({
		url: fetchBookDetailQuery(payload)
	})
