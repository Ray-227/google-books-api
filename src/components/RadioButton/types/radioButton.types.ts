export interface RadioButtonProps {
	control: any
	name: string
	label: string
	options: RadioOption[]
}

export interface RadioOption {
	value: string
	label: string
}
