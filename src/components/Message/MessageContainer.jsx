import React from 'react'
import { withStateHandlers } from 'recompose'
import PropTypes from 'prop-types'
import Message from './Message'

const MessageContainer = ({
  isOpen,
  handleClose,
  message,
  variant,
  className,
}) => (
  <Message
    isOpen={isOpen}
    onClose={handleClose}
    message={message}
    variant={variant}
    className={className}
  />
)

MessageContainer.defaultProps = {
  className: '',
  message: '',
}

MessageContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
}

export default withStateHandlers(
  ({ isOpen = false }) => ({ isOpen }),
  { handleClose: () => () => ({ isOpen: false }) },
)(MessageContainer)
