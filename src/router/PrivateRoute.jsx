import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => isLoggedIn
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    }
  />
)

PrivateRoute.defaultProps = {
  isLoggedIn: false,
}

PrivateRoute.propTypes = {
  Component: PropTypes.instanceOf(Element).isRequired,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.object, // eslint-disable-line
}

export default PrivateRoute
