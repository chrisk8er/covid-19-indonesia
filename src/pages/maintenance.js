import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Box from '@material-ui/core/Box'

const MaintenancePage = () => (
  <Layout>
    <SEO title="301 Moved Permanently" />
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      mt={5}
      mb={5}
    >
      <h1>Our site is getting a little tune up and some love.</h1>
      <p>
        We apologize for the inconvenience, but we're performing some
        maintenance.
      </p>
    </Box>
  </Layout>
)

export default MaintenancePage
