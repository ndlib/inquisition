import merge from 'lodash.merge'

import { theme } from '@ndlib/gatsby-theme-marble/src/gatsby-plugin-theme-ui'

export default merge({}, theme, {
  colors: {
    primary: '#6A4422',
    primaryBright: '#925e2f',
    primaryDark: '#402914',
    secondary: '#981B1E',
    light: '#F2E3E3',
    lightDark: '#b76262',
    dark: '#603e1f',
  },
  links: {
  },
  cards: {
  },
  menus: {
    navTop: {
      '& div':{
        minWidth: ['100vw', '100vw', '100vw', '30.5rem'],
      },
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
