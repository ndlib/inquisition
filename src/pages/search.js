/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
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
import NDBrandSectionLeftNav from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section/LeftNav'

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
          <NDBrandSectionLeftNav>
            <NDBrandSection variant='sidebar'>
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
            </NDBrandSection>
            <NDBrandSection variant='fullBleedWithSidebar'>
              <NDBrandBreadcrumbs
                currentPageTitle='Browse Collection'
                breadcrumbs={[]}
              />

              <SearchFilterBox />
              <SearchResults defaultDisplay='list' />
            </NDBrandSection>
          </NDBrandSectionLeftNav>
        </InquisitionLayout>
      </I18nextProvider>
    </SearchBase>

  )
}

Search.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Search
