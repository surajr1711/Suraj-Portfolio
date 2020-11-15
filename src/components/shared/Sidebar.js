import React, {useRef, useEffect, useMemo} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import gsap from 'gsap'

import styles from './Sidebar.module.scss'

const Sidebar = ({isOpen}) => {
	const sidebar = useRef(null)
	const navUlRef = useRef(null)
	const sidebarTl = useMemo(() => gsap.timeline({ paused: true }), [])
	// const sidebarTl = useRef(null)
	
	useEffect(() => {
		// sidebarTl.current = gsap.timeline({paused: true})

		// sidebarTl.current
		sidebarTl
		.to(sidebar.current, {
			xPercent: -100,
			duration: 0.3,
			ease: "power3.out"
		})
		.from(navUlRef.current.childNodes,
			{
				stagger: 0.1,
				xPercent: 100,
				ease: "power3.out",
				duration: 0.3,
			},
			"-=0.3"
		)
	}, [])
	
	useEffect(() => {
		isOpen ? sidebarTl.play() : sidebarTl.reverse()
		// isOpen ? sidebarTl.current.play() : sidebarTl.current.reverse()
	}, [isOpen])

	return (
		<aside ref={sidebar} className={styles.sidebar}>
			<nav className={styles.nav}>
					<ul ref={navUlRef}>
						<li>
							<Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/">home</Link>
						</li>
						<li>
							<Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/about">about</Link>
						</li>
						<li>
							<Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/projects">projects</Link>
						</li>
						<li>
							<Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/blog">blog</Link>
						</li>
						<li>
							<Link className={styles.navLink} activeClassName={styles.activeNavLink} to="/contact">contact</Link>
						</li>
					</ul>
				</nav>		
		</aside>
	)
}

Sidebar.propTypes = {
	isOpen: PropTypes.bool.isRequired
}

export default Sidebar
