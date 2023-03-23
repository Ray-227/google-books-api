import { Alert, Button } from '@mui/material'
import { FC } from 'react'
import { connect } from 'react-redux'

import Divider from '../../../../components/Divider'
import BookForm from '../../components/BookForm'
import BookList from '../../components/BookList'
import BookListSkeleton from '../../components/BookListSkeleton'

import Layout from '../../../../containers/Layout'
import { RootState } from '../../../../core/configureStore'
import { IBook, IFilterBook } from '../../../../types/types'
import { fetchBooks as fetchBooksAction } from '../../store/actions'
import { FetchBooksAction } from '../../types/books.types'

import styles from './Books.module.scss'

interface BooksProps {
	isLoading: boolean
	isError: boolean
	books: IBook[]

	filter: IFilterBook
	booksCount: number
	fetchBooksDispatch: (filter: IFilterBook) => void
}

const Books: FC<BooksProps> = ({ isLoading, isError, books, booksCount, filter, fetchBooksDispatch }) => {
	const fetchBooks = (filter: IFilterBook) => {
		if (!!filter.search) fetchBooksDispatch(filter)
	}

	const handleChangeSearch = (filterForm: IFilterBook) => {
		fetchBooks(filterForm)
	}

	const loadMore = () => {
		fetchBooks({ ...filter, startIndex: filter.maxResults, isLoadMore: true })
	}

	return (
		<Layout>
			<BookForm changeHandler={handleChangeSearch} filter={filter} />
			<Divider />
			<h4 className={styles.countInfo}>Найдено: {booksCount}</h4>
			<Divider />
			{isError ? (
				<Alert severity='error' className={styles.errorAlert}>
					Произошла ошибка, попробуйте{' '}
					<Button
						variant={'outlined'}
						onClick={() => {
							fetchBooks(filter)
						}}
					>
						повторить запрос
					</Button>
				</Alert>
			) : (
				<>
					<div className={styles.gridWrapper}>
						<BookList books={books} />
						{isLoading && <BookListSkeleton count={filter.maxResults} />}
					</div>
					{!!books.length && (
						<>
							<Divider />
							<div className={styles.loadMore}>
								<Button onClick={loadMore} variant={'contained'}>
									Загрузить ещё {filter.maxResults}
								</Button>
							</div>
							<Divider />
						</>
					)}
				</>
			)}
		</Layout>
	)
}

const mapStateToProps = (state: RootState) => ({
	books: state.books.books,
	booksCount: state.books.count,
	filter: state.books.filter,
	isLoading: state.books.booksIsLoading,
	isError: state.books.booksIsError
})

const mapDispatchToProps = (dispatch: (fetchBooksDispatch: FetchBooksAction) => void) => ({
	fetchBooksDispatch: (payload: IFilterBook) => {
		dispatch(fetchBooksAction(payload))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)
