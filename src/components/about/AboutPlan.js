import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import styles from './AboutPlan.module.scss'

// const query = graphql`
//   {
//     desktop: file(relativePath: {eq: "about-future.jpg"}) {
//       childImageSharp {
//         fluid(maxWidth: 1000, maxHeight: 625) {
//           ...GatsbyImageSharpFluid
//         }
//       }
// 		}
// 		mobile: file(relativePath: {eq: "about-future-mobile.jpg"}) {
// 			childImageSharp {
// 				fluid(maxWidth: 500, maxHeight: 500) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
//   }
// `

const query = graphql`
  {
    strapiAboutPage {
      future {
        title
        info {
          item
        }
        image {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 625) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AboutPlan = () => {
	// const data = useStaticQuery(query)
	// const sources = [
	// 	data.desktop.childImageSharp.fluid,
	// 	{
	// 		...data.mobile.childImageSharp.fluid,
	// 		media: `(max-width: 800px)`
	// 	}
	// ]

	const {strapiAboutPage: {future: {title, info, image}}} = useStaticQuery(query)
	// console.log(title, info, image);

	return (
		<section>
			<h2 className={styles.heading}>{title}</h2>
			{/* <h2 className={styles.heading}>What's my plan?</h2> */}
			{/* <p className={styles.text}>Well in my immediate future I'd like to be part of a team of creative professionals working on beautiful websites and apps to create memorable experiences for people. I also wish to go beyond that into making videos and production for events and campaigns. My dream though is to eventually establish a brand and marketing company, be a great speaker and travel.</p> */}
			{/* <p className={styles.text}>I'd like to be part of a team of creative professionals working on beautiful websites and apps to create memorable experiences for people. A team of good people, passionate about their work, always learning and encouraging each other. I imagine the projects we take up also involving elements of video making and physical production setups for events. My dream is to establish such a brand for myself by having worked with others who share a similar vision.</p> */}
			<p className={styles.text}>{info[0].item}</p>
			<Img fluid={image.childImageSharp.fluid} className={styles.img} />
			{/* <Img fluid={sources} className={styles.img} /> */}
			<p className={styles.tagline}>Yes, I want Suraj on my team!</p>
		</section>
	)
}

export default AboutPlan
