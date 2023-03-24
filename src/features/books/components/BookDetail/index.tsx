import { Button } from '@mui/material'
import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Divider from '../../../../components/Divider'

import Layout from '../../../../containers/Layout'
import { RootState } from '../../../../core/configureStore'
import { IBookDetail } from '../../../../types/types'
import { fetchBookDetail as fetchBookDetailAction } from '../../store/actions'
import { FetchBookDetailAction, FetchBookDetailPayload } from '../../types/books.types'
import BookDetailSkeleton from '../BookDetailSkeleton'

import styles from './BookDetail.module.scss'

interface BookDetailProps {
	bookDetail: IBookDetail
	isLoading: boolean
	isError: boolean

	fetchBookDetailDispatch: (payload: FetchBookDetailPayload) => void
}
const BookDetail: FC<BookDetailProps> = ({ bookDetail, isLoading, isError, fetchBookDetailDispatch }) => {
	const { id } = useParams()
	const navigate = useNavigate()

	const backLinkClick = () => {
		navigate('/')
	}

	const fetchBookDetail = () => {
		fetchBookDetailDispatch({ id })
	}

	useEffect(() => {
		fetchBookDetail()
	}, [])

	const renderBookDetail = () => {
		if (isLoading) {
			return <BookDetailSkeleton />
		}

		if (isError) {
			return <div>ERROR</div>
		}

		const isImage: boolean = !!bookDetail?.volumeInfo?.imageLinks?.medium

		const image = isImage ? (
			<img src={bookDetail.volumeInfo.imageLinks.medium} alt={bookDetail.volumeInfo.title} />
		) : (
			<img alt={bookDetail.volumeInfo.title} src={'/images/bookImage.jpg'} />
		)

		return (
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<Button className={styles.button} variant={'outlined'} onClick={backLinkClick}>
						Назад
					</Button>
					<Divider />
					{image}
				</div>
				<div>
					<h2>{bookDetail.volumeInfo.title}</h2>
					<h4>{bookDetail.volumeInfo.authors}</h4>
					<h4>{bookDetail.volumeInfo.categories}</h4>
					<h4>{bookDetail.volumeInfo.publishedDate}</h4>
					<h4>{bookDetail.volumeInfo.publisher}</h4>

					<p>{bookDetail.volumeInfo.description}</p>
				</div>
			</div>
		)
	}

	return <Layout>{renderBookDetail()}</Layout>
}

const mapStateToProps = (state: RootState) => ({
	bookDetail: state.books.bookDetail,
	isLoading: state.books.bookDetailIsLoading,
	isError: state.books.bookDetailIsError
})

const mapDispatchToProps = (dispatch: (fetchBookDetailDispatch: FetchBookDetailAction) => void) => ({
	fetchBookDetailDispatch: (payload: FetchBookDetailPayload) => {
		dispatch(fetchBookDetailAction(payload))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
