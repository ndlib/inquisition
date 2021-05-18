const path = require('path')
const elasticQuery = require('./content/elastic/query')
const elasticSettings = require('./content/elastic/settings')
const elasticMappings = require('./content/elastic/mappings')
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log('Using environment config:' + activeEnv)
const eV = '.env.' + activeEnv
require('dotenv').config({
  path: eV,
})

const siteUrl = 'https://marble.nd.edu'
const siteName = 'Inquisitio'
const siteDescription = 'Manuscript and print sources for the study of Inquisition history.'
const searchUrl = process.env.SEARCH_URL || ''
const searchIndex = process.env.SEARCH_INDEX || ''
const s3BucketName = process.env.S3_DEST_BUCKET || ''
// const allowRobots = process.env.ALLOW_ROBOTS === 'true' || false
const sourceGraphQlUrl = process.env.GRAPHQL_API_URL || ''
const graphQlKey = process.env.GRAPHQL_API_KEY || ''

module.exports = {
  flags: {
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: false,
  },
  siteMetadata: {
    title: 'Inquisitio',
    subTitle: 'Hesburgh Libraries Rare Books & Special Collections',
    author: 'University of Notre Dame Hesburgh Libraries Rare Books & Special Collections',
    description: siteDescription,
    siteUrl: siteUrl,
    languages: {
      default: 'en',
      allowed: ['en'],
    },
  },
  plugins: [
    {
      resolve: '@ndlib/gatsby-source-appsync-marble',
      options: {
        url: sourceGraphQlUrl,
        key: graphQlKey,
        website: 'inquisitions',
        // updateFixtures: true,
        // useFixtures: true,
        // debug: true,
        // logIds: true,
        mergeItems: [],
      },
    },
    {
      resolve: '@ndlib/gatsby-plugin-marble-elasticsearch',
      options: {
        url: searchUrl,
        searchIndex: searchIndex,
        region: 'us-east-1',
        query: elasticQuery,
        selector: (data) => data.allMarbleItem.nodes.map(node => node.searchData),
        settings: elasticSettings,
        mappings: elasticMappings,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/essays'),
        name: 'essay',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/themes'),
        name: 'theme',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/pages'),
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
      // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'menu',
        path: 'content/json/menus',
      },
    },
    {
      resolve: '@ndlib/gatsby-theme-marble',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: siteUrl + 'sitemap.xml',
        env: {
          development: {
            policy: [
              { userAgent: '*', disallow: ['/'] },
            ],
          },
          production: {
            policy: [
              { userAgent: '*', disallow: ['/'] },
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: siteName,
        description: siteDescription,
        start_url: '/',
        background_color: '#ae9142',
        theme_color: '#ae9142',
        display: 'minimal-ui',
        icon: path.join(__dirname, 'content/images/manifestLogo.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: s3BucketName,
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://static.nd.edu',
          'https://image-iiif.library.nd.edu',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'content', 'images'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
