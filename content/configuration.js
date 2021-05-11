// configure environment variables
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log('Using environment config:' + activeEnv)
const eV = '.env.' + activeEnv
require('dotenv').config({
  path: eV,
})

const searchUrl = process.env.SEARCH_URL || ''
const searchIndex = process.env.SEARCH_INDEX || ''
const s3BucketName = process.env.S3_DEST_BUCKET || ''
const skipMetadataPrune = process.env.SKIP_METADATA_PRUNE || ''
const onlySearchChildnodes = process.env.ONLY_SEARCH_CHILDNODES || ''

console.table([
  { variable: 'SEARCH_INDEX:', value: searchIndex },
  { variable: 'SEARCH_URL:', value: searchUrl },
  { variable: 'S3_DEST_BUCKET:', value: s3BucketName },
  { variable: 'SKIP_METADATA_PRUNE:', value: skipMetadataPrune },
  { variable: 'ONLY_SEARCH_CHILDNODES:', value: onlySearchChildnodes },
])

module.exports = {
  siteMetadata: {
    title: 'Inquisitio',
    subTitle: 'Hesburgh Libraries Rare Books & Special Collections',
    author: 'University of Notre Dame Hesburgh Libraries Rare Books & Special Collections',
    description: 'Manuscript and print sources for the study of Inquisition history.',
    siteUrl: 'https://inquisition.library.nd.edu/',
    useFixtures: false,
    languages: {
      default: 'en',
      allowed: ['en'],
    },
  },
}
