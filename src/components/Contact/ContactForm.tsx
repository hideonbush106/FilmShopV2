import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

interface ContactFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any
}

const ContactForm = (props: ContactFormProps) => {
  const form = React.useRef()
  return (
    <Box sx={props.sx}>
      <Typography sx={{ textAlign: 'center' }} variant='h4'>
        Send your request
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
        I would love to respond to your queries.
      </Typography>
      <Paper elevation={3}>
        <Box
          ref={form}
          component='form'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginLeft: '4%',
            marginBottom: '4%',
            width: '92%'
          }}
        >
          <TextField
            sx={{
              marginTop: '5%',
              marginBottom: '2%',
              marginLeft: '4%',
              width: { sm: '44%', xs: '92%' }
            }}
            label='Full Name'
            name='from_name'
            required
          />

          <TextField
            sx={{
              marginBottom: '2%',
              marginTop: { xs: '2%', sm: '5%' },
              marginRight: '4%',
              marginLeft: { xs: '4%' },
              width: { sm: '44%', xs: '92%' }
            }}
            type='email'
            label='Email'
            name='from_email'
            required
          />

          <TextField
            sx={{
              my: '2%',
              marginBottom: '2%',
              marginLeft: '4%',
              width: { sm: '44%', xs: '92%' }
            }}
            type='tel'
            label='Phone No.'
            name='from_phoneNo'
            required
          />

          <TextField
            sx={{
              my: '2%',
              marginBottom: '2%',
              marginLeft: { xs: '4%' },
              marginRight: '4%',
              width: { sm: '44%', xs: '92%' }
            }}
            label='Subject'
            name='subject'
            required
          />

          <TextField
            sx={{
              my: '2%',
              marginLeft: '4%',
              marginBottom: '4%',
              width: '92%'
            }}
            label='Message'
            multiline
            rows={4}
            name='message'
            required
          />
          <Box sx={{ width: '100%', display: 'flex', marginBottom: '4%' }}>
            <Button type='submit' variant='contained' sx={{ mx: 'auto', my: { xs: '5%', sm: '0' } }} size='large'>
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default ContactForm
