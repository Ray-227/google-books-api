import { useForm } from 'react-hook-form'

export const useReactHookForm = () => {
	const { register, handleSubmit, reset } = useForm({
		mode: 'onSubmit'
	})
}
