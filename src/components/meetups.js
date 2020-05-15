import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './meetups.css'
import MeetupEvent from './meetupEvent'

const MeetupList = ({ children, filter }) => {
  const data = useStaticQuery(graphql`
    query {
      meetup {
        events {
          id
          name
          status
          local_date
          local_time
          link
          description
          venue {
            name
            address_1
            city
          }
        }
      }
    }
  `)

  return (
    <div className="meetups">
      {data.meetup.events
        .filter(typeof filter === 'function' ? filter : () => true)
        .map(event => (
          <a
            className="event-link"
            key={event.id}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MeetupEvent data={event} />
          </a>
        ))}
      {children}
    </div>
  )
}

export default MeetupList
