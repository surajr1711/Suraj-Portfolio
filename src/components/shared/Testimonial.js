import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import styles from './Testimonial.module.scss'

// const Testimonial = ({tm, image}) => {
const Testimonial = ({desc, name, position, company, image}) => {
	return (
		<div className={styles.testimonial}>
			<p className={styles.message}>{desc}</p>
			<div className={styles.profile}>
				<Img fixed={image.childImageSharp.fixed} className={styles.profile_img} />
				<p className={styles.profile_desc}>
					<span className={styles.profile_descName}>{name}</span>
					<span className={styles.profile_descPosition}>{position}</span>
					<span className={styles.profile_descCompany}>{company}</span>
				</p>
			</div>
		</div>
	)
}

Testimonial.propTypes = {
	desc: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
}
export default Testimonial
