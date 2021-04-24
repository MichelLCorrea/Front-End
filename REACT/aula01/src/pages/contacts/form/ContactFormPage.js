import React from 'react'
import { service } from '../../../services/contact-service'
import { ContactForm } from './ContactsForm'

export class ContactFormPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRecord: {
        id: "",
        name: "",
        email: "",
        phone: ""
      }
    }
  }

  async componentDidMount() {
    const {params = {}} = this.props.match
    const {id} = params
    if(id && id != 'new') {
      try{
        let currentRecord = await service.findById(parseInt(id))
        this.setState({
          currentRecord
        })
      }catch(err) {
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
      try{
        await service.update(this.state.currentRecord)    
        this.props.history.push('/')
      }catch(err) {
        alert(err.data.message)
      }
    } else {
      try{
        await service.insert(this.state.currentRecord)    
        this.props.history.push('/')
      }catch(err) {
        alert(err.data.message)
      }
    }
  }

  render() {
    return (
      <ContactForm currentRecord={this.state.currentRecord} onFormChangeHandler={this.onCurrentRecordChange} onSaveHandler={this.onSave}/>
    )
  }
}