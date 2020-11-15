import React from 'react'

import CTAPrimary from './CTAPrimary'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<p className={styles.tagline}>
					<span>Let's work together.</span>
					<span>Make it happen.</span>
				</p>

				<CTAPrimary to="/contact" text="contact" className={styles.contactLink} />

				<ul className={styles.social}>
					<li>
						<a className={styles.social_link} href="https://www.google.com/">LinkedIn</a>
					</li>
					<li>
						<a className={styles.social_link} href="https://www.google.com/">YouTube</a>
					</li>
					<li>
						<a className={styles.social_link} href="https://www.google.com/">GitHub</a>
					</li>
					<li>
						<a className={styles.social_link} href="https://www.google.com/">CodePen</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
