import React from 'react'
import {Link} from 'gatsby';

import { BiMenuAltRight } from "react-icons/bi";

import styles from './Header.module.scss'

const Header = ({toggleSidebar}) => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.brand}>
					<span>Suraj R</span>
				</div>
				<nav className={styles.nav}>
					<ul>
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
					<button className={styles.menuBtn} onClick={toggleSidebar}>
						<BiMenuAltRight className={styles.menuBtn_icon} />
					</button>
				</nav>
			</div>
		</header>
	)
}

export default Header
