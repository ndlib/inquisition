/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box, Flex, Heading, Button } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import InquisitionLayout from '../components/InquisitionLayout'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import NDBrandSectionLeftNav from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section/LeftNav'
import NDBrandEmptyPageHeader from '../components/sharedComponents/NDBrandEmptyPageHeader'
import NDBrandBreadcrumbs from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/breadcrumbs'
import InquisitionLeftNav from '../components/InquisitionLeftNav'

import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import Card from 'components/Shared/Card'
import InquisitionButtonLink from '../components/InquisitionButtonLink'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import { DISPLAY_LIST } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

export const ThemePage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { markdownRemark } = data

  const featuredItems = markdownRemark.frontmatter.featuredItems.map((item) => {
    return (<Card
      key={item.link}
      label={item.title}
      image={item.thumbnail}
      target={item.link} />
    )
  })

  return (
    <InquisitionLayout location={location} pageHeader={<NDBrandEmptyPageHeader location={location} />}
    >
      <Seo
        data={data}
        location={location}
      />
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
      <NDBrandSectionLeftNav>
        <InquisitionLeftNav location={location} />
        <Box>
          <NDBrandSection variant='defaultWithSidebar'>
            <NDBrandBreadcrumbs
              currentPageTitle={markdownRemark.frontmatter.title}
              breadcrumbs={[
                { url: '/themes', title: 'Themes' },
              ]}
            />
            <Heading as='h1' variant='pageTitle'>{markdownRemark.frontmatter.title}</Heading>
            <p dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            <p>
              <Button><Link to={'/' + markdownRemark.frontmatter.essayId}>{'Essay: ' + markdownRemark.frontmatter.essayTitle}</Link></Button>
            </p>
          </NDBrandSection>
          <NDBrandSection variant='defaultWithSidebar'>
            <Flex sx={{ width: '100%', justifyContent: 'space-between' }}>
              <Heading as='h2'>Featured Sources</Heading>
              <Link sx={{ color: 'secondary', textDecoration: 'none' }} to='/search'>See All Sources</Link>
            </Flex>
            <CardGroup allowToggle={false} defaultDisplay={DISPLAY_LIST} toggleGroup='collection-landing'>
              {featuredItems}
            </CardGroup>
            <Flex sx={{ justifyContent: 'center', '& button': { marginTop: '25px' } }}>
              <InquisitionButtonLink target={`/search?documentcategory[0]=${markdownRemark.frontmatter.marbleTitle}`} title={`Search all sources`} />
            </Flex>
          </NDBrandSection>
        </Box>
      </NDBrandSectionLeftNav>
    </InquisitionLayout>
  )
}
ThemePage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default ThemePage

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        essayTitle
        essayId
        slug
        thumbnail
        marbleId
        marbleTitle
        summary
        author
        citationYear
        featuredItems {
          title
          link
          thumbnail
        }
      }
    }
  }
`
