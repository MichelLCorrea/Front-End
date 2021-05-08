import React from 'react'

import {connect} from 'react-redux'
import * as actions from './clients.actions'

function mapStateToProps(state) {
  const {clientsState} = state
  return {
    currentRecord: clientsState.currentClient,
    records: clientsState.clients
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addClient: (client) => {
      dispatch(actions.addClient(client))
    },

    clearForm: () => {
      dispatch(actions.clearCurrentClient())
    },

    setField: (field, value) => {
      dispatch(actions.setField(field, value))
    }
  }
}

class ClientPage extends React.Component {
  constructor(props) {
    super(props)
  }

  onAddClientHandler = (event) => {
    if(this.props.currentRecord.name && this.props.currentRecord.name.trim().length > 0) {
      this.props.addClient(this.props.currentRecord)
      this.props.clearForm()
    }
  }

  onFormChange = (event) => {
    const target = event.target
    const key = target.name
    const value = target.value

    this.props.setField(key, value)
  }

  render() {
    return (
      <div>
        <ClientForm onAddClientHandler={this.onAddClientHandler} onChangeHandler={this.onFormChange} record={this.props.currentRecord}/>
        <h1>Listagem</h1>
        <ClientList records={this.props.records}/>
      </div>
    )
  }

}

function ClientList(props) {
  const items = props.records.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.name}</td>
        <td>{element.cpf}</td>
        <td>{element.endereco.rua}</td>
        <td>{element.endereco.numero}</td>
        <td>{element.endereco.bairro}</td>
        <td>{element.endereco.cidade}</td>
      </tr>
    )
  })

  const table = (
    <table>

      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Rua</th>
          <th>Número</th>
          <th>Bairro</th>
          <th>Cidade</th>
        </tr>
      </thead>

      <tbody>
        {items}
      </tbody>

    </table>
  )

  return table
}

function ClientForm(props) {
  return (
    <div>
      <h1>Clientes</h1>

      <label>Nome</label> <br/>
      <input name="name" value={props.record.name || ""} onChange={props.onChangeHandler} /> <br/>
      <label>CPF</label> <br/>
      <input name="cpf" value={props.record.cpf || ""} onChange={props.onChangeHandler}/> <br/>
      <label>Rua</label> <br/>
      <input name="endereco.rua" value={props.record.endereco.rua || ""} onChange={props.onChangeHandler}/> <br/>      
      <label>Número</label> <br/>
      <input name="endereco.numero" value={props.record.endereco.numero || ""} onChange={props.onChangeHandler}/> <br/>
      <label>Bairro</label> <br/>
      <input name="endereco.bairro" value={props.record.endereco.bairro || ""} onChange={props.onChangeHandler}/> <br/>
      <label>Cidade</label> <br/>
      <input name="endereco.cidade" value={props.record.endereco.cidade || ""} onChange={props.onChangeHandler}/> <br/>

      <button onClick={props.onAddClientHandler}>Adicionar</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage)