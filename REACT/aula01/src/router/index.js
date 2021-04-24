import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import history from '../history'

import {ContactsListPage} from '../pages/contacts/list/ContactsListPage'
import {ContactFormPage} from '../pages/contacts/form/ContactFormPage'

import { ContactListPage2 } from '../pages/contacts2/list/ContactListPage2'

export const AppRouter = (props) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={ContactsListPage}></Route>
      <Route path="/form/:id" exact component={ContactFormPage}></Route>
      <Route path="/contacts" exact component={ContactListPage2}></Route>
    </Switch>
  </Router>
)


// ROUTER - É o container que vai fazer a navegação das páginas
// SWITCH - É um container que vai ficar por volta das rotas da aplicação
// ROUTE - São as rotas da aplicação