import React from 'react'

import './Avatar.css'

export function Avatar(props) {
  return (

    <div className="avatar"> 
      <img src={"/resources/images/" + props.avatar} alt={props.description} />
    </div>

  )
}