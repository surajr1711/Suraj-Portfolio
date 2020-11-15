import React from 'react'

import Layout from '../components/shared/Layout'
import HomeMain from '../components/home/HomeMain'
import HomeProjects from '../components/home/HomeProjects'
import HomeArticles from '../components/home/HomeArticles'
import HomeTestimonials from '../components/home/HomeTestimonials'


const Home = () => {
  return (
    <Layout>
      <HomeMain />
      <HomeProjects />
      <HomeArticles />
      <HomeTestimonials />
    </Layout>
  )
}

export default Home
