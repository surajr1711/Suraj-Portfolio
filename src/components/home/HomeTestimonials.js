import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

// import testimonialsList from '../../constants/testimonialsList'
import Testimonial from '../shared/Testimonial'

import styles from './HomeTestimonials.module.scss'

// const query = graphql`
//   {
//     allFile(filter: {relativePath: {regex: "/^(testimonial-)([0-9]+).jpg$/"}}, sort: {order: ASC, fields: childImageSharp___fixed___originalName}) {
//       images: nodes {
//         childImageSharp {
//           fixed(width: 100, height: 100) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   }
// `

const query = graphql`
  {
    allStrapiTestimonials(sort: {fields: published_at, order: DESC}, limit: 6) {
      nodes {
        desc
        name
        position
        company
        image {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const HomeTestimonials = () => {
  // const {allFile: {images}} = useStaticQuery(query)
  const {allStrapiTestimonials: {nodes: testimonials}} = useStaticQuery(query)

	return (
		<section>
			<h2 className={styles.heading}>Testimonials</h2>
			<div className={styles.wrapper}>
				{/* {testimonialsList.map((tm, i) => <Testimonial key={i} tm={tm} image={images[i].childImageSharp.fixed} />)} */}
				{testimonials.map((tm, i) => <Testimonial key={i} {...tm} />)}
			</div>
		</section>
	)
}

export default HomeTestimonials
