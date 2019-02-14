import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ClickAwayListener,
  withStyles,
} from '@material-ui/core'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons'
import MainMenuItem from './MainMenuItem'

const drawerWidth = 240

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
})

const buildMenuItems = menuItem => (
  <MainMenuItem key={menuItem.id} menuItem={menuItem} />
)

const MainMenu = ({
  classes,
  theme,
  isMenuOpen,
  handleMenuClose,
  menuItems,
}) => (
  <ClickAwayListener onClickAway={handleMenuClose}>
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isMenuOpen,
        [classes.drawerClose]: !isMenuOpen,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isMenuOpen,
          [classes.drawerClose]: !isMenuOpen,
        }),
      }}
      open={isMenuOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleMenuClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map(buildMenuItems)}
      </List>
    </Drawer>
  </ClickAwayListener>
)

MainMenu.defaultProps = {
  menuItems: [],
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    __typename: PropTypes.string.isRequired,
  })),
}

export default withStyles(styles, { withTheme: true })(MainMenu)
