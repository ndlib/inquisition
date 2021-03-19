import merge from 'lodash.merge'
import { theme } from '@ndlib/gatsby-theme-marble/src/gatsby-plugin-theme-ui'

export default merge({}, theme, {
  colors: {
    primary: '#981B1E',
    secondary: '#6A4422',
    brandBar: '#6A4422',
  },
  buttons: {
    primary: {
      bg: 'primary',
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
  card: {
    primary: {
      '& h2': {
        color: 'primary',
        fontFamily: 'title',
      },
      '& figcaption div': {
        color: 'gray.4',
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
    },
    a: {
      color: 'primary',
      wordBreak: 'break-word',
    },
    h1: {
      color: 'secondary',
      fontWeight: '400',
    },
    h2: {
      color: 'secondary',
      fontWeight: '400',
    },
    h3: {
      color: 'secondary',
      fontWeight: '400',
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
