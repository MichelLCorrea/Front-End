import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import history from '../history'

import {CarsListPage} from '../pages/cars/list/CarsListPage'
import {CarFormPage} from '../pages/cars/form/CarFormPage'

export const AppRouter = (props) => {
  return(
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={CarsListPage}></Route>
      <Route path="/form/:id" exact component={CarFormPage}></Route>
    </Switch>
  </Router>
  )
}