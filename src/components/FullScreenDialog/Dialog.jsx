import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
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
import { buildInputs } from '../Inputs'

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

const renderContent = (fields, loading) => {
  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validate={(values) => {
        const errors = {}
        if (!values.name) {
          errors.name = 'Required'
        }
        if (!values.description) {
          errors.description = 'Required'
        }
        return errors
      }}
    >
      {props => (
        <Form>
          {!loading && buildInputs({ fields, ...props })}
        </Form>
      )}
    </Formik>
  )
}

const Dialog = ({
  isOpen,
  closeDialog,
  classes,
  data: { fields },
  loading,
}) => (
  <DialogMaterial
    fullScreen
    open={isOpen}
    onClose={closeDialog}
    TransitionComponent={Transition}
  >
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" onClick={closeDialog} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          Sound
        </Typography>
        <Button color="inherit" onClick={closeDialog}>
          save
        </Button>
      </Toolbar>
    </AppBar>
    {renderContent(fields, loading)}
  </DialogMaterial>
)


Dialog.defaultProps = {
  isOpen: false,
}

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  closeDialog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(Dialog)
