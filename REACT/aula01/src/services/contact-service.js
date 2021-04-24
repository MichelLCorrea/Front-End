class ContactService {
  constructor() {
    this.contacts = [
      {
        id: 1,
        name: 'Michel',
        email: 'michel@gmail.com',
        phone: 33007070 
      }
    ]
    this.nextId = 2

    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
  }

  async findAll() {
    return Promise.resolve(this.contacts)
  }

  async findById(id) {
    const record = this.contacts.find((element) => element.id === id)
    
    if(record) {
      return Promise.resolve(record)
    } else {
      return Promise.reject({status:404, data:{message: "Contato não encontrado"}})
    }
  }

  async insert(record) {
    if(record) {
      const contact = {...record}
      contact.id = this.nextId++
      this.contacts.push(contact)

      return Promise.resolve(contact)
    }

    return Promise.reject({status:412, data:{message:"Não foi possível cadastrar o novo contato"}})
  }

  async update(record) {
    let updated = false
    this.contacts = this.contacts.map(element => {
      if(element.id === record.id) {
        updated = true
        return record
      }

      return element
    })

    if(updated) {
      return Promise.resolve(updated)
    }
    return Promise.reject({status: 412, data:{message:"Não foi possível atualizar o contato"}})
  }

  async remove(id) {
    let removed = false
    this.contacts = this.contacts.filter(element => {
      if(element.id !== id) {
        return true
      }
      removed = true
      return false
    })

    if(removed) {
      return Promise.resolve(removed)
    }
    return Promise.reject({status:412, data:{message:"Não foi possível remover o contato"}})
  }
}

export const service = new ContactService()