import React from 'react'
import { Dialog } from '../../../components/dialog/Dialog'
import { ContactDetail } from './components/ContactDetail'
import { ContactList2 } from './ContactList2'

import { service } from '../../../services/contact-service2'

export class ContactListPage2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Ana',
          avatar: 'img6.png',
          email: 'ana@test.com',
          phone: '4895349857'
        }
      ],
      selected: null  ,
      showDialog: true
    }
  }

  async componentDidMount() {
    const contacts = await service.findAll() || []
    this.setState({
      contacts
    })
  }

  onCloseModalHandler = () => {
    this.setState({showDialog:false})
  }

  onItemSelectedHandler = async (element) => {
    const record = await service.findById(element.id)
    this.setState({
      selected: record,
      showDialog: true
    })
  }

  render() {
    return (
      <div>
        <ContactList2 records={this.state.contacts} onItemSelected={this.onItemSelectedHandler}/>
        <Dialog visible={this.state.showDialog} onClose={this.onCloseModalHandler}>
          
          <ContactDetail contact={this.state.selected}/>

        </Dialog>
      </div>
    )
  }
}