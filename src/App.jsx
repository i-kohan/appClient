import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Route, Redirect, withRouter, Router } from 'react-router-dom'
import { compose } from 'recompose'
import { AppBar } from './components'
import { withQuery } from './graphql/hocs'
import { currentUserQuery } from './graphql/queries'
import {
  LoginPage,
  MainPage,
  AppAuthenticated,
  AppNotAuthenticated
} from './pages'

const styles = theme => ({
  root: {
    width: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 12,
  },
})

const App = ({ classes, data: { currentUser }, loading }) => {
  if (loading) {
    return null
  }
  return (
    <div className={classes.root}>
      {currentUser ? (
        <AppAuthenticated />
      ) : (
        <AppNotAuthenticated />
      )}
    </div>
  )
}

// <AppBar isLoggedIn={!!currentUser} />
// <main className={classes.content}>
//   <Routes isLoggedIn={!!currentUser} />
// </main>

App.propTypes = {
  data: PropTypes.shape({
    currentUser: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}


export default compose(
  withQuery({ query: currentUserQuery }),
  withStyles(styles),
)(App)
