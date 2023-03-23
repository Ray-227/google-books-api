import { IBook } from '../../../../types/types'
import BookItem from '../BookItem'

interface BookListProps {
	books: [] | IBook[]
}

const BookList = ({ books }: BookListProps): JSX.Element => {
	return <>{books && books.map((book, index) => <BookItem key={`${book.id}_${index}`} book={book} />)}</>
}

export default BookList
