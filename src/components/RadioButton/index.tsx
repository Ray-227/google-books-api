import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Controller } from 'react-hook-form'

import { RadioButtonProps } from './types/radioButton.types'

const RadioButton = ({ control, name, label, options }: RadioButtonProps) => (
	<FormControl component='fieldset'>
		<FormLabel component='legend'>{label}</FormLabel>
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange } }) => (
				<RadioGroup defaultValue={options[0].value} onChange={onChange}>
					{options.map((option, index) => (
						<FormControlLabel
							key={`${index}_${option.label}`}
							value={option.value}
							label={option.label}
							control={<Radio />}
						/>
					))}
				</RadioGroup>
			)}
		/>
	</FormControl>
)

export default RadioButton
