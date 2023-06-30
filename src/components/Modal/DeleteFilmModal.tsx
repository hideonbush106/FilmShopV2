import { Delete } from '@mui/icons-material'
import { Box, Button, FormControl, MenuItem, TextField, Typography, useTheme } from '@mui/material'
import ModalLayout from '../layout/ModalLayout'
import useData from '~/hooks/useData'
import { Film } from '~/global/interface'
import { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import useListOfFilms from '~/hooks/api/useListOfFilms'

interface Props {
  open: boolean
  handleClose: () => void
}

const DeleteFilmModal = (props: Props) => {
  const { open, handleClose } = props
  const theme = useTheme()
  const { films } = useData()

  const { deleteFilmById } = useListOfFilms()
  const [film, setFilm] = useState<Film | undefined>({
    id: 0,
    image: '',
    title: '',
    year: '',
    nation: '',
    description: '',
    trailer: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const film = films.find((film) => Number(film.id) === Number(e.target.value))
    setFilm(film)
    formik.setFieldValue('id', film?.id)
    // formik.setFieldValue('image', film?.image)
    // formik.setFieldValue('title', film?.title)
    // formik.setFieldValue('year', film?.year)
    // formik.setFieldValue('nation', film?.nation)
    // formik.setFieldValue('description', film?.description)
    // formik.setFieldValue('trailer', film?.trailer)
  }

  const validationSchema = yup.object({
    id: yup.number().required('ID is required')
    // image: yup.string().required('Image link is required'),
    // title: yup.string().required('Title is required'),
    // year: yup.string().required('Year is required'),
    // nation: yup.string().required('Nation is required'),
    // description: yup.string().required('Description is required'),
    // trailer: yup.string().required('Trailer link is required')
  })

  const formik = useFormik({
    initialValues: {
      id: film?.id
      // image: film?.image,
      // title: film?.title,
      // year: film?.year,
      // nation: film?.nation,
      // description: film?.description,
      // trailer: film?.trailer
    },
    validationSchema: validationSchema,
    onSubmit: async ({ id, ...values }) => {
      try {
        console.log(values)
        await deleteFilmById(String(id))
        handleClose()
      } catch (error) {
        console.log(error)
        handleClose()
      } finally {
        handleClose()
        window.location.reload()
      }
    }
  })

  return (
    <ModalLayout open={open} handleClose={handleClose}>
      <Box
        bgcolor={theme.palette.mode === 'dark' ? '#121212' : 'white'}
        display={'inline-flex'}
        sx={{
          p: {
            xs: 1.5,
            sm: 3
          },
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        }}
      >
        <Delete fontSize='large' sx={{ mx: 1 }} />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: '1.5rem',
              sm: '2rem'
            }
          }}
          variant='h4'
        >
          Delete film
        </Typography>
      </Box>
      <form method='POST' onSubmit={formik.handleSubmit}>
        <FormControl sx={{ width: '100%', px: 5, my: 2 }}>
          <TextField
            onChange={handleChange}
            value={formik.values.id}
            variant='standard'
            sx={{ my: 1 }}
            select
            label='Film ID'
          >
            {films.map((film) => (
              <MenuItem key={film.id} value={film.id}>
                {film.id}
              </MenuItem>
            ))}
          </TextField>
          <TextField sx={{ my: 1 }} value={film?.title} label='Film title' variant='standard' fullWidth disabled />
          <TextField sx={{ my: 1 }} value={film?.image} label='Film image link' variant='standard' fullWidth disabled />
          <Box display={'flex'} sx={{ width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <TextField
              sx={{
                my: 1,
                width: {
                  xs: '100%',
                  sm: '47%'
                }
              }}
              label='Film year'
              variant='standard'
              fullWidth
              disabled
              value={film?.year}
            />
            <TextField
              sx={{
                my: 1,
                width: {
                  xs: '100%',
                  sm: '47%'
                }
              }}
              label='Film nation'
              variant='standard'
              fullWidth
              disabled
              value={film?.nation}
            />
          </Box>

          <TextField
            sx={{ my: 1 }}
            label='Film description'
            multiline
            maxRows={4}
            variant='standard'
            fullWidth
            disabled
            value={film?.description}
          />
          <TextField
            sx={{ my: 1 }}
            label='Film trailer link (Youtube embed link)'
            variant='standard'
            fullWidth
            disabled
            value={film?.trailer}
          />
        </FormControl>

        <Box
          bgcolor={theme.palette.mode === 'dark' ? '#121212' : 'white'}
          sx={{
            marginTop: 3,
            p: 1.5,
            position: 'sticky',
            bottom: -1,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
          }}
        >
          <Button sx={{ my: 1, mr: 1 }} variant='contained' color='error' type='submit'>
            Delete
          </Button>
          <Button
            sx={{ my: 1 }}
            color='primary'
            variant='outlined'
            onClick={() => {
              handleClose()
              setFilm({
                id: 0,
                image: '',
                title: '',
                year: '',
                nation: '',
                description: '',
                trailer: ''
              })
            }}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </ModalLayout>
  )
}

export default DeleteFilmModal
