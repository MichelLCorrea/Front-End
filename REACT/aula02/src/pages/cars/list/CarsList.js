import React from 'react'

export function CarList(props) {
    const lines = props.records.map(record => {
        return (

            <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.marca}</td>
                <td>{record.modelo}</td>
                <td>{record.preco}</td>
                <td>
                    <button onClick={()=>{props.onEdit && props.onEdit(record)}}>Editar</button>
                    <button onClick={()=>{props.onRemove && props.onRemove(record)}}>Remover</button>
                </td>
            </tr>

        )
    })

    const header = (
        <tr>
            <th>Código</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Preço</th>
            <th>Ações</th>
        </tr>
    )

    const table = (
        <table>
            <thead>
                {header}
            </thead>
            <tbody>
                {lines}
            </tbody>
        </table>
    )

    return (
        <div>
            <button onClick={props.onNewHandler}>Novo</button>
            {table}
        </div>
    )
}