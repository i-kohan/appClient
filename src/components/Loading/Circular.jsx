import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  CircularProgress,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

const Circular = ({
  classes,
  className,
  variant,
  ...props
}) => (
  <CircularProgress
    className={classNames(classes.progress, className)}
    variant={variant}
    {...props}
  />
)

Circular.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default withStyles(styles)(Circular)
