import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Markdown from './Markdown'

interface MainProps {
  posts: string[]
  title: string
}

function Main(props: MainProps) {
  const { posts, title } = props

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3
        }
      }}
    >
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className='markdown' key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  )
}

export default Main
