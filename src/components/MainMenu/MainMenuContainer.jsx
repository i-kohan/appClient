import React from 'react'
import PropTypes from 'prop-types'
import MainMenu from './MainMenu'
// import { withQuery } from '../../graphql/hocs'
// import { menuItems } from '../../graphql/queries'


const MainMenuContainer = ({ isMenuOpen, handleMenuClose, menuItems }) => (
  <MainMenu
    menuItems={menuItems}
    isMenuOpen={isMenuOpen}
    handleMenuClose={handleMenuClose}
  />
)

MainMenuContainer.defaultProps = {
  menuItems: [],
}

MainMenuContainer.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    __typename: PropTypes.string.isRequired,
  })), // eslint-disable-line react/forbid-prop-types
}

export default MainMenuContainer
