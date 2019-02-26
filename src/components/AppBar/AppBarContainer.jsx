import React from 'react'
import PropTypes from 'prop-types'
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


const AppBarContainer = ({
  isMenuOpen,
  handleMenuClose,
  handleMenuToggle,
  handleLogout,
  loading,
  data,
}) => (
  <AppBar
    data={data}
    loading={loading}
    isMenuOpen={isMenuOpen}
    handleMenuClose={handleMenuClose}
    handleMenuToggle={handleMenuToggle}
    handleLogout={handleLogout}
  />
)

AppBarContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  data: PropTypes.shape({
    menuItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
      __typename: PropTypes.string.isRequired,
    })),
  }).isRequired,
}

export default compose(
  withQuery({ query: menuItems }),
  withState('isMenuOpen', 'toggleMenu', false),
  withProps(props => ({
    handleLogout: () => {
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
)(AppBarContainer)
