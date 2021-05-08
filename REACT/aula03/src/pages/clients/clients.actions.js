import {types} from './clients.type'

export function addClient(client) {
  return {
    type: types.ADD_CLIENT,
    payLoad: {
      client
    }
  }
}

export function clearCurrentClient() {
  return {
    type: types.CLEAR_CURRENT_RECORD,
    payLoad: {}
  }
}

export function setField(field, value) {
  return {
    type: types.SET_FIELD,
    payLoad: {
      field, value
    }
  }
}