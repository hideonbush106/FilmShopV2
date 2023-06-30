import { User, UserInfo, UserMetadata, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth, provider } from '~/firebase'
import Loading from '~/pages/Loading'

interface Props {
  children: React.ReactNode
}
export type AuthContextType = {
  login: () => Promise<void>
  logout: () => Promise<void>
  userInfo: User | null
}
export const AuthContext = React.createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = React.useState<User | null>(null)
  const [loading, setLoading] = React.useState(true)
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
    window.location.href = '/'
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // const token = await user.getIdToken()
        // console.log(token)
        setUserInfo(user)
      } else {
        setUserInfo(null) // Set user info to null when user is not signed in
      }
      setLoading(false)
    })
    unsubscribe()
  }, [])

  const value = { login, logout, userInfo }
  return loading ? <Loading /> : <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
