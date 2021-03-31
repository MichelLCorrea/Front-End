class FormularioProduto {
    
    constructor(repositorio) {
        this.repositorio = repositorio
        this.elId = document.querySelector('input[name="id"]')
        this.elNome = document.querySelector('input[name="nome"]')
        this.elPreco = document.querySelector('input[name="preco"]')
        this.elDescricao = document.querySelector('input[name="descricao"]')
        this.elBtnSalvar = document.querySelector('#btnSalvar')
        this.elTable = document.querySelector('#tableBody')

        this.onSalvarHandler = this.onSalvarHandler.bind(this)
        this.limparFormulario = this.limparFormulario.bind(this)
        this.lerDadosFormulario = this.lerDadosFormulario.bind(this)
        this.limparTable = this.limparTable.bind(this)
        this.atualizarTable = this.atualizarTable.bind(this)
        this.inserirLinhaTable = this.inserirLinhaTable.bind(this)
        this.onEditHandler = this.onEditHandler.bind(this)
        this.onRemoveHandler = this.onRemoveHandler.bind(this)

        this.elBtnSalvar.addEventListener('click', this.onSalvarHandler)
    }

    onSalvarHandler(event) {
        event.preventDefault()

        const produto = this.lerDadosFormulario()

        if(produto.id){
            this.repositorio.update(produto)
            .then((resultado) => {
                alert('Produto atualizado com sucesso')
                this.limparFormulario()
                this.atualizarTable()
            })
            .catch((err) => {
                alert('Ocorreu um erro ao atualizar a lista de produtos')
            })
        }else {
            this.repositorio.insert(produto)
            .then((resultado) => {
                alert('Produto inserido com sucesso')
                this.limparFormulario()
                this.atualizarTable()
            })
            .catch((err) => {
                alert('Não foi possível inserir o produto')
            })
        }

    }

    limparFormulario() {
        this.elId.value = ""
        this.elNome.value = ""
        this.elPreco.value = ""
        this.elDescricao.value = ""
    }

    lerDadosFormulario() {
        let id = parseInt(this.elId.value) || null
        let nome = this.elNome.value
        let preco = this.elPreco.value
        let descricao = this.elDescricao.value

        return new Produto(id, nome, preco, descricao)
    }

    limparTable() {
        //Remover todo os elementos do body 
        for(let index = this.elTable.childElementCount - 1; index > -1; index--) {
            const row = this.elTable.children[index]
            row.remove()
        }
    }

    atualizarTable() {
        this.repositorio.buscarTodos()
        .then((produtos) => {
            this.limparTable()
            produtos.forEach(this.inserirLinhaTable)
        })
        .catch((err) => {
            console.log(err);
            alert("Não foi possível carregar os novos dados da Lista!")
        })
    }

    inserirLinhaTable(produto) {
        const tr = document.createElement('tr')

        const tdCodigo = document.createElement('td')
        tdCodigo.innerText = produto.id

        const tdNome = document.createElement('td')
        tdNome.innerText = produto.nome

        const tdPreco = document.createElement('td')
        tdPreco.innerText = produto.preco

        const tdDescricao = document.createElement('td')
        tdDescricao.innerText = produto.descricao

        const tdAcoes = document.createElement('td')
        const btnEdit = document.createElement('button')
        btnEdit.innerText = 'Editar'
        btnEdit.addEventListener('click', this.onEditHandler)
        btnEdit.setAttribute('data-id', produto.id)
        btnEdit.classList.toggle('btn-edit')
        tdAcoes.appendChild(btnEdit)

        const btnDelete = document.createElement('button')
        btnDelete.innerText = 'Remover'
        btnDelete.addEventListener('click', this.onRemoveHandler)
        btnDelete.setAttribute('data-id', produto.id)
        btnDelete.classList.toggle('btn-delete')
        tdAcoes.appendChild(btnDelete)

        tr.appendChild(tdCodigo)
        tr.appendChild(tdNome)
        tr.appendChild(tdPreco)
        tr.appendChild(tdDescricao)
        tr.appendChild(tdAcoes)

        this.elTable.appendChild(tr)
    }

    onEditHandler(event) {
        const id = event.target.getAttribute('data-id')
        this.repositorio.buscarPorId(id)
        .then((produto) => {
            this.elId.value = produto.id
            this.elNome.value = produto.nome
            this.elPreco.value = produto.preco
            this.elDescricao.value = produto.descricao
        })
        .catch((err) => {
            alert('Não foi possível carregar os dados do produto selecionado')
        })
        
    }

    onRemoveHandler(event) {
        const remove = window.confirm('Deseja realmente remover o produto da lista?')
        if(remove) {
            const id = event.target.getAttribute('data-id')
            this.repositorio.remove(id)
            .then(() => {
                this.atualizarTable()
                this.limparFormulario()
                alert('Produto removido com sucesso')
            })
            .catch((err) => {
                alert('Não foi possível remover o produto selecionado')
            })
        }
    }

}