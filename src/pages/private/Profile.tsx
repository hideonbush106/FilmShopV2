import { Avatar, Box, Paper, Typography } from '@mui/material'
import useAuth from '~/hooks/useAuth'

const Profile = () => {
  const { userInfo } = useAuth()
  console.log(userInfo)
  return (
    <Box sx={{ height: '100vh', p: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Avatar src={`${userInfo?.photoURL}`} alt={`${userInfo?.displayName}`} sx={{ width: 150, height: 150 }} />
        <Typography variant='h4' sx={{ my: 1, textAlign: 'center' }}>
          {userInfo?.displayName}
        </Typography>
        <Typography variant='body1' sx={{ my: 1, textAlign: 'center' }}>
          Phone: {userInfo?.phoneNumber ? userInfo?.phoneNumber : 'Not provided'}
        </Typography>
        <Typography variant='body1' sx={{ my: 1, textAlign: 'center' }}>
          Email: {userInfo?.email}
        </Typography>
        <Typography variant='body1' sx={{ my: 1, textAlign: 'center' }}>
          Joining date: {userInfo?.metadata.creationTime}
        </Typography>
      </Paper>
    </Box>
  )
}

export default Profile
