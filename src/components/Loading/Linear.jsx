import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  LinearProgress,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

const Linear = ({
  classes,
  className,
  variant,
  ...props
}) => (
  <LinearProgress
    className={classNames(classes.progress, className)}
    variant={variant}
    {...props}
  />
)

Linear.defaultProps = {
  variant: 'query',
}

Linear.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default withStyles(styles)(Linear)
