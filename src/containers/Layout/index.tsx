import { FC, ReactNode } from 'react'

import Divider from '../../components/Divider'
import Header from '../../components/Header'
import Main from '../../components/Main'

import styles from './Layout.module.scss'

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<section className={styles.wrapper}>
			<Header />
			<Divider />
			<Main>{children}</Main>
			<Divider />
		</section>
	)
}

export default Layout
