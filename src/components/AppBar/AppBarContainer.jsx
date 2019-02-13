import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  withState,
  withHandlers,
} from 'recompose'
import AppBar from './AppBar'

const AppBarContainer = ({
  isMenuOpen,
  handleMenuClose,
  handleMenuToggle,
}) => (
  <AppBar
    isMenuOpen={isMenuOpen}
    handleMenuClose={handleMenuClose}
    handleMenuToggle={handleMenuToggle}
  />
)

AppBarContainer.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
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
)(AppBarContainer)
