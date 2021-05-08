import { applyMiddleware ,combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { productReducer } from '../pages/products/products.reducer'

import { contactReducer } from '../pages/contact/contacts.reducer'

const reducers = combineReducers({
  productsState:productReducer,
  contactsState: contactReducer
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default store