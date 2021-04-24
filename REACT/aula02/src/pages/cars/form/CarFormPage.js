import React from 'react'

import { service } from '../../../services/car-service'
import { CarForm } from './CarsForm'

export class CarFormPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRecord: {
        id: "",
        marca: "",
        modelo: "",
        preco: ""
      }
    }
  }

  async componentDidMount() {
    const {params = {}} = this.props.match
    const {id} = params

    if(id && id != 'new') {
      try {
        let currentRecord = await service.findById(parseInt(id))
        this.setState({
          currentRecord
        })
      } catch (err) {
        alert(err.data.message)
      }
    }
  }

  onCurrentRecordChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    const currentRecord = {...this.state.currentRecord,[key]: value}

    this.setState({
      currentRecord
    })
  }

  onSave = async () => {
    if(this.state.currentRecord.id) {
      try {
        await service.update(this.state.currentRecord)
        this.props.history.push('/')
      } catch (err) {
        alert(err.data.message)
      }
    }else {
      try {
        await service.insert(this.state.currentRecord)
        this.props.history.push('/')
      } catch (err) {
        alert(err.data.message)
      }
    }
  }

  render() {
    return (
      <CarForm currentRecord={this.state.currentRecord} onFormChangeHandler={this.onCurrentRecordChange} onSaveHandler={this.onSave}/>
    )
  }

}