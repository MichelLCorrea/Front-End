import React from 'react'

import { connect } from 'react-redux'
import * as actions from './products.actions'

function mapStateToProps(state) {
  const {productsState} = state
  return {
    currentRecord: productsState.currentProduct,
    records: productsState.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => {
      dispatch(actions.addProduct(product))
    },

    clearForm: () => {
      dispatch(actions.clearCurrentProduct())
    },

    setField: (field, value) => {
      dispatch(actions.setField(field, value))
    } 
  }
}

class ProductPage extends React.Component {

  constructor(props) {
    super(props)
  }

  onAddProductHandler = (event) => {
    if(this.props.currentRecord.name && this.props.currentRecord.name.trim().length > 0) {
      this.props.addProduct(this.props.currentRecord)
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
        <ProductForm onAddProductHandler={this.onAddProductHandler} onChangeHandler={this.onFormChange} record={this.props.currentRecord}/>
        <h1>Listagem</h1>
        <ProductList records={this.props.records}/>
      </div>
    )
  }

}

// Componente Lista
function ProductList(props) {
  const items = props.records.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.name}</td>
        <td>{element.price}</td>
      </tr>
    )
  })

  const table = (
    <table>

      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>

      <tbody>
        {items}
      </tbody>

    </table>
  )

  return table
}

// Componente Formulário
function ProductForm(props) {
  return (
    <div>
      <h1>Produtos</h1>
      <label>Nome</label> <br/>
      <input name="name" value={props.record.name || ""} onChange={props.onChangeHandler} /> <br/>
      <label>Preço</label> <br/>
      <input name="price" value={props.record.price || ""} onChange={props.onChangeHandler}/> <br/>

      <button onClick={props.onAddProductHandler}>Adicionar</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)