import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import AboutMeSlide from './AboutMeSlide'
// import aboutMeSlideList from '../../constants/aboutMeSlideList'

import styles from './AboutPersonal.module.scss'

// const query = graphql`
//   {
// 		file(relativePath: {eq: "rocky.jpg"}) {
//       childImageSharp {
//         fluid(maxWidth: 480, maxHeight: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     allFile(filter: {relativePath: {regex: "/^(about-slide-)([0-9]+).jpg$/"}}, sort: {order: ASC, fields: childImageSharp___fluid___originalName}) {
//       images: nodes {
//         childImageSharp {
//           fluid(maxWidth: 480, maxHeight: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

const query = graphql`
  {
    strapiAboutPage {
      personal {
        title
        info {
          item
          image {
            childImageSharp {
              fluid(maxWidth: 480, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const AboutPersonal = () => {
	// const { file, allFile: {images}} = useStaticQuery(query)
	// console.log(file, images);
  const {strapiAboutPage: {personal: {title, info}}} = useStaticQuery(query)
  // console.log(title, info);

	return (
		<section>
			{/* <h2 className={styles.heading}>What have I been up to?</h2> */}
			<h2 className={styles.heading}>{title}</h2>
			{/* <AboutMeSlide img={file} text={aboutMeSlideList[0].text} className={styles.slide} /> */}
			<AboutMeSlide img={info[0].image} text={info[0].item} className={styles.slide} />

			<p className={styles.tagline}>A little about me outside work...</p>

			<div className={styles.aboutMe}>
				{/* {aboutMeSlideList.slice(1).map((slide, i) => (
					<AboutMeSlide key={i} img={images[i]} text={slide.text} className={styles.slide} />
				))} */}
				{info.slice(1).map((slide, i) => (
					<AboutMeSlide key={i} img={slide.image} text={slide.item} className={styles.slide} />
				))}
			</div>
		</section>
	)
}

export default AboutPersonal
