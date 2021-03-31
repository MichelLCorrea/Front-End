class FormularioContato {
    
    constructor(repositorio) {
        this.repositorio = repositorio
        this.elId = document.querySelector('input[name="id"]')
        this.elNome = document.querySelector('input[name="nome"]')
        this.elEmail = document.querySelector('input[name="email"]')
        this.elTelefone = document.querySelector('input[name="telefone"]')
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

    //Terceira
    onSalvarHandler(event) {
        event.preventDefault()

        const contato = this.lerDadosFormulario()

        if(contato.id){
            this.repositorio.update(contato)
            .then((resultado) => {
                alert('Contato atualizado com sucesso')
                this.limparFormulario()
                this.atualizarTable()
            })
            .catch((err) => {
                alert('Ocorreu um erro ao atualizar os dados do contato')
            })
        }else {
            this.repositorio.insert(contato)
            .then((resultado) => {
                alert('Contato inserido com sucesso')
                this.limparFormulario()
                this.atualizarTable()
            })
            .catch((err) => {
                alert('Não foi possível inserir o contato')
            })
        }

    }

    //Segunda
    limparFormulario() {
        this.elId.value = ""
        this.elNome.value = ""
        this.elEmail.value = ""
        this.elTelefone.value = ""
    }

    //Primeira
    lerDadosFormulario() {
        let id = parseInt(this.elId.value) || null
        let nome = this.elNome.value
        let email = this.elEmail.value
        let telefone = this.elTelefone.value

        return new Contato(id, nome, email, telefone)
    }

    //Setima
    limparTable() {
        //Remover todo os elementos do body 
        for(let index = this.elTable.childElementCount - 1; index > -1; index--) {
            const row = this.elTable.children[index]
            row.remove()
        }
    }

    //Oitava
    atualizarTable() {
        this.repositorio.buscarTodos()
        .then((contatos) => {
            this.limparTable()
            contatos.forEach(this.inserirLinhaTable)
        })
        .catch((err) => {
            alert("Não foi possível carregar os novos dados da tabela!")
        })
    }

    //Quarta
    inserirLinhaTable(contato) {
        const tr = document.createElement('tr')

        const tdCodigo = document.createElement('td')
        tdCodigo.innerText = contato.id

        const tdNome = document.createElement('td')
        tdNome.innerText = contato.nome

        const tdEmail = document.createElement('td')
        tdEmail.innerText = contato.email

        const tdTelefone = document.createElement('td')
        tdTelefone.innerText = contato.telefone

        const tdAcoes = document.createElement('td')
        const btnEdit = document.createElement('button')
        btnEdit.innerText = 'Editar'
        btnEdit.addEventListener('click', this.onEditHandler)
        btnEdit.setAttribute('data-id', contato.id)
        tdAcoes.appendChild(btnEdit)

        const btnDelete = document.createElement('button')
        btnDelete.innerText = 'remover'
        btnDelete.addEventListener('click', this.onRemoveHandler)
        btnDelete.setAttribute('data-id', contato.id)
        tdAcoes.appendChild(btnDelete)

        tr.appendChild(tdCodigo)
        tr.appendChild(tdNome)
        tr.appendChild(tdEmail)
        tr.appendChild(tdTelefone)
        tr.appendChild(tdAcoes)

        this.elTable.appendChild(tr)
    }

    //Quinta
    onEditHandler(event) {
        const id = event.target.getAttribute('data-id')
        this.repositorio.buscarPorId(id)
        .then((contato) => {
            this.elId.value = contato.id
            this.elNome.value = contato.nome
            this.elEmail.value = contato.email
            this.elTelefone.value = contato.telefone
        })
        .catch((err) => {
            alert('Não foi possível carregar os dados do contato selecionado')
        })
        
    }

    //Sexta
    onRemoveHandler(event) {
        const remove = window.confirm('Deseja realmente remover o contato?')
        if(remove) {
            const id = event.target.getAttribute('data-id')
            this.repositorio.remove(id)
            .then(() => {
                this.atualizarTable()
                this.limparFormulario()
                alert('Contato removido com sucesso')
            })
            .catch((err) => {
                alert('Não foi possível remover o contato selecionado')
            })
        }
    }

}