import React from 'react'

export default function AwesomeIcon(props) {
    const className = `fa fa-fw ${props.icon}`
    
    return <i className={className}></i>
}