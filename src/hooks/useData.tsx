import React from 'react'
import { DataContext, DataContextType } from '~/contexts/DataContext'

const useData = () => {
  return React.useContext(DataContext) as DataContextType
}

export default useData
