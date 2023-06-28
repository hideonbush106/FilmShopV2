import Timeline from '@mui/lab/Timeline'
import TimelineCard from '~/components/About/TimelineCard'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Typography } from '@mui/material'
import { timelineItemClasses } from '@mui/lab/TimelineItem'

const About = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box>
      <Typography sx={{ textAlign: 'center', marginTop: '2rem' }} variant='h4'>
        About us
      </Typography>
      <Timeline
        sx={
          isMobile
            ? {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0
                }
              }
            : {}
        }
        position={isMobile ? 'right' : 'alternate'}
      >
        <TimelineCard
          pLeft={1}
          pRight={8}
          title='Filmshop 1.0'
          date='july, 2019'
          body1='Filmshop was built with HTML, CSS, JS and Bootstrap'
          body2='The website was still not deployed'
          body3='Simple design and not responsive'
        />
        <TimelineCard
          position={isMobile ? 'left' : 'right'}
          pRight={isMobile ? 8 : 1}
          pLeft={isMobile ? 1 : 8}
          title='Filmshop 2.0'
          date='sept, 2021'
          body1='Filmshop was rebuilt with ReactJS and Material UI'
          body2='The website was deployed on Vercel'
          body3='Responsive design and more features'
        />
        <TimelineCard
          pLeft={1}
          pRight={8}
          title='Filmshop 3.x'
          date='future'
          body1='Filmshop will be rebuilt with NextJS and Chakra UI'
          body2='The static data will be replaced by dynamic data from MongoDB'
          body3='More features and better design'
        />
      </Timeline>
    </Box>
  )
}

export default About
