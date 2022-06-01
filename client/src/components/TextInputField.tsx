import React, { HTMLInputTypeAttribute } from 'react'

import TextField from '@mui/material/TextField'
const TextInputField: React.FC<{
  label: string
  value: number | string
  type?: HTMLInputTypeAttribute
  onChange?: (args: any) => void
}> = ({ label, value, type = 'text', onChange }) => {
  return (
    <TextField
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      type={type}
      defaultValue="Small"
      size="small"
      onChange={onChange}
    />
  )
}

export default TextInputField
