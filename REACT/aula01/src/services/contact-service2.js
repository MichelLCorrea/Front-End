class ContactService2 {
  constructor() {

    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
  }

  async findAll() {
    const response = await fetch('/api/contacts')
    return response.json()
  }

  async findById(id) {
    try{
      const response = await fetch('/api/contacts/'+id)
      if(response && response.status === 200) {
        return response.json()
      }
    } catch(err) {
      return null
    }
    return null
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

export const service = new ContactService2()