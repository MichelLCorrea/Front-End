import {types} from './contacts.types'

const INITIAL_STATE = {
  loading: false,
  contacts: [],
  currentContact: {
    id: "",
    name: "",
    email: "",
    phone: ""
  }
}

export function contactReducer(state=INITIAL_STATE, action) {
  
  switch(action.type) {
    case types.FETCH_RECORDS:
      return startLoading(state)
      
    case types.LOAD_RECORDS_SUCCESS:
      return stopLoading(state)
    
    case types.LOAD_RECORDS_FAIL:
      return stopLoading(state)

    case types.SET_RECORDS:
      return setRecords(state)

    case types.FETCH_RECORD:
      return types.startLoading(state)

    case types.LOAD_RECORD_SUCCESS:
      return types.stopLoading(state)

    case types.LOAD_RECORD_FAIL:
      return types.stopLoading(state)

    case types.SET_RECORD:
      return setRecord(state, action)

    case types.SET_FIELD:
      return types.setField(state, action)

  }

  return state  
}

function startLoading(state) {
  return {...state, loading: true}
}

function stopLoading(state) {
  return {...state, loading: false}
}

function setRecords(state, action) {
  const records = action.payload.records || []

  return {...state, contacts: records}
}

function setRecord(state, action) {
  const record = action.payload.record

  return {...state, currentContact: record}
}

function setField(state, action) {
  const field = action.payload.field
  const value = action.payload.value
  const currentContact = {...state.currentContact, [field]: value}

  return {...state, currentContact}
}
