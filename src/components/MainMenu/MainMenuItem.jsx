import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core'

const MainMenuItem = ({
  menuItem: {
    id,
    path,
    title,
    iconName,
  },
  location: {
    pathname,
  },
  history,
}) => (
  <ListItem
    button
    key={id}
    onClick={() => history.push(path)}
    selected={pathname === path}
  >
    <ListItemIcon>
      <Icon>{iconName}</Icon>
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
)

MainMenuItem.propTypes = {
  menuItem: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withRouter(MainMenuItem)
