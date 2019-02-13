import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Start Page</h1>} />
    <Route path="/profile" component={() => (<h1>Hello</h1>)} />
    <Route path="/logout" component={() => (<h2>Buy</h2>)} />
  </Switch>
)

export default Routes
