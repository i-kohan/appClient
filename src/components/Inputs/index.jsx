import React from 'react'
import TextInput from './TextInput'
import StepperInput from './StepperInput'

export const inputs = {
  text: TextInput,
  stepper: StepperInput,
}

export const buildInputs = ({ fields, ...props }) => fields.map((f) => {
  const Input = inputs[f.fieldType]
  return (
    <Input field={f} {...props} />
  )
})
