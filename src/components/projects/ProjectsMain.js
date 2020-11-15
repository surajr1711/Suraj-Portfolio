import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import FeaturedProject from '../shared/FeaturedProject'

import styles from './ProjectsMain.module.scss'

const query = graphql`
{
  allStrapiProjects(sort: {fields: published_at, order: DESC}, filter: {featured: {eq: true}}, limit: 3) {
    nodes {
      title
      desc
      github
      url
      stack {
        title
      }
      img {
        childImageSharp {
          fluid (maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slug
    }
  }
}
`

const ProjectsMain = () => {
	const {allStrapiProjects: {nodes: featProjects}} = useStaticQuery(query)


	return (
		<main>
			<h1 className={styles.heading}>Projects</h1>
			<div>
			{featProjects
				.map((featProj, i) =>  <FeaturedProject key={i} {...featProj} />
			)}
			</div>
		</main>
	)
}

export default ProjectsMain
