import merge from 'lodash.merge'

import { theme } from '@ndlib/gatsby-theme-marble/src/gatsby-plugin-theme-ui'

export default merge({}, theme, {
  colors: {
    primary: '#6A4422',
    secondary: '#981B1E',
    light: '#F2E3E3',
    lightDark: '#b76262',
    dark: '#603e1f',
  },
  links: {

  },
  cards: {
  },
  // ae9142
  styles: {
    Footer: {
      px: '5vw',
      py: '3rem',
      backgroundColor: 'primary',
      '& p': {
        fontSize: 3,
      },
      img: {
        margin: '0px',
      },
    },
    a: {
      color: 'primary',
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
