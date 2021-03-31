class ProdutoRepository{

    insert(produto){
        return fetch('http://localhost:3000/produtos', {
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            method: 'POST',
            body:JSON.stringify(produto)
        })
    }

    buscarTodos() {
        return fetch('http://localhost:3000/produtos')
        .then(response => {
            let data = response.json()
            return data
        })
    }

    buscarPorId(id) {
        return fetch('http://localhost:3000/produtos/'+id)
        .then(response => {
            let data = response.json()
            return data
        })
    }

    update(produto){
        return fetch('http://localhost:3000/produtos/'+produto.id, {
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            method: 'PUT',
            body:JSON.stringify(produto)
        })
    }

    remove(id){
        return fetch('http://localhost:3000/produtos/'+id, {
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            method: 'DELETE'
        })
    }
}