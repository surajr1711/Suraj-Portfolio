import React from 'react'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

// import aboutVideo from '../../assets/about-video.mp4'
// 'https://res.cloudinary.com/dd3kyzhdg/video/upload/v1604832020/about_video_7678bdaafb.mp4'

import styles from './AboutMain.module.scss'
import CTAPrimary from '../shared/CTAPrimary'

// const query = graphql`
//   {
//     file(relativePath: {eq: "about-1.jpg"}) {
//       childImageSharp {
//         fluid(maxWidth: 450, maxHeight: 650) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
const query = graphql`
  {
    strapiAboutPage {
      value {
				title
				info {
					item
				}
        image {
          childImageSharp {
            fluid(maxWidth: 450, maxHeight: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
				video {
					publicURL
				}
      }
    }
  }
	`

const AboutMain = () => {
	const {strapiAboutPage: {value: {title, info, image, video}}} = useStaticQuery(query)
	// console.log(title, info, image, video)

	// const {
  //   file: {
  //     childImageSharp: { fluid },
  //   },
	// } = useStaticQuery(query)
	
	return (
		<main>
			<div className={styles.wrapper}>
				<div className={styles.intro}>
					{/* <h1 className={styles.heading}>Hi,</h1> */}
					<h1 className={styles.heading}>{title}</h1>
					{info.map((detail, i) => <p key={i}>{detail.item}</p>)}
					{/* <p>I'm Suraj Radhakrishnan. I can make a fantastic website for you. From design to development, I got you.</p>
					<p>So, if you're looking for a skilled web developer to build a beautiful website to market yourself and your products or to join your team, then you are in the right place!</p>
					<p>I made a video for you introducing myself. It's right below.</p> */}
				</div>
				{/* <Img fluid={fluid} className={styles.img} /> */}
				<Img fluid={image.childImageSharp.fluid} className={styles.img} />
			</div>
			<div className={styles.vid}>
				<video controls>
					{/* <source src={aboutVideo} type="video/mp4" /> */}
					<source src={video.publicURL} type="video/mp4" />
					<track default
           kind="captions"
           srcLang="en"
          //  src="/about-video.vtt"
					 />
					Sorry, your browser doesn't support embedded videos.
				</video>
				<p className={styles.tagline}>Yes, I want to work with Suraj!</p>
				<CTAPrimary to="/contact" text="contact" className={styles.contactLink} />
			</div>

		</main>
	)
}

export default AboutMain
