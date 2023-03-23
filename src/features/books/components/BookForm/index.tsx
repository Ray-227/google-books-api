import { Button, Paper } from '@mui/material'
import { useForm } from 'react-hook-form'

import RadioButton from '../../../../components/RadioButton'
import Select from '../../../../components/Select'
import TextField from '../../../../components/TextField'

import { IFilterBook } from '../../../../types/types'
import { radioOptions } from '../../entities/radio.options'
import selectCategoriesOptions from '../../entities/select.categoriesOptions'
import { selectCountOptions } from '../../entities/select.countOptions'

import styles from './BookForm.module.scss'

interface BookFormProps {
	filter: IFilterBook
	changeHandler: any
}

const BookForm = ({ changeHandler, filter }: BookFormProps) => {
	const { reset, handleSubmit, control } = useForm({
		defaultValues: filter,
		mode: 'onChange'
	})

	return (
		<Paper elevation={0} className={styles.paper}>
			<form
				onSubmit={handleSubmit(changeHandler)}
				onChange={handleSubmit(changeHandler)}
				className={styles.formWrapper}
			>
				<TextField name={'search'} label={'Поиск'} required={true} control={control} />
				<Button onClick={() => reset()} variant={'outlined'}>
					Очистить
				</Button>
				<div className={styles.options}>
					<Select name={'subject'} label={'Категория'} control={control} options={selectCategoriesOptions} />
					<Select name={'maxResults'} label={'Колличество'} control={control} options={selectCountOptions} />
					<RadioButton name={'orderBy'} label={'Сортировка'} control={control} options={radioOptions} />
				</div>
			</form>
		</Paper>
	)
}

export default BookForm
