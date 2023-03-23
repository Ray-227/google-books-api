import { Paper } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IBook } from '../../../../types/types'

import styles from './BookItem.module.scss'

interface BookItemProps {
	book: IBook
}

const BookItem: FC<BookItemProps> = ({ book }) => {
	const isCategory: boolean = !!book.volumeInfo.categories?.length
	const isSeveralAuthors: boolean = !!book.volumeInfo.authors?.length

	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/book/detail/${book.id}`)
	}

	return (
		<Paper className={styles.bookItem} onClick={handleClick}>
			<img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.smallThumbnail} />

			<div>{book.volumeInfo.title}</div>
			<div>Категория: {isCategory && book.volumeInfo.categories[0]}</div>
			<div>
				{isSeveralAuthors ? 'Авторы' : 'Автор'} {book.volumeInfo.authors}
			</div>
		</Paper>
	)
}

export default BookItem
