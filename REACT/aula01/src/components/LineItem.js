import React from 'react'
import AwesomeIcon from './AwesomeIcon'
import './LineItem.css'

export function LineItem(props) {
    return (
        <div className="line-item">
            <AwesomeIcon icon={props.icon}/>
            <p>{props.content}</p>
        </div>
    )
}