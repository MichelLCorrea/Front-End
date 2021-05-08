import {types} from './products.types'

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    payLoad: {
      product
    }
  }
}

export function clearCurrentProduct() {
  return {
    type: types.CLEAR_CURRENT_RECORD,
    payLoad: {}
  }
}

export function setField(field, value) {
  return {
    type: types.SET_FIELD,
    payLoad: {
      field,
      value
    }
  }
}
