import React from 'react'
import CustomBox from '../../../components/Box'
import { containerStyle } from './styles'
import CustomAutoComplete from '../../../components/Autocomplete'

const Filters = () => {
  return (
    <CustomBox sx={containerStyle}>
    <CustomAutoComplete minWidth={150} placeholder="Roles"/>
    <CustomAutoComplete minWidth={200} placeholder="Number Of Employees"/>
    <CustomAutoComplete minWidth={100} placeholder="Experience"/>
    <CustomAutoComplete minWidth={100} placeholder="Remote"/>
    <CustomAutoComplete minWidth={100} placeholder="Minimum Base Pay Salary"/>
    <CustomAutoComplete minWidth={100} placeholder="Location"/>
    <CustomAutoComplete minWidth={100} placeholder="Tech Stack"/>
    </CustomBox>
  )
}

export default Filters