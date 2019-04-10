import React from 'react'
import {
  TextField,
} from '@material-ui/core'

const TextInput = ({
  field,
  form: { touched, errors },
  ...props,
}) => {
  return (
    <TextField
      {...props}
      error={errors[field.name]}
    />
  )
}

export default TextInput
