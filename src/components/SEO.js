import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        linkedInUsername
        image
        siteUrl
        siteTitle: title
      }
    }
  }
`
const SEO = ({title, description}) => {
  const{site} = useStaticQuery(query);
  const {
    siteDesc, 
    siteTitle, 
    siteUrl, 
    image, 
    linkedInUsername
  } = site.siteMetadata
  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDesc} />
    <meta name="image" content={image}/>
    <meta property="og:title" content={title|| siteTitle}/>
    <meta property="og:description" content={description || siteDesc} />
    <meta property="og:image" content={image}/>
    <meta property="og:url" content={siteUrl}/>
    <meta name="twitter:card" cotent={image}/>
  </Helmet>
}

export default SEO
