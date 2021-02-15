import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Layout as ThemeLayout } from 'theme-ui'
import queryString from 'query-string'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import PageWrapper from 'components/Layout/PageWrapper'
import ContentWrapper from 'components/Layout/ContentWrapper'
import PageContent from 'components/Layout/PageContent'
import LargeHeaderWrapper from '../../sharedComponents/LargeHeaderWrapper'
import SearchBox from 'components/Shared/SearchBox'
import Menu from 'components/Shared/Menu'

export const Layout = ({
  title, // page title to be placed inside main
  noPadding, // bool used to avoid padding page content
  children,
  requireLogin, // bool to test login
  location,
}) => {
  const [qs] = useState(queryString.parse(location.search) || {})
  useEffect(() => {
    const scrollTo = document.querySelector(`#${qs.scrollto}`)
    if (scrollTo) {
      scrollTo.scrollIntoView()
    } else {
      document.querySelector('#gatsby-focus-wrapper').scrollTop = 0
    }
  })

  return (
    <ThemeLayout>
      <PageWrapper location={location}>
        <LargeHeaderWrapper location={location} menuObject={Menu}>
          <div>
            <h1><img /></h1>
            <SearchBox />
          </div>
        </LargeHeaderWrapper>

        <ContentWrapper
          noPadding={false}
        >
          <PageContent
            title={title}
            location={location}
          >
            {children}
          </PageContent>
        </ContentWrapper>
      </PageWrapper>
    </ThemeLayout>
  )
}

Layout.propTypes = {
  title: PropTypes.node,
  noPadding: PropTypes.bool,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  requireLogin: PropTypes.bool,
}

Layout.defaultProps = {
  requireLogin: false,
}

export default withI18nTranslation(Layout)
