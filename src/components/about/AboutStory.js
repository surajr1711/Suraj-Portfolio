import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

// import youDaMan from '../../assets/you-da-man.mp4'
// import youDaManPoster from '../../assets/you-da-man.jpg'
// https://res.cloudinary.com/dd3kyzhdg/video/upload/v1604823584/you_da_man_e24c3b06b0.mp4

import styles from './AboutStory.module.scss'


const query = graphql`
  {
    strapiAboutPage {
      story {
				title
				info {
					item
				}
				image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              src
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

const AboutStory = () => {
	const {strapiAboutPage: {story: {title, info, image, video}}} = useStaticQuery(query)
	// console.log(title, info, image, video)

	return (
		<section>
			{/* <h2 className={styles.heading}>Your project is in safe hands...</h2> */}
			{/* <h2 className={styles.heading}>I bring my best...</h2> */}
			<h2 className={styles.heading}>{title}</h2>
			<div className={styles.wrapper}>
				<div className={styles.desc}>
					{info.map((detail, i) => <p key={i}>{detail.item}</p>)}
					{/* <p>... becasue I enjoy what I do. I love logic and design and that's web development.</p>
					<p>But most of all, I'm thrilled around people who are driven and make things happen. I grew up in Muscat, Oman and did a bachelors degree only to understnad that the corporate job I had wouldn't satisfy me.</p>
					<p>So I decided to quit and gain a skill set that I'm passionate about. Something that I could use to collaborate and create beautiful products with other dreamers like me.</p>
					<p className={styles.tagline}>That's you!</p> */}
				</div>
				<div className={styles.gorilla}>
					<video width="400" height="400" autoPlay muted loop playsInline poster={image.childImageSharp.fluid.src} >
					<source src={video.publicURL} type="video/mp4" />
						<track default
						kind="captions"
						srcLang="en"
						//  src="/about-video.vtt"
						/>
			Sorry, your browser doesn't support embedded videos.
					</video>
				</div>
			</div>
		</section>
	)
}

export default AboutStory
