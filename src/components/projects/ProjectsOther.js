import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import ProjectLinks from '../shared/ProjectLinks'
import TechStack from '../shared/TechStack'

import styles from './ProjectsOther.module.scss'

const query = graphql`
  {
    allStrapiProjects(sort: {fields: published_at, order: DESC}, filter: {featured: {eq: false}}) {
      nodes {
        title
        github
        url
        stack {
          title
        }
      }
    }
  }
`

const ProjectsOther = () => {
	const {allStrapiProjects: {nodes: otherProjects}} = useStaticQuery(query)

	return (
		<section>
			<div className={styles.wrapper}>
				{otherProjects.map((proj, i) => (
						<div key={i} className={styles.project}>
							<div className={styles.desc}>
								<p className={styles.desc_heading}>{proj.title}</p>
								<TechStack items={proj.stack} className={styles.desc_stack} />
							</div>
							<ProjectLinks projectLink={proj.url} githubLink={proj.github} className={styles.links} type="icons" />
						</div>
				))}

			</div>
		</section>
	)
}

export default ProjectsOther
