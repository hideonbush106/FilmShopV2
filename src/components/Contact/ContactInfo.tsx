import { Email, FacebookRounded, GitHub, Instagram, LinkedIn, Phone } from '@mui/icons-material'
import { Box, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'

interface ContactInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any
}

const ContactInfo = (props: ContactInfoProps) => {
  return (
    <Box sx={props.sx}>
      <Typography sx={{ textAlign: 'center' }} variant='h4'>
        Contact Information
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          my: 3,
          width: { xs: '80%', sm: '60%' },
          mx: 'auto'
        }}
        variant='h6'
      >
        {`Let's work together.`}
      </Typography>
      <Paper elevation={3}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <Link color='secondary' underline='hover' href='mailto:andyhoaiphong2003@gmail.com'>
              andyhoaiphong2003@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText>
              <Link color='secondary' underline='hover' href='tel:+84834756222'>
                (+84) 834756222
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText>
              <Link color='secondary' underline='hover' href='https://www.linkedin.com/in/phonghoai/' target='_blank'>
                Nguyen Phong
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText>
              <Link color='secondary' underline='hover' href='https://github.com/hideonbush106' target='_blank'>
                hideonbush106
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FacebookRounded />
            </ListItemIcon>
            <ListItemText>
              <Link color='secondary' underline='hover' href='http://facebook.com/fng.106' target='_blank'>
                Phong Hoai Nguyen
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Instagram />
            </ListItemIcon>
            <ListItemText>
              <Link color='secondary' underline='hover' href='https://www.instagram.com/f.g.106/' target='_blank'>
                f.g.106
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}

export default ContactInfo
