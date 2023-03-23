import { Skeleton } from '@mui/material'

interface BookListSkeletonProps {
	count?: number
}
const BookListSkeleton = ({ count = 30 }: BookListSkeletonProps): JSX.Element => {
	const bookList = []

	for (let i = 0; i < count; i++) {
		bookList.push(<Skeleton key={`${count}_${i}_skeleton`} variant='rectangular' width={200} height={350} />)
	}

	return <>{bookList}</>
}

export default BookListSkeleton
