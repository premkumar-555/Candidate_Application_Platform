import React from 'react'
import CustomBox from '../../components/Box'
import { CustomBoxStyle } from './styles'
import Filters from './Filters'

const Jobs = () => {
  return (
    <CustomBox sx={CustomBoxStyle}>
    <Filters/>
    </CustomBox>
  )
}

export default Jobs