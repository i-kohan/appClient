import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  withState,
  withHandlers,
} from 'recompose'
import { withQuery } from '../../graphql/hocs'
import { menuItems } from '../../graphql/queries'
import AppBar from './AppBar'

const AppBarContainer = ({
  isMenuOpen,
  handleMenuClose,
  handleMenuToggle,
  loading,
  data,
}) => (
  <AppBar
    data={data}
    loading={loading}
    isMenuOpen={isMenuOpen}
    handleMenuClose={handleMenuClose}
    handleMenuToggle={handleMenuToggle}
  />
)

AppBarContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
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
  withState('isMenuOpen', 'toggleMenu', false),
  withHandlers({
    handleMenuClose: props => () => {
      props.toggleMenu(false)
    },
    handleMenuToggle: props => () => {
      props.toggleMenu(!props.isMenuOpen)
    },
  }),
  withQuery({ query: menuItems }),
)(AppBarContainer)
