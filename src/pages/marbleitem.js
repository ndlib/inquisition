/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'

import Layout from '../layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import CollectionLayout from 'components/Pages/MarbleItem/CollectionLayout'
import ItemLayout from 'components/Pages/MarbleItem/ItemLayout'
import RelatedItemsFromSearch from 'components/Pages/MarbleItem/RelatedItemsFromSearch'

const MarbleItem = ({ data, location }) => {
  const { marbleItem, allMarbleFile } = data
  return (
    <Layout
      title={marbleItem.title}
      location={location}
    >
      <Seo
        data={data}
        location={location}
      />

      {
        marbleItem.display === 'collection' ? (
          <CollectionLayout
            location={location}
            marbleItem={marbleItem}
          />
        ) : (
          <ItemLayout
            location={location}
            marbleItem={marbleItem}
            allMarbleFile={allMarbleFile}
          />
        )
      }
      <RelatedItemsFromSearch marbleItem={marbleItem} />
    </Layout>
  )
}

MarbleItem.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default MarbleItem
