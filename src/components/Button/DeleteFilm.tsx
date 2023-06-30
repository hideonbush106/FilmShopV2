import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { Delete } from '@mui/icons-material'
import DeleteFilmModal from '../Modal/DeleteFilmModal'

const DeleteFilm = () => {
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      {xs || sm ? (
        <IconButton color='error' size='large' sx={{ m: 1 }} onClick={() => setOpen(true)}>
          <Delete />
        </IconButton>
      ) : (
        <Button variant='outlined' color='error' startIcon={<Delete />} onClick={() => setOpen(true)}>
          Delete film
        </Button>
      )}
      <DeleteFilmModal open={open} handleClose={handleClose} />
    </>
  )
}

export default DeleteFilm
