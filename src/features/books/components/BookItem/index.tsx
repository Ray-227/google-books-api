import { Paper } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Divider from '../../../../components/Divider'

import { IBook } from '../../../../types/types'

import styles from './BookItem.module.scss'

interface BookItemProps {
	book: IBook
}

const BookItem: FC<BookItemProps> = ({ book }) => {
	const navigate = useNavigate()

	const navigateBookDetailClick = () => {
		navigate(`/book/detail/${book.id}`)
	}

	const isCategory: boolean = !!book.volumeInfo.categories?.length
	const isSeveralAuthors: boolean = book.volumeInfo.authors?.length > 1
	const isImage: boolean = !!book.volumeInfo.imageLinks?.thumbnail

	const image = isImage ? (
		<img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} />
	) : (
		<img alt={book.volumeInfo.title} src={'/images/bookImage.jpg'} />
	)

	const author = isSeveralAuthors
		? `Авторы: ${book.volumeInfo.authors.join(', ')}`
		: `Автор: ${book.volumeInfo.authors}`

	return (
		<Paper className={styles.bookItem} onClick={navigateBookDetailClick}>
			{image}
			<Divider size={'large'} />
			<div className={styles.bookInfo}>
				<div>Название: {book.volumeInfo.title}</div>
				<Divider size={'small'} />
				<div>Категория: {isCategory && book.volumeInfo.categories[0]}</div>
				<Divider size={'small'} />
				<div>{author}</div>
				<Divider size={'small'} />
			</div>
		</Paper>
	)
}

export default BookItem
