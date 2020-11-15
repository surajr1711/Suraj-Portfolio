import React from 'react'

import Layout from '../components/shared/Layout'
import AboutMain from '../components/about/AboutMain'
import AboutStory from '../components/about/AboutStory'
import AboutPersonal from '../components/about/AboutPersonal'
import AboutPlan from '../components/about/AboutPlan'


const About = () => {
	return (
		<Layout>
			<AboutMain />
			<AboutStory />
			<AboutPersonal />
			<AboutPlan />
		</Layout>
	)
}

export default About