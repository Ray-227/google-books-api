import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import { Controller } from 'react-hook-form'

import { SelectProps } from './types/select.types'

const Select = ({ control, label, name, options }: SelectProps) => {
	const defaultValue = options.find(option => !!option?.default)?.value

	return (
		<FormControl>
			<InputLabel>{label}</InputLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange } }) => (
					<NativeSelect onChange={onChange} defaultValue={defaultValue || options[0].value}>
						{options.map((option, index) => {
							return (
								<option key={`${index}_${option.value}`} value={option.value}>
									{option.label}
								</option>
							)
						})}
					</NativeSelect>
				)}
			/>
		</FormControl>
	)
}

export default Select
