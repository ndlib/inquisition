module.exports = {
  site: {
    siteMetadata: {
      title: 'Inquisitio',
      description: 'Manuscript and print sources for the study of Inquisition history.',
      author: 'University of Notre Dame Hesburgh Libraries Rare Books & Special Collections',
      siteUrl: 'https://inquisition.library.nd.edu',
      languages: {
        default: 'en',
      },
    },
  },
  file: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#d8c8c8',
        images: {
          fallback: {
            src: '/static/6885db5588a69b9d33aa4954c2d5a026/dabf6/banner.jpg',
            srcSet: '/static/6885db5588a69b9d33aa4954c2d5a026/5ecaf/banner.jpg 400w,\n/static/6885db5588a69b9d33aa4954c2d5a026/37a84/banner.jpg 800w,\n/static/6885db5588a69b9d33aa4954c2d5a026/dabf6/banner.jpg 1600w',
            sizes: '(min-width: 1600px) 1600px, 100vw',
          },
          sources: [
            {
              srcSet: '/static/6885db5588a69b9d33aa4954c2d5a026/b489f/banner.avif 400w,\n/static/6885db5588a69b9d33aa4954c2d5a026/8a12d/banner.avif 800w,\n/static/6885db5588a69b9d33aa4954c2d5a026/defc5/banner.avif 1600w',
              type: 'image/avif',
              sizes: '(min-width: 1600px) 1600px, 100vw',
            },
            {
              srcSet: '/static/6885db5588a69b9d33aa4954c2d5a026/40e6e/banner.webp 400w,\n/static/6885db5588a69b9d33aa4954c2d5a026/31990/banner.webp 800w,\n/static/6885db5588a69b9d33aa4954c2d5a026/08da8/banner.webp 1600w',
              type: 'image/webp',
              sizes: '(min-width: 1600px) 1600px, 100vw',
            },
          ],
        },
        width: 1600,
        height: 200,
      },
    },
  },
  menusJson: {
    id: 'header',
    label: '',
    items: [
      {
        id: 'top-home',
        label: 'Home',
        link: '/',
      },
      {
        id: 'top-browse',
        label: 'Browse',
        link: '/search',
      },
      {
        id: 'top-essays',
        label: 'Themes',
        link: '/browse',
      },
      {
        id: 'top-about',
        label: 'About',
        link: '/about',
      },
    ],
  },
}
