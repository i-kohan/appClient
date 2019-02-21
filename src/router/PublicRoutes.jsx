import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../pages'

const PublicRoutes = () => (
  <Switch>
    <Route path="/login" exact Component={LoginPage} />
    <Route path="/signUp" Component={() => (<h1>Hello</h1>)} />
    <Route path="/hello" Component={() => (<h2>Buy</h2>)} />
  </Switch>
)

export default PublicRoutes