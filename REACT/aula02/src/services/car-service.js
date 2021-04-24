class CarService {
  constructor() {
    this.cars = []
    this.nextId = 2 

    this.findAll = this.findAll.bind(this)
    this.findById = this.findById.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
  }

  async findAll() {
    return Promise.resolve(this.cars)
  }

  async findById(id) {
    const record = this.cars.find((element) => element.id === id)

    if(record) {
      return Promise.resolve(record)
    }else {
      return Promise.reject({status:404, data:{message:"Contato não encontrado"}})
    }
  }

  async insert(record) {
    if(record) {
      const car = {...record}
      car.id = this.nextId++
      this.cars.push(car)

      return Promise.resolve(car)
    }  
    return Promise.reject({status:412, data:{message:"Não foi possível cadastrar o carro"}})
  }

  async update(record) {
    let updated = false 
    this.cars = this.cars.map(element => {
      if(element.id === record.id) {
        updated = true
        return record
      }

      return element
    })

    if(updated) {
      return Promise.resolve(updated)
    }
    return Promise.reject({status:412, data:{message:"Não foi possível atualizar o carro"}})
  }

  async remove(id) {
    let removed = false
    this.cars = this.cars.filter(element => {
      if(element.id !== id) {
        return true
      }

      removed = true
      return false
    })

    if(removed) {
      return Promise.resolve(removed)
    }
    return Promise.reject({status:412, data:{message:'Não foi possível remover o carro'}})
  }
}

export const service = new CarService()