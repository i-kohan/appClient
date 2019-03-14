import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import {
  Dialog,
  Stepper,
} from '../../components'

const CreateExerciseDialog = ({
  handleCreateExercise,
  isDialogOpened,
  toggleDialog,
}) => {
  const [state, setState] = useState({
    name: '',
    description: '',
  })

  const handleFinish = () => {
    handleCreateExercise(state.name, state.description)
    toggleDialog(false)
  }

  const handleChange = fieldName => ({ target: { value } }) => {
    setState({
      ...state,
      [fieldName]: value,
    })
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TextField
            value={state.name}
            onChange={handleChange('name')}
            label="Name"
          />
        )
      case 1:
        return (
          <TextField
            value={state.description}
            onChange={handleChange('description')}
            label="Description"
          />
        )
      default:
        return 'Hello'
    }
  }

  const steps = ['Write a name of your exercise', 'Write description for your exercise']
  return (
    <Dialog
      isDialogOpened={isDialogOpened}
      toggleDialog={toggleDialog}
      renderContent={() => ( // TODO no render prop
        <Stepper
          steps={steps}
          getStepContent={getStepContent}
          onFinish={handleFinish}
        />
      )}
    />
  )
}

CreateExerciseDialog.propTypes = {
  handleCreateExercise: PropTypes.func.isRequired,
  isDialogOpened: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired,
}

export default CreateExerciseDialog
