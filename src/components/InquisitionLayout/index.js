/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { jsx, Paragraph } from 'theme-ui'
import PropTypes from 'prop-types'
import MarbleBrandFooter from '../sharedComponents/MarbleBrandFooter'
import NDBrandHeader from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Header'
import NDBrandEmptyPageHeader from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Hero/NoHeader'
import NDBrandLayout from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Layout'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import ClickableRBSCLogoWhite from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Logos/ClickableRBSCLogoWhite'
import Link from '@ndlib/gatsby-theme-marble/src/components/Shared/Link'
import queryString from 'query-string'
import SkipToMain from '@ndlib/gatsby-theme-marble/src/components/Shared/SkipToMain'

const InquisitionLayout = ({ location, children, pageHeader }) => {
  const [qs] = useState(queryString.parse(location.search) || {})
  useEffect(() => {
    const scrollTo = document.querySelector(`#${qs.scrollto}`)
    if (scrollTo) {
      scrollTo.scrollIntoView()
    } else {
      document.querySelector('#gatsby-focus-wrapper').scrollTop = 0
    }
  })
  if (!pageHeader) {
    pageHeader = (<NDBrandEmptyPageHeader location={location} />)
  }
  return (
    <div>
      <SkipToMain />
      <NDBrandLayout
        location={location}
        pageHeader={pageHeader}
        siteHeader={<NDBrandHeader location={location} />}
        siteFooter={
          <div>
            <NDBrandSection location={location} variant='fullBleedLight' sx={{ py: '3rem', mb: 0, justifyContent: 'center' }}>
              <Paragraph sx={{ maxWidth: '65rem' }}>
                For more information about the collection, for appointments to view items for research purposes, or for rights and reproductions,
                please email us at <Link to='mailto:rarebooks@nd.edu'>rarebooks@nd.edu</Link> or visit <Link to='https://rarebooks.library.nd.edu/using/'>our website</Link>.
              </Paragraph>
            </NDBrandSection>
            <MarbleBrandFooter location={location} logo={(<ClickableRBSCLogoWhite />)} />
          </div>
        }
      >
        {children}
      </NDBrandLayout>
    </div>
  )
}

InquisitionLayout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  pageHeader: PropTypes.object,
}
export default InquisitionLayout
