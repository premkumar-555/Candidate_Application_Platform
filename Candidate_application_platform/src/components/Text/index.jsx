import { Typography } from '@mui/material'
import React from 'react'

const Text = (props) => {
  return (
    <Typography {...props}>
      {props.txt}
    </Typography>
  )
}

export default Text