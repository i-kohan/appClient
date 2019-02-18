import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { AppBar } from './components'
import { withQuery } from './graphql/hocs'
import { currentUserQuery } from './graphql/queries'
import Routes from './router/Routes'

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
      <AppBar isLoggedIn={!!currentUser} />
      <main className={classes.content}>
        <Routes isLoggedIn={!!currentUser} />
      </main>
    </div>
  )
}

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
