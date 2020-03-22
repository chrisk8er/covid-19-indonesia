import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

function ItemText({ confirmed, recovered, deaths }) {
  return (
    <Box display="flex" alignContent="flex-start">
      <Box pr={1} color="orange">
        <Typography variant="body2">Terkonfirmasi: {confirmed}</Typography>
      </Box>
      {recovered !== 0 && (
        <Box pr={1} color="green">
          <Typography variant="body2">Sembuh: {recovered}</Typography>
        </Box>
      )}
      {deaths !== 0 && (
        <Box pr={1} color="red">
          <Typography variant="body2">Meninggal: {deaths}</Typography>
        </Box>
      )}
    </Box>
  )
}

export default function SimpleList({ data }) {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {data &&
        data.map(({ attributes }) => {
          return (
            <Box key={attributes.Kode_Provi}>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body1">
                      {attributes.Provinsi}
                    </Typography>
                  }
                  secondary={
                    <ItemText
                      confirmed={attributes.Kasus_Posi}
                      recovered={attributes.Kasus_Semb}
                      deaths={attributes.Kasus_Meni}
                    />
                  }
                />
              </ListItem>
              <Divider light />
            </Box>
          )
        })}
    </List>
  )
}
