import React from 'react'
import Img from 'gatsby-image'
import {Link, graphql, useStaticQuery} from 'gatsby'

import CTAPrimary from '../shared/CTAPrimary'
import TechStack from '../shared/TechStack'

import styles from './HomeMain.module.scss'

const query = graphql`
  {
    strapiHomePage {
      title
      caption
      stack {
        title
      }
      image {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const HomeMain = () => {
  const {strapiHomePage: {title, caption, stack, image}} = useStaticQuery(query)
  // console.log(title, caption, stack, image)

	return (
		<main>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <h1 className={styles.heading}>{title}</h1>
          <p className={styles.desc}>{caption} <Link className={styles.aboutLink} to="/about">Know More.</Link></p>
          <TechStack items={stack} className={styles.techStack} />
        </div>
        <Img fluid={image.childImageSharp.fluid} className={styles.img} objectPosition="bottom" />
      </div>
      <div className={styles.contactLinkWrapper}>
        <CTAPrimary to="/contact" text="contact" className={styles.contactLink} />
      </div>
    </main>
	)
}

export default HomeMain
