import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import SkipToMain from '@ndlib/gatsby-theme-marble/src/components/Layout/PageWrapper/SkipToMain'

const App = ({
  children,
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
    <>
      <SkipToMain />
      {children}
    </>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default App
