import React from 'react'
import { Avatar } from './Avatar'

import './ListItem.css'

export function ListItem(props) {
  return (

    <div className="list-item" onClick={() => props.onItemSelected && props.onItemSelected(props.item)}>
      <Avatar avatar={props.item.avatar} description={props.item.name}/>
      <h3 className="list-item__title">{props.item.name}</h3>
    </div>

  )
}