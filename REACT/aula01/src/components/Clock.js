import React from 'react'

export class Clock extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            // setState é uma função que serve pra mudar o estado do componente, ele fica mudando 
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.timerId)
    }
    
    render() {
        return (
        
            <div>
                <h1>A data e hora atual é {this.state.time}</h1>
            </div>
        )

    }
}