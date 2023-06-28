import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Phong Hoai Nguyen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function StickyFooter() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '10vh'
      }}
    >
      <CssBaseline />
      <Box
        bgcolor={theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]}
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto'
        }}
      >
        <Container maxWidth='sm'>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}
