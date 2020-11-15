import React from 'react'
import PropTypes from 'prop-types'

import styles from './TechStack.module.scss'

const TechStack = ({items, className}) => {

	return (
		<ul className={`${styles.techStack} ${className}`}>
			{items.map((item, i) => <li key={i}>{item.title}</li>)}
		</ul>
	)
}

TechStack.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TechStack
