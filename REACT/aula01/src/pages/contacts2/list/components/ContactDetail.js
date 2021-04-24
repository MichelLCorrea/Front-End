import React from 'react'
import { Avatar } from './Avatar'

import './ContactDetail.css'

export function ContactDetail(props) {

  if(!props.contact) {
    return null
  }

  return (

    <div className="contact-detail">
      <Avatar avatar={props.contact.avatar} description={props.contact.name} />

      <h3>{props.contact.name}</h3>
      <p>{props.contact.email}</p>
      <p>{props.contact.phone}</p>

    </div>
  )
}