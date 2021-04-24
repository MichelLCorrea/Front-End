import React from 'react'
import { ContactList } from './contactsList'

import {service} from '../../../services/contact-service'

export class ContactsListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  async componentDidMount() {
    const contacts = await service.findAll() || []
    this.setState({
      contacts
    })
  }

  onNew = () => {
    this.props.history.push('/form/new')
  }

  onEdit = (record) => {
    this.props.history.push('/form/'+record.id)
  }

  onRemove = async (record) => {
      let confirm = window.confirm('Deseja realmente remover o contato???')
      if(confirm) {
        try {
          await service.remove(record.id)
          const contacts = await service.findAll()
          this.setState({
            contacts
          })
          setTimeout(() => {
            alert('Contato removido com sucesso')
          }, 500)
        } catch (err) {
          alert(err.data.message)
        }
      }
  }

  render() {
    return (
      <ContactList records={this.state.contacts} onNewHandler={this.onNew} onEdit={this.onEdit} onRemove={this.onRemove}/>
    )
  }
}