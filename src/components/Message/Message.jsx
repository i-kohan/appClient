import React from 'react'
import PropTypes from 'prop-types'
import {
  Snackbar,
  withStyles,
} from '@material-ui/core'
import MessageContent from './MessageContent'

const styles = theme => ({
  snackbar: {
    marginTop: theme.spacing.unit * 3,
  },
})

const Message = ({
  isOpen,
  onClose,
  message,
  variant,
  className,
  classes,
}) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={isOpen}
    autoHideDuration={6000}
    onClose={onClose}
    className={classes.snackbar}
  >
    <MessageContent
      onClose={onClose}
      message={message}
      variant={variant}
      className={className}
    />
  </Snackbar>
)

Message.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
}

export default withStyles(styles)(Message)
