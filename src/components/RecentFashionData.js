import "./RecentStyles.css"

import React from 'react'

function RecentFashionData  (props)  {
  return (
    <div className="t-card">
        <div className="t-img">
            <img src={props.image} alt=""/>
        </div>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
  )
}

export default RecentFashionData