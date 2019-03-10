import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Stepper as StepperMaterial,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
})

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad']
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...'
    case 1:
      return 'What is an ad group anyways?'
    case 2:
      return 'This is the bit I really care about!'
    default:
      return 'Unknown stepIndex'
  }
}

const Stepper = ({
  classes,
  activeStep,
  handleNext,
  handleBack,
  handleReset
}) => {
  const steps = getSteps()
  return (
    <div className={classes.root}>
      <StepperMaterial activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StepperMaterial>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(Stepper)
