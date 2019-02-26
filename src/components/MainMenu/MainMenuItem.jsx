import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  marginLeft: {
    marginLeft: theme.spacing.unit,
  },
})

const MainMenuItem = ({
  menuItem: {
    path,
    iconName,
    title,
  },
  location: {
    pathname,
  },
  history,
  classes,
}) => (
  <ListItem
    button
    onClick={() => history.push(path)}
    selected={pathname === path}
  >
    <ListItemIcon className={classes.marginLeft}>
      <Icon>{iconName}</Icon>
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
)

MainMenuItem.propTypes = {
  menuItem: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    __typename: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withStyles(styles)(withRouter(MainMenuItem))
