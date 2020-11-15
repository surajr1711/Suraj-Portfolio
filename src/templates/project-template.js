import React from 'react'
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'

import Layout from '../components/shared/Layout'
import CTAPrimary from '../components/shared/CTAPrimary'
import TechStack from '../components/shared/TechStack'
import ProjectLinks from '../components/shared/ProjectLinks'

import styles from './project-template.module.scss'

export const query = graphql`
	query ($slug: String) {
		strapiProjects(slug: {eq: $slug}) {
			title
			body
			img {
				childImageSharp {
					fluid(maxWidth: 1000, maxHeight: 625) {
						...GatsbyImageSharpFluid
					}
				}
			}
			url
			github
			stack {
				title
			}
		}
	}
`

const projectTemplate = ({data}) => {
	const {title, img, url, github, stack, body} = data.strapiProjects
	return (
		<Layout>
			<article className={styles.article}>
				<h1>{title}</h1>
				<Img fluid={img.childImageSharp.fluid} />
				<ProjectLinks projectLink={url} githubLink={github} type="icons" className={styles.links} />
				<TechStack items={stack} className={styles.stack} />
				<ReactMarkdown source={body} className={styles.markdown} />
			</article>
			<CTAPrimary to="/projects" text="To projects" className={styles.projectsBtn}/>
		</Layout>
	)
}

export default projectTemplate