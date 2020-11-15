import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/shared/Layout'
import Article from '../components/shared/Article'

import styles from './blog.module.scss'

const query = graphql`
{
  allStrapiBlogs(sort: {fields: published_at, order: DESC}) {
    nodes {
      slug
      title
      image {
        childImageSharp {
          fluid(maxWidth: 360, maxHeight: 225) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      published_at(formatString: "MMMM Do, YYYY")
    }
  }
}
`

const Blog = () => {
	const {allStrapiBlogs: {nodes: blogs}} = useStaticQuery(query)

	return (
		<Layout>
			<main>
				<h1 className={styles.heading}>Blog</h1>
				<div className={styles.wrapper}>
				{blogs.map((blog, i) => (
						<Article key={i} article={blog} className={styles.article} />
				))}
				</div>
			</main>
		</Layout>
	)
}

export default Blog