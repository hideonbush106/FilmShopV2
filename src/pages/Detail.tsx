import { listOfFilms } from '~/shared/ListOfFilms'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const film = listOfFilms.find((film) => film.id === Number(id))
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap-reverse' }}>
      <Box
        sx={{
          marginRight: { sm: '2rem', xs: 0 },
          marginBottom: { sm: 0, xs: '1rem' },
          width: { sm: '35%', xs: '100%' },
          display: 'flex',
          objectFit: 'cover',
          justifyContent: 'center'
        }}
      >
        <img src={`../../${film?.image}`} alt={film?.title} />
      </Box>
      <Box sx={{ width: { sm: '60%', xs: '100%' } }}>
        <Button
          startIcon={<ArrowBack />}
          variant='outlined'
          color='primary'
          onClick={() => {
            navigate('/')
          }}
        >
          Back
        </Button>
        <Typography variant='h4' component='h1'>
          {film?.title}
        </Typography>
        <Typography variant='body1'>{film?.description}</Typography>
        <Typography variant='body2'>Nation: {film?.nation}</Typography>
        <Typography variant='body2' sx={{ marginBottom: '2rem' }}>
          Year: {film?.year}
        </Typography>
        <iframe
          className='video'
          src={film?.trailer}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </Box>
    </Container>
  )
}

export default Detail
