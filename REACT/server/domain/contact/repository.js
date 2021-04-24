class ContactRepository {
  constructor() {
    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    
    this.nextID = 11
    this.contacts = [
      {
        id:1,
        avatar: 'img1.png',
        name: 'Lucas Silva',
        email: 'lukinhas@gmail.com',
        phone: '33860385'
      }
    ]
  }

  findAll() {
    return [...this.contacts]
  }

  findById(id) {
    const record = this.contacts.find((element) => element.id === id)
    return record != null ? {...record}: null
    }

    insert(contact) {
      if(contact) {
        const record = {...contact}
        record.id = this.nextID++
        this.contacts.push(record)
        return record
      }
      return null
    }

    update(contact) {
      if(contact) {
        this.contacts = this.contacts.map(element => {
          return element.id === contact.id ? {...contact} : element
        })
        return true
      }
      return false
    }

    remove(id) {
      let removed = false
      this.contacts = this.contacts.filter(element => {
        if(element.id === id) {
          removed = true
          return false
        }
        return true
      })
      return removed
    }

  }

module.exports = new ContactRepository()