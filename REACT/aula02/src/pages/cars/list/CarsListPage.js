import React from 'react'
import { CarList } from './CarsList' 

import { service } from '../../../services/car-service'

export class CarsListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: []
    } 
  }

  async componentDidMount() {
    const cars = await service.findAll() || []
    this.setState({
      cars
    })
  }

  onNew = () => {
    this.props.history.push('./form/new')
  }

  onEdit = (record) => {
    this.props.history.push('./form/'+record.id)
  }

  onRemove = async (record) => {
    let confirm = window.confirm("Deseja realmente deletar o carro escolhido????")

    if(confirm) {
      try {
        await service.remove(record.id)
        const cars = await service.findAll()
        this.setState({
          cars
        })
        setTimeout(() => {
          alert('Carro removido com sucesso')
        }, 500)
      } catch (err) {
        alert(err.data.message)
      }
    }
  }

  render() {
    return (
      <CarList records={this.state.cars} onNewHandler={this.onNew} onEdit={this.onEdit} onRemove={this.onRemove}/>
    )
  }

}