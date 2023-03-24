import { Skeleton } from '@mui/material'

import Divider from '../../../../components/Divider'

import styles from '../BookDetail/BookDetail.module.scss'

const BookDetailSkeleton = (): JSX.Element => (
	<div className={styles.wrapper}>
		<div className={styles.info}>
			<Skeleton className={styles.button} variant='rectangular' width={80} height={36} />
			<Divider />
			<Skeleton variant='rectangular' width={500} height={800} />
		</div>
		<div>
			<Skeleton className={styles.button} variant='rectangular' width={'100%'} height={36} />
			<Divider />
			<Skeleton className={styles.button} variant='rectangular' width={'100%'} height={36} />
			<Divider />
			<Skeleton className={styles.button} variant='rectangular' width={'100%'} height={36} />
			<Divider />
			<Skeleton className={styles.button} variant='rectangular' width={'100%'} height={36} />
			<Divider />
			<Skeleton className={styles.button} variant='rectangular' width={'100%'} height={36} />
			<Divider />
			<Skeleton className={styles.button} variant='rectangular' width={'100%'} height={500} />
		</div>
	</div>
)

export default BookDetailSkeleton
