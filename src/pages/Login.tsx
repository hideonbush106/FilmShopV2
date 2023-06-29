import { Box, Button, Typography } from '@mui/material'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import useAuth from '~/hooks/useAuth'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  return (
    <Box
      height={'100vh'}
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '::before': {
          content: '""',
          position: 'absolute',
          filter: 'brightness(0.4)',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/6121ddda-c241-4c1a-8843-956a39b7349b/VN-en-20230626-popsignuptwoweeks-perspective_alpha_website_large.jpg')`
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography
          variant='h2'
          sx={{
            fontFamily: `'Comfortaa', cursive`,
            zIndex: 9,
            color: 'white',
            fontWeight: 700,
            letterSpacing: '.3rem'
          }}
        >
          Welcome to FILMSHOP
        </Typography>
        <GoogleButton style={{ margin: '2rem', zIndex: 9 }} onClick={login} />
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            navigate('/')
          }}
        >
          back to home
        </Button>
      </Box>
    </Box>
  )
}

export default Login
