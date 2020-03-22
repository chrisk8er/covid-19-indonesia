import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function MainPanel({ data }) {
  return (
    <Box mt={2} mt={2}>
      <Paper style={{ color: 'white', backgroundColor: '#3f51b5' }}>
        <Grid container spacing={2} style={{ margin: 10 }}>
          <Grid item xs={6}>
            <Typography variant="h4">{data.totalCase}</Typography>
            <Typography variant="overline">Terkonfirmasi</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">{data.totalTreatments}</Typography>
            <Typography variant="overline">Perawatan</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">{data.totalRecovered}</Typography>
            <Typography variant="overline">Sembuh</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">{data.totalDeaths}</Typography>
            <Typography variant="overline">Meninggal</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="caption">
        <Box fontStyle="italic">
          sumber: Badan Nasional Penanggulangan Bencana Indonesia
        </Box>
      </Typography>
    </Box>
  )
}
