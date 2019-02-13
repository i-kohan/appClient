import React from 'react'
import PropTypes from 'prop-types'
import MainMenu from './MainMenu'

const MainMenuContainer = ({ isMenuOpen, handleMenuClose }) => (
  <MainMenu
    isMenuOpen={isMenuOpen}
    handleMenuClose={handleMenuClose}
  />
)

MainMenuContainer.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
}

export default MainMenuContainer
