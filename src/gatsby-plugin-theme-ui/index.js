import merge from 'lodash.merge'
import { theme } from '@ndlib/gatsby-theme-marble/src/gatsby-plugin-theme-ui'
export default merge({}, theme, {
  colors: {
    primary: '#981B1E',
    secondary: '#6A4422',
    brandBar: '#6A4422',
  },
  layout: {
    titleBox: {
      backgroundColor: 'red',
      font: 'title',
    },
  },
  card: {
    label: {
      color: 'blue',
    },
  },
  // ae9142
  styles: {
    Main: {
      margin: ['1rem', '1rem auto', '1rem auto'],
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 50px - 70px - 64px - 1.8rem*2)',
      width: ['calc(100% - 2rem)', '1040px', '1040px'],
    },
    h1: {
      color: 'secondary',
      fontWeight: '200',
    },
    h2: {
      color: 'secondary',
      fontWeight: '200',
    },
    h3: {
      color: 'secondary',
      fontWeight: '200',
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
