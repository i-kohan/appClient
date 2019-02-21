import React from 'react'
import { Switch, Route } from 'react-router-dom'

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>After Login Page</h1>} />
    <Route path="/home" component={() => <h1>home</h1>} />
  </Switch>
)

export default PrivateRoutes
