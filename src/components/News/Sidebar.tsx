import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import useTheme from '@mui/material/styles/useTheme'

interface SidebarProps {
  archives: {
    title: string
    url: string
  }[]
  description: string
  title: string
}

function Sidebar(props: SidebarProps) {
  const theme = useTheme()
  const { archives, description, title } = props

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: `${theme.palette.mode === 'dark' ? '#000' : '#e3e1e1'}`,
          color: `${theme.palette.mode === 'dark' ? 'white' : 'black'}`
        }}
      >
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display='block' variant='body1' href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
    </Grid>
  )
}

export default Sidebar
