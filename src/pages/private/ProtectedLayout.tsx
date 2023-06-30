import useAuth from '~/hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import React from 'react'

const ProtectedLayout = () => {
  const { userInfo } = useAuth()
  const protectedRoutes = ['/profile', '/film-mng']
  const location = useLocation()
  const [protect, setProtect] = React.useState(true)
  React.useEffect(() => {
    if (protectedRoutes.includes(location.pathname)) {
      setProtect(true)
    } else {
      setProtect(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  if (protect && userInfo) {
    return <Outlet />
  }
  return <Navigate to='/' />
}

export default ProtectedLayout
