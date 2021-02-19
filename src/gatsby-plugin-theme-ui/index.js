import merge from 'lodash.merge'
import { theme } from '@ndlib/gatsby-theme-marble/src/gatsby-plugin-theme-ui'
export default merge({}, theme, {
  colors: {
    primary: '#6A4422',
    secondary: 'gray',
    attention: '#981B1E',
    brandBar: '#302205',
  },
  // ae9142
  styles: {
    Main: {
      margin: ['1rem', '1rem auto', '1rem auto'],
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 50px - 70px - 64px - 1.8rem*2)',
      width: ['calc(100% - 2rem)', '1040px', '1040px'],
    },
  },
  fonts: {
    title: `
      'IM Fell English SC',
      Garamond,
      Hoefler Text,
      Times New Roman,
      Times,
      serif
    `,
    serif: `
      Garamond,
      Hoefler Text,
      Times New Roman,
      Times,
      serif
    `,
  },

})
