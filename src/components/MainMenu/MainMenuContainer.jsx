import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import MainMenu from './MainMenu'
import { menuItems } from '../../graphql/queries'


const MainMenuContainer = ({ isMenuOpen, handleMenuClose }) => (
  <Query query={menuItems}>
    {({ loading, data }) => (
      <MainMenu
        loading={loading}
        menuItems={data.menuItems}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    )}
  </Query>
)

MainMenuContainer.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
}

export default MainMenuContainer
