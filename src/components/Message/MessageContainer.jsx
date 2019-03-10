import { withStateHandlers } from 'recompose'
import Message from './Message'

export default withStateHandlers(
  ({ isOpen = false }) => ({ isOpen }),
  { handleClose: () => () => ({ isOpen: false }) },
)(Message)
