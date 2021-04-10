import React from 'react'
import './card.css'

export function Card(props) {
    return (

        <div className="card">

            <h5>{props.title}</h5>

            <img src={props.imagem}/>

            <strong>Holiday</strong>

            <p>Friday 15:00</p>

            <button>Info</button>

        </div>

    )
}