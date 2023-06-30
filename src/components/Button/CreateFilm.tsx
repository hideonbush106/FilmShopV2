import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import CreateFilmModal from '../Modal/CreateFilmModal'
import { Add } from '@mui/icons-material'

const CreateFilm = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      {xs || sm ? (
        <IconButton color='primary' size='large' sx={{ m: 1 }} onClick={() => setOpen(true)}>
          <Add />
        </IconButton>
      ) : (
        <Button variant='outlined' color='primary' startIcon={<Add />} onClick={() => setOpen(true)}>
          Add new film
        </Button>
      )}

      <CreateFilmModal open={open} handleClose={handleClose} />
    </>
  )
}

export default CreateFilm
