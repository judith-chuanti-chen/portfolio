import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        twitterUsername
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
    author,
    siteDesc, 
    siteTitle, 
    siteUrl, 
    image, 
    twitterUsername
  } = site.siteMetadata
  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDesc} />
    <meta name="image" content={image}/>
    <meta name="author" content={author} />
    <meta property="og:title" content={title|| siteTitle}/>
    <meta property="og:type"  content="website"/>
    <meta property="og:description" content={description || siteDesc} />
    <meta property="og:image" content={image}/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:url" content={siteUrl}/>
    <meta property="fb:app_id" content="276206693457455"/>
    <meta name="twitter:card" content={image}/>
    <meta name="twitter:creator" content={twitterUsername}/>
  </Helmet>
}

export default SEO
