 import {types} from './clients.type'

const INITIAL_STATE = {
  currentClient: {
    name: "",
    cpf: "",
    endereco: {
      rua: "",
      numero: "",
      bairro: "",
      cidade: ""
    }
  },
  clients: []
}

export function clientReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case types.ADD_CLIENT:
      return addClient(state, action)

    case types.CLEAR_CURRENT_RECORD:
      return clearCurrentClient(state, action)

    case types.SET_FIELD:
      return updateCurrentClient(state, action)  
  } 

  return state
}

export function addClient(state, action) {
  const client = {...action.payLoad.client}
  const clients = [...state.clients, client]

  return {...state, clients}
}

export function clearCurrentClient(state, action) {
  const currentClient = {
    name: "",
    cpf: "",
    endereco: {
      rua: "",
      numero: "",
      bairro: "",
      cidade: ""
  }
}

  return {...state, currentClient}
}

export function updateCurrentClient(state, action) {
  const field = action.payLoad.field
  const value = action.payLoad.value
  const currentClient = {...state.currentClient}
  let target = currentClient

  let data = field.split('.')

  for(let index = 0; index < data.length-1; index++) {
    let key = data[index]
    target = currentClient[key] 
  }
  target[data[data.length-1]] = value
  
  return {...state, currentClient}
}