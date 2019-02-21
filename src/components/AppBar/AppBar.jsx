import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'
import {
  AppBar as AppBarMaterialUI,
  Toolbar,
  IconButton,
  CssBaseline,
  Button,
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
  progress: {
    flexGrow: 1,
    marginTop: '70px !important',
  },
  loginButton: {
    marginLeft: 'auto',
    marginRight: 30,
  },
})

const AppBar = ({
  history,
  classes,
  isMenuOpen,
  handleMenuClose,
  handleMenuToggle,
  loading,
  data,
}) => (
  <div className={classes.root}>
    <CssBaseline />
    <AppBarMaterialUI
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isMenuOpen,
      })}
    >
      <Toolbar disableGutters={!isMenuOpen}>
        <IconButton
          disabled={loading}
          color="inherit"
          aria-label="Open drawer"
          onClick={handleMenuToggle}
          className={classNames(classes.menuButton, {
            [classes.hide]: isMenuOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Button
          onClick={() => history.push('/logout')}
          color="secondary"
          className={classes.loginButton}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBarMaterialUI>
    <MainMenu
      menuItems={data.menuItems}
      isMenuOpen={isMenuOpen}
      handleMenuClose={handleMenuClose}
    />
  </div>
)


AppBar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
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

export default withStyles(styles)(withRouter(AppBar))
