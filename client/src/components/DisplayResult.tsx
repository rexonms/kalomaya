import React from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { flexbox } from '@mui/system'

const DisplayResult: React.FC<{
  value: string
  label: string
}> = ({ label, value }) => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Typography variant="body1" margin="0px" component="div">
        {value}
      </Typography>
      <Typography variant="caption" margin="0px" display="block">
        {label}
      </Typography>
    </div>
  )
}

export default DisplayResult
