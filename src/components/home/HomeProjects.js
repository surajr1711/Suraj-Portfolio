import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import CTAPrimary from '../shared/CTAPrimary'
import FeaturedProject from '../shared/FeaturedProject'

import styles from './HomeProjects.module.scss'

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

const HomeProjects = () => {
	const {allStrapiProjects: {nodes: featProjects}} = useStaticQuery(query)


	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>Projects</h2>

			<ul className={styles.nav}>
        {featProjects.map((featProj, i) => (
          <li key={i}>{featProj.title}</li>
        ))}
        <li><CTAPrimary to="/projects" text="see all projects" className={styles.seeAllProjects} /></li>
      </ul>
	
			{featProjects
				.map((featProj, i) =>  <FeaturedProject key={i} {...featProj} />
			)}

		</section>
	)
}

export default HomeProjects
