import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  AppBar as AppBarMaterial,
  Toolbar,
  IconButton,
  CssBaseline,
  withStyles,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { MainMenu } from '../MainMenu'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
})

const AppBar = ({
  classes,
  isMenuOpen,
  handleMenuClose,
  handleMenuToggle,
}) => (
  <div className={classes.root}>
    <CssBaseline />
    <AppBarMaterial
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isMenuOpen,
      })}
    >
      <Toolbar disableGutters={!isMenuOpen}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleMenuToggle}
          className={classNames(classes.menuButton, {
            [classes.hide]: isMenuOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBarMaterial>
    <MainMenu
      isMenuOpen={isMenuOpen}
      handleMenuClose={handleMenuClose}
    />
  </div>
)


AppBar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
}

export default withStyles(styles)(AppBar)
