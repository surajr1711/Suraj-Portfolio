import React, {useState} from 'react'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import '../../styles/index.scss'

const Layout = (props) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}
	
	return (
		<>
			<Header toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={isOpen} />
			<div className="container">
				{props.children}
			</div>
			<Footer />
		</>
	)
}

export default Layout
