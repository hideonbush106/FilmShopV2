import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box height={'100vh'} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress size={80} />
    </Box>
  )
}

export default Loading
