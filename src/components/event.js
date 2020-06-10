import React from "react"

const Event = ({ event: { name, startDate, endDate, location, url } }) => {
  return (
    <>
      <h2>
        <a href={url}>{name}</a>
      </h2>
      <p>{startDate}</p>
      <p>{location}</p>
    </>
  )
}

export default Event
