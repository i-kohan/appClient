import React from 'react'
import { Stepper } from '../Stepper'
import { buildInputs } from './index'

const getStepContent = (fields, props) => (activeStep) => {
  return buildInputs({ ...props, fields: fields[activeStep].inputs })
}

const getSteps = (fields) => {
  return fields.map(f => f.lable)
} 

const StepperInput = ({
  field,
  form,
  ...props,
}) => {
  return (
    <Stepper
      steps={getSteps(field.fields)}
      getStepContent={getStepContent(field.fields, props)}
    />
  )
}

export default StepperInput

