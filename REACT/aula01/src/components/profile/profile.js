import React from 'react'

import {LineItem} from '../LineItem'
import './profile.css'

export function Profile(props) {
    
    const Lines = props.lines.map((line, index) => {
        return <LineItem icon={line.icon} content={line.content} key={index} />
    })

    return (

        <div className="profile">
            <h4>{props.name}</h4>

            <p className="profile-image-container">
                <img src={props.image}/>
            </p>

            <hr className="divider"/>

            {Lines}

        </div>

    )
}