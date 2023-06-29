import { UserInfo, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth, provider } from '~/firebase'

interface Props {
  children: React.ReactNode
}
export type AuthContextType = {
  login: () => Promise<void>
  logout: () => Promise<void>
  userInfo: UserInfo | null
}
export const AuthContext = React.createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null)
  const login = async () => {
    try {
      await signInWithPopup(auth, provider)
      // const token = await userCredential.user.getIdToken()
      // console.log(userCredential)
      // console.log(token)
      window.location.href = '/'
    } catch (error) {
      console.log(error)
    }
  }
  const logout = async () => {
    await signOut(auth)
    window.location.reload()
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // const token = await user.getIdToken()
        // console.log(token)
        setUserInfo(user)
        console.log(user)
      }
    })
    return unsubscribe()
  }, [])

  const value = { login, logout, userInfo }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
