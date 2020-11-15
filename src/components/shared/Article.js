import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

import styles from './Article.module.scss'

const Article = ({article, className}) => {
	const {slug, image, title, published_at} = article
	// console.log(slug, image, title, published_at)
	return (
		<Link to={`/blog/${slug}`} className={`${styles.article} ${className}`}>
			<article>
				<Img fluid={image.childImageSharp.fluid} className={styles.img} />
				<h4 className={styles.title}>{title}</h4>
				<small className={styles.date}>{published_at}</small>
			</article>
		</Link>
	)
}

Article.propTypes = {
	article: PropTypes.object.isRequired
}

export default Article
