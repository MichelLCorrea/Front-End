import React from 'react'
import './CarForm.css'

export function CarForm(props) {
    return (
        <div className="contact-form">
            <label>Código</label>
            <input name="id" value={props.currentRecord.id} readOnly={true}/>
            
            <label>Marca</label>
            <input name="marca" value={props.currentRecord.marca} onChange={props.onFormChangeHandler}/>
            
            <label>Modelo</label>
            <input name="modelo" value={props.currentRecord.modelo} onChange={props.onFormChangeHandler}/>
            
            <label>Preço</label>
            <input name="preco" value={props.currentRecord.preco} onChange={props.onFormChangeHandler}/>

            <button onClick={props.onSaveHandler}>Salvar</button>
        </div>
    )
}