import React from 'react'
import Img from 'gatsby-image'

import styles from './AboutMeSlide.module.scss'

const AboutMeSlide = ({img, text, className}) => {
	return (
		<div className={`${styles.wrapper} ${className}`}>
			<Img fluid={img.childImageSharp.fluid} className={styles.img} />
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default AboutMeSlide
