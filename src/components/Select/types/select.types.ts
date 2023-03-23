export interface SelectProps {
	control: any
	label: string
	name: string
	options: SelectOptions[]
}

export interface SelectOptions {
	label: string
	value: string
	default?: boolean
}
