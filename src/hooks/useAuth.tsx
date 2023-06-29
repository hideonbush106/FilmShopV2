import React from 'react'
import { AuthContext, AuthContextType } from '~/contexts/AuthContext'

const useAuth = () => {
  return React.useContext(AuthContext) as AuthContextType
}

export default useAuth
