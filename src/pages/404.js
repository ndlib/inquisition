import React from 'react'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import Layout from '../components/layouts/Default'
import Seo from 'components/Internal/Seo'

const NotFoundPage = ({ location }) => {
  return (
    <Layout
      title='Page Not Found'
      location={location}
    >
      <Seo
        data={{}}
        location={location}
        title='The requested page could not be found'
        description='The requested page could not be found.'
      />
      <I18nextProvider i18n={i18next}>
        <p>Amoungst our weaponry are such diverse elements as ... </p>
        <p>I will come in again.</p>
      </I18nextProvider>
    </Layout>

  )
}

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default NotFoundPage
