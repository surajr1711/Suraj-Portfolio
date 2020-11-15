import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import TechStack from './TechStack'
import ProjectLinks from './ProjectLinks'

import styles from './FeaturedProject.module.scss'


const FeaturedProject = ({title, desc, github, url, stack, img, slug}) => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.display}>
				<Img fluid={img.childImageSharp.fluid} className={styles.img} />
			</div>
			<div className={styles.desc}>

				<Link to={`/projects/${slug}`}>
					<h3 className={styles.heading}>{title}</h3>
				</Link>

				<TechStack items={stack} className={styles.stack} />
				<p>{desc}</p>
				<ProjectLinks projectLink={url} githubLink={github} type="full" wrapperClass={styles.links} />
			</div>
		</div>
	)
}

FeaturedProject.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	stack: PropTypes.array.isRequired,
	img: PropTypes.object.isRequired,
	slug: PropTypes.string.isRequired,
}

export default FeaturedProject
