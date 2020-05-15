import React from 'react'

import BigHeader from '../components/bigHeader'
import Layout from '../components/layout'
import MeetupList from '../components/meetups'
import Organizers from '../components/organizers'

const IndexPage = () => {
  return (
    <>
      <BigHeader></BigHeader>
      <Layout includeHeader={false}>
        <h2 id="organizers">Organizers</h2>
        <Organizers />
        <h2 id="upcoming-events">Upcoming Events</h2>
        <MeetupList
          filter={(m, i) => {
            return i < 2
          }}
        >
          <a className="see-more" href="events">
            See More
          </a>
        </MeetupList>
      </Layout>
    </>
  )
}

export default IndexPage
