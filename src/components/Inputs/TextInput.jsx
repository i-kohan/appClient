import React from 'react'
import {
  TextField,
} from '@material-ui/core'

const TextInput = ({
  field,
  touched,
  errors,
  values,
  handleChange,
  ...props
}) => {
  return (
    <TextField
      value={values[field.accessor]}
      onChange={handleChange}
      error={errors[field.accessor]}
      name={field.accessor}
    />
  )
}

export default TextInput
