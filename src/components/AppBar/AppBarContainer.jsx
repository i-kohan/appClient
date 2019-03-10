import {
  compose,
  withState,
  withHandlers,
  withProps,
} from 'recompose'
import {
  withQuery,
} from '../../graphql/hocs'
import { menuItems, currentUserQuery } from '../../graphql/queries'
import AppBar from './AppBar'

export default compose(
  withQuery({ query: menuItems }),
  withState('isMenuOpen', 'toggleMenu', false),
  withProps(props => ({
    handleLogout: () => {
      localStorage.removeItem('token')
      props.client.writeQuery({
        query: currentUserQuery,
        data: {
          currentUser: null,
        },
      })
    },
  })),
  withHandlers({
    handleMenuClose: props => () => {
      props.toggleMenu(false)
    },
    handleMenuToggle: props => () => {
      props.toggleMenu(!props.isMenuOpen)
    },
  }),
)(AppBar)
