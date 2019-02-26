import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from '../pages'

const PublicRoutes = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Route render={() => <Redirect to="/login" />} />
  </Switch>
)

export default PublicRoutes
