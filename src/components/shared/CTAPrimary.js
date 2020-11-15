import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

import {BiRightArrowAlt} from 'react-icons/bi'

import styles from './CTAPrimary.module.scss'

const CTAPrimary = ({to, text, className}) => {
	return (
		<Link to={`${to || ""}`} className={`${styles.link} ${className}`}>
			<span className={styles.link_text}>{text}</span>
			<BiRightArrowAlt className={styles.link_icon} />
		</Link>
	)
}

CTAPrimary.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default CTAPrimary
