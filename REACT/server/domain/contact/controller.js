class ContactController {
  constructor(repository) {
    this.repository = repository

    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
  }

  findAll(request, response) {
    const records = this.repository.findAll()
    response.json(records)
  }

  findById(request, response) {
    const id = request.params.id
    const record = this.repository.findById(parseInt(id))

    if(record) {
      response.json(record)
    } else {
      response.status(404).json({message:"Registro não encontrado"})
    }
  }

  insert(request, response) {
    const { avatar, name, email, phone } = request.body
    const record = this.repository.insert({name,avatar,email,phone})
    if(record) {
      response.status(201).json(record)
    } else {
      response.status(412).json({message:"Não foi possível cadastrar o contato"})
    }
  }

  update(request,response) {
    const { avatar, name, email, phone } = request.body
    const id = parseInt(resquest.params.id)
    const record = this.repository.update({id, name, avatar, email, phone})
    if(record) {
      response.status(204).json({message:"Registro atualizado com sucesso!!!"})
    } else {
      response.status(412).json({message:"Não foi possível atualizar o contato"})
    }
  }

  remove(request, response) {
    const id = parseInt(request.params.id)
    const removed = this.repository.remove(id)

    if(removed) {
      response.status(204).json({message:"Registro removido com sucesso"})
    } else {
      response.status(412).json({message:"Não foi possível remover o contato"})
    }
  }
}

module.exports = ContactController;