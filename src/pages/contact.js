import React from 'react'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'
import { useForm } from "react-hook-form";

import Layout from '../components/shared/Layout';
import styles from './contact.module.scss'

const query = graphql`
  {
    file(relativePath: {eq: "contact.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 650) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Contact = () => {
	const placeholderMsg = `Hi Suraj,

I'm Bob from the amazing company. We want to work with you because you're cool.
Can we chat?
	 
Regards`
 const {file: {childImageSharp: {fluid}}} = useStaticQuery(query)
 const { register, handleSubmit, errors } = useForm();
 const onSubmit = data => console.log(data);


	return (
		<Layout>
			<h1 className={styles.heading}>Let's work together</h1>
			<p className={styles.tagline}>Use the form below and I'll get back to you in 24 hours.</p>
			<div className={styles.wrapper}>
				<Img fluid={fluid} className={styles.img} />
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.formGroup}>
						<label htmlFor="name">Name</label>
						<input name="name" placeholder="Bob" ref={register({ required: true })} />
						{errors.name && <span className={styles.error}>This field is required</span>}
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="email">Email</label>
						<input name="email" placeholder="bob@bobcat.com" ref={register({ required: true })} />
						{errors.name && <span className={styles.error}>This field is required</span>}
					</div>

					<div className={styles.formGroup}>
						<label htmlFor="message">Message</label>
						<textarea name="message" placeholder={placeholderMsg} ref={register({ required: true })} />
						{errors.name && <span className={styles.error}>This field is required</span>}
					</div>
					<button type="submit">Send</button>
				</form>
			</div>
		</Layout>
	)
}

export default Contact