import React, { useEffect, useState } from 'react'
// import { Link } from "gatsby"

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// COMPONENTS
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SimpleCard from '../components/card'
import SimpleList from '../components/list'
import TopInfo from '../components/top-info'

import {
  getProvinceStatus,
  getTotalCases,
  getTotalTreatments,
  getTotalRecovered,
  getTotalDeaths,
} from '../services/api'
import MainPanel from '../components/main-panel'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [provinciesStatus, setProvinciesStatus] = useState([])
  const [status, setStatus] = useState({
    totalCase: 0,
    totalTreatments: 0,
    totalRecovered: 0,
    totalDeaths: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      const provincies = await getProvinceStatus()
      const cases = await getTotalCases()
      const treatments = await getTotalTreatments()
      const recovered = await getTotalRecovered()
      const deaths = await getTotalDeaths()

      setProvinciesStatus(provincies)
      setStatus({
        totalCase: cases[0].attributes.value,
        totalTreatments: treatments[0].attributes.value,
        totalRecovered: recovered[0].attributes.value,
        totalDeaths: deaths[0].attributes.value,
      })
    }

    fetchData()
    setInterval(() => {
      fetchData()
    }, 10000)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TopInfo />
            <MainPanel data={status} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Kasus Berdasarkan Provinsi:
            </Typography>
            <SimpleList data={provinciesStatus} />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
