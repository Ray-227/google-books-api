import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'

import Layout from '../../../../containers/Layout'
import { IBook } from '../../../../types/types'

interface BookDetailProps {
	book: IBook
}
const BookDetail: FC<BookDetailProps> = ({ book }) => {
	const { id } = useParams()

	return (
		<Layout>
			<Link to={'/'}>Назад</Link>
			{id}
		</Layout>
	)
}

export default BookDetail
