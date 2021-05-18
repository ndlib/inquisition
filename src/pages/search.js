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
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import { I18nextProvider } from 'react-i18next'
import InquisitionLayout from '../components/InquisitionLayout'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import NDBrandEmptyPageHeader from '../components/sharedComponents/NDBrandEmptyPageHeader'
import NDBrandBreadcrumbs from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/breadcrumbs'

import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'

const Search = ({ location }) => {
  return (
    <SearchBase>
      <I18nextProvider i18n={i18next}>
        <InquisitionLayout location={location} pageHeader={<NDBrandEmptyPageHeader location={location} />}>
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
            <NDBrandSection sx={{ pl: '2rem', minWidth: '60vw', '&.sectionContent': { minWidth: '60vw' } }}>
              <NDBrandBreadcrumbs
                currentPageTitle='Browse Collection'
                breadcrumbs={[]}
              />
              <div sx={{
                '& form': {
                  border: '1px black solid',
                  borderRadius: '10px',
                },
              }}>
                <SearchFilterBox />
              </div>
              <SearchResults defaultDisplay='list' />
            </NDBrandSection>
          </Grid>
        </InquisitionLayout>
      </I18nextProvider>
    </SearchBase>

  )
}

Search.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Search
