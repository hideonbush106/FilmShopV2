import { useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import { Info } from '@mui/icons-material'
import { Film } from '~/shared/ListOfFilms'

interface FilmPresentationProps {
  films: Film[]
}

export default function FilmPresentation(props: FilmPresentationProps) {
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <Grid
      bgcolor={theme.palette.mode === 'dark' ? '#121212' : 'white'}
      container
      spacing={3}
      sx={{ marginTop: '0', marginBottom: '5rem', padding: '2rem', justifyContent: 'center' }}
    >
      {props.films.map((film) => (
        <Grid xs={12} sm={6} lg={3} item key={film.id}>
          <Card>
            <CardMedia sx={{ height: 500 }} image={film.image} title={film.title} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {film.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Nation: {film.nation}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Year: {film.year}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='outlined'
                startIcon={<Info />}
                onClick={() => {
                  navigate(`/detail/${film.id}`)
                }}
              >
                Detail
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
