import React from 'react'
import {ContactForm} from './ContactsForm'
import {ContactList} from './contactsList'

export class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRecord: {
                id: "",
                name: "",
                email: "",
                phone: ""
            },
            records: [],
            currentView: 'list'
        }
    }

    onNew = (event) => {
        this.setState({currentView: 'form'})
    }

    onSave = (event) => {

        let currentRecord = {...this.state.currentRecord}
        let records = [...this.state.records]
        if(!currentRecord.id){
            currentRecord.id = new Date().getTime()
            records.push(currentRecord)
        }else {
            records = records.map(element => {
                return element.id != currentRecord.id ? element : currentRecord
            })
        }

        currentRecord = {
            id: "",
            name: "",
            email: "",
            phone: ""
        }

        this.setState({records, currentRecord, currentView: 'list'})
    }

    onEdit = (record) => {
        if(record) {
            const currentRecord = {...record}
            const currentView = 'form'
            this.setState({
                currentRecord,
                currentView
            })
        }
    }

    onRemove = (record) => {
        if(record) {
            const remove = window.confirm(`Deseja remover o contado ${record.name}????`)
            if(remove) {
                let records = [...this.state.records]
                records = records.filter(element => element.id !== record.id)
                this.setState({
                    records
                })
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

    render() {

        const form = (<ContactForm currentRecord={this.state.currentRecord} onFormChangeHandler={this.onCurrentRecordChange} onSaveHandler={this.onSave}/>)

        const list = (<ContactList records={this.state.records} onNewHandler={this.onNew} onEdit={this.onEdit} onRemove={this.onRemove}/>)

        if(this.state.currentView === 'list') {
            return <div>
                {list}
            </div>
        }

        return (
            <div>
                {form}
            </div>
        )
    }

}