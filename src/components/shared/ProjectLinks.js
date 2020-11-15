import React from 'react'
import PropTypes from 'prop-types'
import {RiExternalLinkLine} from 'react-icons/ri'
import {FaGithub} from 'react-icons/fa'

import styles from './ProjectLinks.module.scss'

// proptype 'type' must be 'full' or 'icons'
const ProjectLinks = ({projectLink, githubLink, className, type="full"}) => {
	return (
		<div 
			className={type==="full" ? `${styles.wrapper} ${className}` : `${styles.wrapper__icons} ${className}`}>
			<a href={projectLink} className={styles.link} target="_blank"  rel="noopener noreferrer" >
				<RiExternalLinkLine className={styles.link_icon} />
				{type !== "icons" && 
					<span className={styles.link_text}>View Project</span>
				}
			</a>
			<a href={githubLink} className={styles.link} target="_blank"  rel="noopener noreferrer" >
				<FaGithub className={styles.link_icon}/>
				{type !== "icons" &&
					<span className={styles.link_text}>Code</span>
				}
			</a>
		</div>
	)
}

ProjectLinks.propTypes = {
	projectLink: PropTypes.string.isRequired,
	githubLink: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
}

export default ProjectLinks
