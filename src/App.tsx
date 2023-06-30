import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { createTheme } from '@mui/material'
import ColorModeContext from '~/contexts/ColorModeContext'
import { routes } from '~/routes/routes'
import DataProvider from './contexts/DataContext'
import AuthProvider from './contexts/AuthContext'

const useColorMode = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }, [])

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode
    }),
    [toggleColorMode]
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return { colorMode, theme }
}

const App = () => {
  const { colorMode, theme } = useColorMode()

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ColorModeContext.Provider value={colorMode}>
            <DataProvider>
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} Component={route.component}>
                    {route.children?.map((child, index) => (
                      <Route key={index} path={child.path} Component={child.component}>
                        {child.childrens?.map((child, index) => (
                          <Route key={index} path={child.path} Component={child.component} />
                        ))}
                      </Route>
                    ))}
                  </Route>
                ))}
              </Routes>
            </DataProvider>
          </ColorModeContext.Provider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App
