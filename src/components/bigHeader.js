import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from './seo'

import './bigHeader.css'

const BigHeader = () => {
  const {
    site: {
      siteMetadata: { title },
    },
    content: { links },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      content {
        links {
          text
          url
        }
      }
    }
  `)

  return (
    <header className="big">
      <SEO title="Home" />
      <h1>{title}</h1>
      <div className="links">
        {links.map(({ text, url }) => (
          <a href={url} key={text}>
            <h4 style={{ margin: `0` }}>{text}</h4>
          </a>
        ))}
      </div>
    </header>
  )
}

export default BigHeader
