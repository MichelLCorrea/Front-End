import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from './store'
import {Provider} from 'react-redux'

import {AppRouter} from './router/index'

const course = 'React';

//Element
const element = <h1>Bem vindo ao curso de {course}</h1>

//Component
function Hello() {
  return element;
}

//Gerenciamento de Estado
//*Propriedades
function Greetings(props) {
  return <h1>Bem vindo, {props.name}</h1>
}


const name = window.prompt('Digite seu nome');

//Componente com Gerenciamento de estado interno (statefull)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increase = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }
  decrease = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 }
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}

class FormularioControlado extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  changeName = (event) => {
    const target = event.target
    this.setState((prevState) => {
      return {name: target.value}
    })
  }

  render() {
    return (
      <div>
        <h3>Formulário Controlado</h3>
        <p>{this.state.name}</p>
        <input value={this.state.name} onInput={this.changeName} />
      </div>
    )
  }
}

class FormularioNaoControlado extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.inputName = React.createRef()
  }

  refresh = (event) => {
    const name = this.inputName.current.value
    this.setState((prevState) => {
      return {name}
    })
  }

  render() {
    return (
      <div>
        <h3>Formulário não Controlado</h3>
        <p>{this.state.name}</p>
        <input defaultValue={this.state.name}  ref={this.inputName}/>
        <button onClick={this.refresh}>Atualizar</button>
      </div>
    )
  }
}

const el = <div>
<Greetings name={name} />
<Counter/>
<FormularioControlado />
<FormularioNaoControlado />
</div>

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
