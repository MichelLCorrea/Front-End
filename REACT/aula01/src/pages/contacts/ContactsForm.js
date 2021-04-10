import React from 'react'
import './ContactForm.css'

export function ContactForm(props) {
    return (
        <div className="contact-form">
            <label>Código</label>
            <input name="id" value={props.currentRecord.id} readOnly={true}/>
            
            <label>Nome</label>
            <input name="name" value={props.currentRecord.name} onChange={props.onFormChangeHandler}/>
            
            <label>Email</label>
            <input name="email" value={props.currentRecord.email} onChange={props.onFormChangeHandler}/>
            
            <label>Telefone</label>
            <input name="phone" value={props.currentRecord.phone} onChange={props.onFormChangeHandler}/>

            <button onClick={props.onSaveHandler}>Salvar</button>
        </div>
    )
}