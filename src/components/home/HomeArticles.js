import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Article from '../shared/Article'
import CTAPrimary from '../shared/CTAPrimary'

import styles from './HomeArticles.module.scss'

const query = graphql`
  {
    allStrapiBlogs(limit: 3, sort: {fields: published_at, order: DESC}) {
      nodes {
        slug
				title
				published_at(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 360, maxHeight: 225) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const HomeArticles = () => {
	const {allStrapiBlogs: {nodes: blogs}} = useStaticQuery(query)
	// console.log(images)

	return (
		<section>
			<h2 className={styles.heading}>Articles</h2>
			<div className={styles.wrapper}>

				{blogs.map((blog, i) => (
						<Article key={i} article={blog} className={styles.article} />
				))}

			</div>
			<div className={styles.linkWrapper}>
				<CTAPrimary to="/blog" text="see all articles" className={styles.seeAllArticles} />
			</div>
		</section>
	)
}

export default HomeArticles
