import { SelectOptions } from '../../../components/Select/types/select.types'

const selectCategoriesOptions: SelectOptions[] = [
	{
		label: 'Все',
		value: 'all',
		default: true
	},
	{
		label: 'Арты',
		value: 'art'
	},
	{
		label: 'Биография',
		value: 'biography'
	},
	{
		label: 'Компьютеры',
		value: 'computers'
	},
	{
		label: 'История',
		value: 'history'
	},
	{
		label: 'Медицина',
		value: 'medical'
	},
	{
		label: 'Поэзия',
		value: 'poetry'
	}
]

export default selectCategoriesOptions
