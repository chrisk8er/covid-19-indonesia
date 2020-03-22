import React from 'react'

// MATERIAL UI
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function MainPanel({ data }) {
  const classes = useStyles()

  return (
    <Box mt={2} mt={2}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box ml={2}>
              <Typography variant="h4">{data.totalCase}</Typography>
              <Typography variant="overline">Terkonfirmasi</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box ml={2}>
              <Typography variant="h4">{data.totalTreatments}</Typography>
              <Typography variant="overline">Perawatan</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box ml={2}>
              <Typography variant="h4">{data.totalRecovered}</Typography>
              <Typography variant="overline">Sembuh</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box ml={2}>
              <Typography variant="h4">{data.totalDeaths}</Typography>
              <Typography variant="overline">Meninggal</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="caption">
        <Box fontStyle="italic" mt={1}>
          *sumber: Badan Nasional Penanggulangan Bencana Indonesia
        </Box>
      </Typography>
    </Box>
  )
}
