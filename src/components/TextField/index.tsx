import { TextField as TextFieldMUI } from '@mui/material'
import { useState } from 'react'
import { Controller } from 'react-hook-form'

interface TextFieldProps {
	control: any
	name: string
	label: string

	required?: boolean
}

const TextField = ({ control, name, label, required = false }: TextFieldProps) => (
	<Controller
		name={name}
		control={control}
		render={({ field: { onChange, value }, fieldState: { error } }) => (
			<TextFieldMUI
				helperText={error ? error.message : null}
				size='small'
				error={!!error}
				onChange={onChange}
				value={value || ''}
				label={label}
				variant='outlined'
				required={required}
			/>
		)}
	/>
)

export default TextField
