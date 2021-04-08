/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import SearchBase from 'components/Shared/SearchBase'
import SearchFilterBox from 'components/Shared/SearchTools/SearchFilterBox'
import SearchResults from 'components/Shared/SearchTools/SearchResults'
import SearchRefinementListFilter from 'components/Shared/SearchTools/SearchRefinementListFilter'
import { TagFilterConfig } from 'searchkit'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'

import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'

const Search = ({ location }) => {
  return (
    <NDBrandLayout location={location} hideSearch>
      <Seo
        data={{}}
        location={location}
        title='Search'
      />
      <NDBrandSection variant='fullBleed'>
        <SearchBase>
          <SearchFilterBox />
          <Grid columns={[2, '25% 75%']}>
            <Box>
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
            <Box>
              <SearchResults defaultDisplay='list' />
            </Box>
          </Grid>
        </SearchBase>
      </NDBrandSection>
    </NDBrandLayout>
  )
}

Search.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Search
