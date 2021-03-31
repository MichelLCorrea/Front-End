class ContatoRepository{

    insert(contato){
        return fetch('http://localhost:3000/contatos', {
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            method: 'POST',
            body:JSON.stringify(contato)
        })
    }

    buscarTodos() {
        return fetch('http://localhost:3000/contatos')
        .then(response => {
            let data = response.json()
            return data
        })
    }

    buscarPorId(id) {
        return fetch('http://localhost:3000/contatos/'+id)
        .then(response => {
            let data = response.json()
            return data
        })
    }

    update(contato){
        return fetch('http://localhost:3000/contatos/'+contato.id, {
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            method: 'PUT',
            body:JSON.stringify(contato)
        })
    }

    remove(id){
        return fetch('http://localhost:3000/contatos/'+id, {
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            method: 'DELETE'
        })
    }
}