import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Card, CardContent, Typography } from '@mui/material'

interface TimelineCardProps {
  pLeft: number
  pRight: number
  position?: 'left' | 'right'
  title: string
  date: string
  body1: string
  body2: string
  body3: string
}

const TimelineCard = (props: TimelineCardProps) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color='secondary' />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ marginBottom: 10 }}>
        <Card
          sx={{
            width: 'fit-content',
            paddingLeft: props.pLeft,
            paddingRight: props.pRight,
            float: props.position
          }}
        >
          <CardContent>
            <Typography sx={{ my: 1 }} variant='h6'>
              {props.title}
            </Typography>
            <Typography sx={{ my: 1 }} variant='subtitle2'>
              {props.date}
            </Typography>
            <Typography sx={{ my: 1 }} variant='body1'>
              {props.body1}
            </Typography>
            <br></br>
            <Typography sx={{ my: 1 }} variant='body1'>
              {props.body2}
            </Typography>
            <br></br>
            <Typography sx={{ my: 1 }} variant='body1'>
              {props.body3}
            </Typography>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineCard
