import { Modal, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface ModalLayoutProps {
  children: React.ReactNode
  open: boolean
  handleClose: () => void
}

const ModalLayout = (props: ModalLayoutProps) => {
  const { open, handleClose } = props
  const theme = useTheme()

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: '95vw',
      md: '60vw',
      lg: '40vw'
    },
    bgcolor: theme.palette.mode === 'dark' ? '#121212' : 'white',
    boxShadow: 24,
    maxHeight: {
      xs: '100vh',
      md: '80vh'
    }
  }
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component={'div'} style={{ overflowY: 'scroll' }}>
          {React.Children.map(props.children, (child) =>
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.cloneElement(child as React.ReactElement<any>, { handleClose })
          )}
        </Box>
      </Modal>
    </>
  )
}

export default ModalLayout
