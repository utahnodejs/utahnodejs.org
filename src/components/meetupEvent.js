import React from 'react'

import './meetupEvent.css'
const MeetupEvent = ({
  data: {
    id,
    name,
    status,
    local_date,
    local_time,
    description,
    venue: { name: venueName, address_1: address, city },
  },
}) => {
  const combinedDate = new Date(local_date + ' ' + local_time)
  const localeDate = combinedDate.toDateString()
  const localeTime = combinedDate.toLocaleTimeString()

  return (
    <div className="meetup-event" data-id={id} data-status={status}>
      <h6 className="date">
        {localeDate} {localeTime}
      </h6>
      <h3 className="title">{name}</h3>
      <h6 className="location">{`${venueName}, ${address}, ${city}`}</h6>
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
    </div>
  )
}

export default MeetupEvent
