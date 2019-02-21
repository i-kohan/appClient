import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages'

const PublicRoutes = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
  </Switch>
)

export default PublicRoutes
