import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
        src
      }
    }
  }
}
`
const Hero = () => {
  const {
    file: {
      childImageSharp: {fluid},
    },
  } = useStaticQuery(query)
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>Chuan-Ti Chen</h1>
          <h4>CS Graduate, Aspiring Software Engineer</h4>
          <Link to="/contact" className="btn">Get in touch</Link>
          <SocialLinks/>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img"/>
    </div>
  </header>
}

export default Hero
