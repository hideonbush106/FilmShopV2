import { Box, CircularProgress } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'

const Loading = () => {
  const theme = useTheme()

  return (
    <Box
      height={'100vh'}
      bgcolor={theme.palette.mode === 'dark' ? 'black' : 'white'}
      sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CircularProgress size={80} />
    </Box>
  )
}

export default Loading
