import styles from './Divider.module.scss'

interface DividerProps {
	size?: any
}

const Divider = ({ size = 'default' }: DividerProps) => <div className={styles[size]}></div>

export default Divider
