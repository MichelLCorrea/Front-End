import React from 'react'

import {connect} from 'react-redux'
import * as actions from '../contacts.actions'

function mapStateToProps(state) {
  const {productsState} = state

  return {
    records: productsState.products,
    loading: productsState.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadRecords: () => {
      dispatch(actions.loadRecords)
    }
  }
}

function ContactList(props) {
  const items = props.records.map(element => {
    return (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.email}</td>
        <td>{element.phone}</td>
      </tr>
    )
  })

  const table = (
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
        </tr>
      </thead>

      <tbody>
        {items}
      </tbody>
    </table>
  )

  return table
}

class ContactListPage extends React.Component {

  componentDidMount() {
    this.props.loadRecords()
  }

  onNewHandler = () => {
    this.props.history.push('/contacts/novo')
  }

  render() {
    let loading = null

    if(this.props.loading) {
      loading = (<h1>Carregando...</h1>)
    }

    return (
      <div>
        {loading}
        <button onClick={this.onNewHandler}>Novo</button>
        <h3>Lista de contatos</h3>
        <ContactList records={this.props.records}/>

      </div>
    )
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(ContactListPage)