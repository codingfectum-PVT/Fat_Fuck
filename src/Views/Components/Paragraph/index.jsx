import { Typography } from '@mui/material'
import React from 'react'

const Paragraph = (props) => {
  return (
    <Typography color="#fff" fontSize="22px" fontFamily="" textAlign="center" {...props}>{props.children}</Typography>
  )
}

export default Paragraph