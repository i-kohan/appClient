import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { AppBar } from './components'
import Routes from './router/routes'

const styles = () => ({
  root: {
    width: '100%',
  },
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <AppBar />
    <Routes />
  </div>
)

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}


export default withStyles(styles)(App)
