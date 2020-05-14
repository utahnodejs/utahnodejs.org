import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './organizers.css'

const Organizers = () => {
  const {
    content: { organizers },
  } = useStaticQuery(graphql`
    query {
      content {
        organizers {
          name
          img
        }
      }
    }
  `)

  return (
    <div className="organizers">
      {organizers.map(({ name, img }) => (
        <div className="organizer" key={name}>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <h4>{name}</h4>
        </div>
      ))}
    </div>
  )
}

export default Organizers
