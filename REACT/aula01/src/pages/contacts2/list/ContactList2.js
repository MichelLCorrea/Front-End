import React from 'react'

import './ContactList2.css'

import { ListItem } from  './components/ListItem'

export function ContactList2(props) {
  const items = props.records || []
  const list = items.map(element => {
    const item = {
      id: element.id,
      avatar: element.avatar,
      name: element.name, 
    }

    return (
      <ListItem key={item.id} item={item} onItemSelected={props.onItemSelected}/>
    )
  })

  return (
    <div class="contact-list2">
      {list}
    </div>
  )

}