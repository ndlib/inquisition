/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Heading, Grid, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'
import NDBrandEmptyPageHeader from '../components/sharedComponents/NDBrandEmptyPageHeader'
import InquisitionLeftNav from '../components/InquisitionLeftNav'

import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import { DISPLAY_LIST } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

const Browse = ({ data, location }) => {
  const { allMarkdownRemark } = data

  const browseLinks = allMarkdownRemark.edges.map(item => {
    return (<Card
      key={item.node.frontmatter.marbleId}
      label={item.node.frontmatter.title}
      image={item.node.frontmatter.thumbnail}
      target={item.node.frontmatter.slug}
    ><div dangerouslySetInnerHTML={{ __html: item.node.html }} /></Card>)
  })
  return (
    <NDBrandLayout
      location={location}
      pageHeader={<NDBrandEmptyPageHeader location={location} />}
    >
      <Seo
        data={data}
        location={location}
      />

      <I18nextProvider i18n={i18next}>
        <Grid sx={{ ml: '5vw', mr: '5vw' }} columns={['100% 0%', '22vw 68vw', '22vw 68vw']}>
          <Box sx={{ mt: '5rem' }}>
            <InquisitionLeftNav location={location} />
          </Box>
          <div>
            <NDBrandSection sx={{ pl: '2rem' }}>
              <Heading as='h1' variant='pageTitle'>Themes</Heading>
              <CardGroup defaultDisplay={DISPLAY_LIST} toggleGroup='browse-page'>
                {browseLinks}
              </CardGroup>
            </NDBrandSection>
          </div>
        </Grid>
      </I18nextProvider>

    </NDBrandLayout>
  )
}

Browse.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}
export default Browse

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "theme"}}}, sort: {fields: frontmatter___sort}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            thumbnail
            slug
            summary
          }
        }
      }
    }
    menusJson(id: {eq: "historyEssays"}) {
      id
      label
      items {
        id
        label
        link
        icon
        selectedPatterns
      }
    }
  }

`
