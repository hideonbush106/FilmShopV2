import React from 'react'

interface ColorModeContextProps {
  toggleColorMode: () => void
}

const ColorModeContext = React.createContext({} as ColorModeContextProps)

export default ColorModeContext
