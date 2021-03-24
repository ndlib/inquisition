import merge from 'lodash.merge'
import bootstrapTheme from '@theme-ui/preset-bootstrap'

import { theme } from '@ndlib/gatsby-theme-marble/src/gatsby-plugin-theme-ui'

export default merge({}, theme, bootstrapTheme, {
  colors: {
    primary: '#6A4422',
    secondary: '#981B1E',
    brandBar: '#6A4422',
    secondaryMuted: '#F2E3E3',
  },
  buttons: {
    primary: {
      bg: 'primary',
    },
    secondary: {
      bg: 'secondary',
    },
    secondaryMuted: {
      color: 'gray.10',
      bg: 'secondaryMuted',
    },
  },
  text: {
    default: {
      fontFamily: 'body',
      fontSize: 3,
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
    },
    heading: {
      color: 'primary',
    },
    pageTitle: {
      color: 'primary',
      margin: '1px 20px',
      fontFamily: 'title',
    },
  },
  links: {
    header: {
      '& a': {
        color: 'white',
        py: '25px',
        px: '25px',
        textDecoration: 'none',
        fontWeight: '600',
        fontFamily: 'heading',
      },
    },
    footer: {
      '& a': {
        color: 'white',
        py: '25px',
        px: '25px',
        textDecoration: 'none',
        fontWeight: '600',
        fontFamily: 'heading',
      },
    },
    vertical: {
      '& div': {
        px: '10px',
      },
      '& a': {
        display: 'block',
        py: '5px',
      },
    },
  },
  cards: {
    primary: {
      '& h2': {
        color: 'secondary',
        fontFamily: 'title',
      },
      '& figcaption div': {
        color: 'gray.9',
      },
    },
  },
  // ae9142
  styles: {
    Footer: {
      backgroundColor: 'gray.3',
      img: {
        margin: '0px',
      },

    },
    Main: {
      margin: ['1rem', '1rem auto', '1rem auto'],
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 50px - 70px - 64px - 1.8rem*2)',
      width: ['calc(100% - 2rem)', '1040px', '1040px'],
      '& a': {
        color: 'secondary',
      },
    },
    a: {
      color: 'secondary',
      wordBreak: 'break-word',
    },
  },
  fonts: {
    title: `
      'IM Fell English SC',
      Garamond,
      'Hoefler Text',
      'Times New Roman',
      Times,
      serif
    `,
    serif: `
      Garamond,
      'Hoefler Text',
      'Times New Roman',
      Times,
      serif
    `,
    heading:
    `
      Garamond,
      Hoefler Text,
      Times New Roman,
      Times,
      serif
    `,
  },
})
