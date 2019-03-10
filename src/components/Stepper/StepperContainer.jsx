import { compose, withState, withProps } from 'recompose'
import Stepper from './Stepper'

export default compose(
  withState('activeStep', 'setActiveStep', 0),
  withProps(props => ({
    handleNext() {
      const { activeStep, setActiveStep } = props
      setActiveStep(activeStep + 1)
    },
    handleBack() {
      const { activeStep, setActiveStep } = props
      setActiveStep(activeStep - 1)
    },
    handleReset() {
      const { setActiveStep } = props
      setActiveStep(0)
    },
  })),
)(Stepper)
