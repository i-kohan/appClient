import React from 'react'
import { Stepper } from '../Stepper'
import { buildInputs } from './index'

const getStepContent = (fields) => (activeStep) => {
  return buildInputs({ fields: fields[activeStep].inputs })
}

const getSteps = (fields) => {
  return fields.map(f => f.lable)
} 

const StepperInput = ({
  fields,
  form,
  ...props,
}) => {
  return (
    <Stepper
      steps={getSteps(fields)}
      getStepContent={getStepContent(fields)}
    />
  )
}

export default StepperInput

