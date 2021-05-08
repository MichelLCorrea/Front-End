import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import history from '../history'
import ContactListPage from '../pages/contact/list/ContactListPage'

export const AppRouter = (props) => (
  <Router history={history}>
    <Switch>
      <Route path="/contacts" exact component={ContactListPage}></Route>
    </Switch>
  </Router>
)


// ROUTER - É o container que vai fazer a navegação das páginas
// SWITCH - É um container que vai ficar por volta das rotas da aplicação
// ROUTE - São as rotas da aplicação