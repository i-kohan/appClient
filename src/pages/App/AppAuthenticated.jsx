import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { AppBar } from '../../components'
import { PrivateRoutes } from '../../router'

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 12,
  },
})

const AppAuthenticated = ({ classes }) => (
  <>
    <AppBar />
    <main className={classes.content}>
      <PrivateRoutes />
    </main>
  </>
)

AppAuthenticated.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(AppAuthenticated)
