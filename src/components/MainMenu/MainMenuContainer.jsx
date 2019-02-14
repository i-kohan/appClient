import React from 'react'
import PropTypes from 'prop-types'
import MainMenu from './MainMenu'
import { withQuery } from '../../graphql/hocs'
import { menuItems } from '../../graphql/queries'


const MainMenuContainer = ({ isMenuOpen, handleMenuClose, data }) => (
  <MainMenu
    menuItems={data.menuItems}
    isMenuOpen={isMenuOpen}
    handleMenuClose={handleMenuClose}
  />
)

MainMenuContainer.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withQuery({ query: menuItems })(MainMenuContainer)
