/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import SearchBase from 'components/Shared/SearchBase'
import SearchFilterBox from 'components/Shared/SearchTools/SearchFilterBox'
import SearchResults from 'components/Shared/SearchTools/SearchResults'
import SearchRefinementListFilter from 'components/Shared/SearchTools/SearchRefinementListFilter'
import { TagFilterConfig } from 'searchkit'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'
import NDBrandEmptyPageHeader from '../components/sharedComponents/NDBrandEmptyPageHeader'
import NDBrandBreadcrumbs from '../components/sharedComponents/NDBrandBreadcrumbs'

import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'

const Search = ({ location }) => {
  return (
    <SearchBase>
      <NDBrandLayout location={location} pageHeader={<NDBrandEmptyPageHeader location={location} />}>
        <Seo
          data={{}}
          location={location}
          title='Search'
        />
        <Grid sx={{ ml: '5vw', mr: '5vw' }} columns={['100% 0%', '22vw 68vw', '22vw 68vw']}>
          <Box sx={{ mt: '5rem' }}>
            <TagFilterConfig field='creator.keyword' title='Creator' id='creator' />
            <TagFilterConfig field='collection.keyword' title='Collection' id='collection' />

            <SearchRefinementListFilter
              field='parent.keyword'
              label='Document Category'
              operator='OR'
              sort='a-z'
            />
            <SearchRefinementListFilter
              field='centuryTag.keyword'
              label='Date Range'
              operator='OR'
              sort='a-z'
            />
            <SearchRefinementListFilter
              field='formatTag.keyword'
              label='Format'
              operator='OR'
            />
            <SearchRefinementListFilter
              field='language.keyword'
              label='Language'
              operator='OR'
              sort='default'
              size='4'
            />
            <SearchRefinementListFilter
              field='geographicLocation.keyword'
              label='Geogrpahic Location'
              operator='OR'
              sort='default'
            />
          </Box>
          <NDBrandSection>
            <NDBrandBreadcrumbs
              currentPageTitle='Browse Collection'
              breadcrumbs={[]}
            />
            <Heading as='h1' variant='pageTitle'>Browse Collection</Heading>

            <SearchFilterBox />

            <SearchResults defaultDisplay='list' />
          </NDBrandSection>
        </Grid>
      </NDBrandLayout>
    </SearchBase>

  )
}

Search.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Search
