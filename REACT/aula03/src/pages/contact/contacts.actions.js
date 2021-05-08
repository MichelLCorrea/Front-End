import {types} from './contacts.types'

export function loadRecords() {
  return (dispatch) => {
    dispatch(fetchRecords())
    fetch('/api/contacts')
    .then(response => {
      return response.json()
    })
    .then((data) => {
      dispatch(fetchRecordsSuccess())
      dispatch(setRecords(data))
    })
    .catch(err => {
      dispatch(fetchRecordsFail())
    })
  }
}

export function loadRecord(id) {
  return (dispatch) => {
    dispatch(fetchRecord())
    fetch('/api/contacts/'+id)
    .then(response => {
      return response.json()
    })
    .then((data) => {
      dispatch(fetchRecordSuccess())
      dispatch(setRecord(data))
    })
    .catch(err => {
      dispatch(fetchRecordFail())
    })
  }
}

export function insert(record) {
  return (dispatch) => {
    dispatch(fetchRecord())
    fetch('/api/contacts', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(record)
    })
    .then(response => {
      return response.json()
    })
    .then((data) => {
      dispatch(fetchRecordSuccess())
      alert('Contato inserido com sucesso!')
    })
    .catch(err => {
      dispatch(fetchRecordFail())
      alert('Não foi possível inserir o contato!')
    })
  }
}

export function update(record) {
  return (dispatch) => {
    dispatch(fetchRecord())
    fetch('/api/contacts/'+record.id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(record)
    })
    .then(response => {
      return response.json()
    })
    .then((data) => {
      dispatch(fetchRecordSuccess())
      alert('Contato atualizado com sucesso!')
    })
    .catch(err => {
      dispatch(fetchRecordFail())
      alert('Não foi possível atualizar o contato!')
    })
  }
}

export function fetchRecords() {
  return {
    type: types.FETCH_RECORDS,
    payload: {}
  }
}

export function fetchRecordsSuccess() {
  return {
    type: types.LOAD_RECORDS_SUCCESS,
    payload: {}
  }
}

export function fetchRecordsFail() {
  return {
    type: types.LOAD_RECORDS_FAIL,
    payload: {}
  }
}

export function setRecords() {
  return {
    type: types.SET_RECORDS,
    payload: {records}
  }
}


export function fetchRecord() {
  return {
    type: types.FETCH_RECORD,
    payload: {}
  }
}

export function fetchRecordSuccess() {
  return {
    type: types.LOAD_RECORD_SUCCESS,
    payload: {}
  }
}

export function fetchRecordFail() {
  return {
    type: types.LOAD_RECORD_FAIL,
    payload: {}
  }
}

export function setRecord() {
  return {
    type: types.SET_RECORD,
    payload: {record}
  }
}

export function setField(field, value) {
  return {
    type: types.SET_FIELD,
    payload: { field ,value }
  }
}