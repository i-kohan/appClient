import React from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Routes = ({ isLoggedIn }) => (
  <Switch>
    <PrivateRoute exact path="/" isLoggedIn={isLoggedIn} Component={() => <h1>Start Page</h1>} />
    <PrivateRoute path="/trainingDay" isLoggedIn={isLoggedIn} Component={() => (<h1>Hello</h1>)} />
    <PrivateRoute path="/hello" isLoggedIn={isLoggedIn} Component={() => (<h2>Buy</h2>)} />
  </Switch>
)

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default Routes
