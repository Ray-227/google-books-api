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
	const isCategory: boolean = !!book.volumeInfo.categories?.length
	const isSeveralAuthors: boolean = book.volumeInfo.authors?.length > 1

	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/book/detail/${book.id}`)
	}

	return (
		<Paper className={styles.bookItem} onClick={handleClick}>
			<img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} />
			<Divider size={'large'} />
			<div className={styles.bookInfo}>
				<div>Название: {book.volumeInfo.title}</div>
				<Divider size={'small'} />
				<div>Категория: {isCategory && book.volumeInfo.categories[0]}</div>
				<Divider size={'small'} />
				<div>
					{isSeveralAuthors ? `Авторы: ${book.volumeInfo.authors.join(', ')}` : `Автор: ${book.volumeInfo.authors}`}
				</div>
				<Divider size={'small'} />
			</div>
		</Paper>
	)
}

export default BookItem
