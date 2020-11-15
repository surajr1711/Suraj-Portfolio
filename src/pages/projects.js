import React from 'react'

import Layout from '../components/shared/Layout'
import ProjectsMain from '../components/projects/ProjectsMain'
import ProjectsOther from '../components/projects/ProjectsOther'

const Projects = () => {
	return (
		<Layout>
			<ProjectsMain />
			<ProjectsOther />
		</Layout>
	)
}

export default Projects