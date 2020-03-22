import React from 'react'

// MATERIAL UI
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import Link from '@material-ui/core/Link'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Box from '@material-ui/core/Box'

export default function TopInfo() {
  const [showSourceInfo, setshowSourceInfo] = React.useState(true)

  return (
    <Box mt={2} mb={2}>
      <Collapse in={showSourceInfo}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setshowSourceInfo(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Typography variant="body2">
            Data dalam website ini diambil secara real-time dari{' '}
            <Link href="http://covid19.bnpb.go.id/">BNPB Indonesia</Link>.
          </Typography>
        </Alert>
      </Collapse>
    </Box>
  )
}
