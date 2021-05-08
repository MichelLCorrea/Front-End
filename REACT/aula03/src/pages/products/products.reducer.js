import {types} from './products.types'

const INITIAL_STATE = {
  currentProduct: {
    name: "",
    price: ""
  },
  products: []
}

export function productReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case types.ADD_PRODUCT: 
      return addProduct(state, action)

    case types.CLEAR_CURRENT_RECORD:
      return clearCurrentProduct(state, action)

    case types.SET_FIELD:
      return updateCurrentProduct(state, action)
  }

  return state
}

function addProduct(state, action) {
  const product = {...action.payLoad.product}
  const products = [...state.products, product]

  return {...state, products}
}

function clearCurrentProduct(state, action) {
  const currentProduct = {
    name: "",
    price: ""
  }

  return {...state, currentProduct}
}

function updateCurrentProduct(state, action) {
  const field = action.payLoad.field
  const value = action.payLoad.value
  const currentProduct = {...state.currentProduct, [field]:value}

  return {...state, currentProduct}
}