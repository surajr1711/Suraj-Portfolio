import React from 'react'
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/shared/Layout'
import CTAPrimary from '../components/shared/CTAPrimary'

import styles from './blog-template.module.scss'

export const query = graphql`
	query ($slug: String) {
		strapiBlogs(slug: {eq: $slug}) {
			body
			date(formatString: "MMMM Do, YYYY")
			title
		}
	}
`

const blogTemplate = ({data}) => {
	const {body, date, title} = data.strapiBlogs
	return (
		<Layout>
				<article className={styles.article}>
					<h1>{title}</h1>
					<small>{date}</small>
					<ReactMarkdown source={body} />
				</article>
				<CTAPrimary to="/blog" text="To blog" className={styles.blogBtn}/>
		</Layout>
	)
}

export default blogTemplate