import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { Edit } from '@mui/icons-material'
import EditFilmModal from '../Modal/EditFilmModal'

const EditFilm = () => {
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
        <IconButton size='large' color='success' sx={{ m: 1 }} onClick={() => setOpen(true)}>
          <Edit />
        </IconButton>
      ) : (
        <Button color='success' variant='outlined' startIcon={<Edit />} onClick={() => setOpen(true)}>
          Edit film
        </Button>
      )}
      <EditFilmModal open={open} handleClose={handleClose} />
    </>
  )
}

export default EditFilm
