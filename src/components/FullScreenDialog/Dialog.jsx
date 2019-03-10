import React from 'react'
import PropTypes from 'prop-types'
import {
  Dialog as DialogMaterial,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Slide,
  withStyles,
} from '@material-ui/core'
import {
  Close as CloseIcon,
} from '@material-ui/icons'

const Transition = props => (
  <Slide direction="up" {...props} />
)

const styles = () => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
})

const Dialog = ({
  isDialogOpened,
  toggleDialog,
  classes,
  renderContent
}) => (
  <DialogMaterial
    fullScreen
    open={isDialogOpened}
    onClose={() => toggleDialog(false)}
    TransitionComponent={Transition}
  >
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" onClick={() => toggleDialog(false)} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          Sound
        </Typography>
        <Button color="inherit" onClick={() => toggleDialog(false)}>
          save
        </Button>
      </Toolbar>
    </AppBar>
    {renderContent()}
  </DialogMaterial>
)

Dialog.defaultProps = {
  isDialogOpened: false,
}

Dialog.propTypes = {
  isDialogOpened: PropTypes.bool,
  toggleDialog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(Dialog)
