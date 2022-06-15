import React from 'react'
import NumberFormat from 'react-number-format'

import TextField from '@mui/material/TextField'

const NumberFormatCustom = (props: any) => {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      prefix={'$'}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      thousandSeparator
      // isNumericString
    />
  )
}

// https://codesandbox.io/s/react-hooks-counter-demo-br8l1?file=/src/index.js:101-120
// https://www.npmjs.com/package/react-number-format
const MyCurrencyTextFiled: React.FC<{
  label: string
  // type: string
  value: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ label, value, onChange }) => {
  // const [currency, setCurrency] = useState<any>(value)
  return (
    <TextField
      label={label}
      // type={type}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      defaultValue="Small"
      size="small"
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
      margin="none"
      onChange={onChange}
    />
  )
}

export default MyCurrencyTextFiled
