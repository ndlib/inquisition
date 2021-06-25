/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import InquisitionFooter from '../InquisitionFooter'
import NDBrandHeader from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Header'
import NDBrandHeroBackgroundOnly from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Hero/BackgroundOnly'
import NDBrandLayout from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Layout'
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
    pageHeader = (<NDBrandHeroBackgroundOnly location={location} />)
  }

  return (
    <div>
      <SkipToMain />
      <NDBrandLayout
        location={location}
        pageHeader={pageHeader}
        siteFooter={<InquisitionFooter location={location} />}
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
