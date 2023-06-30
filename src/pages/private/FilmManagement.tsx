import { Box, ButtonGroup, Link, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import useData from '~/hooks/useData'
import { GridColDef } from '@mui/x-data-grid/models'
import CreateFilm from '~/components/Button/CreateFilm'
import EditFilm from '~/components/Button/EditFilm'
import DeleteFilm from '~/components/Button/DeleteFilm'
const FilmManagement = () => {
  const { films } = useData()
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => <img src={params.value} alt='film' width='100%' />
    },
    { field: 'title', headerName: 'Title', width: 325 },
    { field: 'year', headerName: 'Year', width: 90 },
    { field: 'nation', headerName: 'Nation', width: 150 },
    { field: 'description', headerName: 'Description', width: 500 },
    {
      field: 'trailer',
      headerName: 'Trailer',
      width: 100,
      renderCell: (param) => (
        <Link target='_blank' rel='noreferrer' href={param.value}>
          Link
        </Link>
      )
    }
  ]
  return (
    <Box sx={{ p: 5 }}>
      <Typography align='center' variant='h4' sx={{ mb: 5 }}>
        Film Management
      </Typography>
      <ButtonGroup sx={{ my: 2 }}>
        <CreateFilm />
        <EditFilm />
        <DeleteFilm />
      </ButtonGroup>
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } }
        }}
        pageSizeOptions={[5, 10, 25]}
        rowHeight={150}
        rows={films}
        columns={columns}
      />
    </Box>
  )
}

export default FilmManagement
