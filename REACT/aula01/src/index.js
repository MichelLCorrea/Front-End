import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './image1.svg'
import mercedes from './images/mercedes.png'
import AwesomeIcon from './components/AwesomeIcon'
import {LineItem} from './components/LineItem'

import avatar from './images/avatar.png'
import {Profile} from './components/profile/profile'

import {Card} from './components/card/card'
import forest from './images/forest.jpg'

import {Clock} from './components/Clock'

import {ContactPage} from './pages/contacts/ContactsPage'

function multiplicar(n1, n2) {
  return n1 * n2
}

function idade(idade) {
  return idade + 20
}

const nome = "Michel"

const multiplicador = (<h1>3 x 7 = {multiplicar(3, 7)}</h1>)
const dados = (<h1>Meu nome é {nome} e eu tenho {idade(19)} anos</h1>)
const imagem = <img src={mercedes} />

// Componente usando função
function Welcome(props) {
  return <h1>Seja bem vindo(a) {props.name}!!!</h1>
}

// Componente usando class
class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

const lines = [
  {
    icon: "fa-pencil",
    content: "Designer UI"
  },
  {
    icon: "fa-home",
    content: "London, UK"
  },
  {
    icon: "fa-birthday-cake",
    content: "April 1, 1988"
  }
]

ReactDOM.render(
  <div>
   {/*
    <Welcome name="Michel"/>
    <AwesomeIcon icon="fa-pencil"/>
    <LineItem icon="fa-home" content="Item Home"/>
    <Hello name="João"/>

    <Profile name="João da Silva" image={avatar} lines={lines} />

    <Card title="Upcoming Events:" imagem={forest}/>

    <Clock />

    
  */}

    <ContactPage />

  </div>,

  document.getElementById('root')
);