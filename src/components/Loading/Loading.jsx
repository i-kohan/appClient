import React from 'react'
import PropTypes from 'prop-types'
import {
  CircularProgress,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

const Loading = ({ classes }) => (
  <CircularProgress className={classes.progress} />
)

Loading.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withStyles(styles)(Loading)
