import merge from 'lodash.merge'
import bootstrapTheme from '@theme-ui/preset-bootstrap'

import { theme } from '@ndlib/gatsby-theme-marble/src/gatsby-plugin-theme-ui'

const buttonShared = {
  fontSize: 3,
  px: '1.5rem',
  borderRadius: '.6em',
  bg: 'primary',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  '& a': {
    textDecoration: 'none',
  },
}

export default merge({}, theme, bootstrapTheme, {
  colors: {
    primary: '#6A4422',
    secondary: '#981B1E',
    brandBar: '#6A4422',
    light: '#F2E3E3',
    dark: '#603e1f',
    muted: '#F2E3E3',
  },
  buttons: {
    primary: {
      ...buttonShared,
      color: 'white',
      bg: 'primary',
      '& a': {
        ...buttonShared['& a'],
        color: 'white',
      },
    },
    secondary: {
      ...buttonShared,
      bg: 'secondary',
      color: 'white',
      '& a': {
        ...buttonShared['& a'],
        color: 'white',
      },
    },
    light: {
      ...buttonShared,
      color: 'text',
      bg: 'light',
      '& a': {
        ...buttonShared['& a'],
        color: 'text',
      },
    },
    inverse: {
      ...buttonShared,
      color: 'text',
      bg: 'white',
      '& a': {
        ...buttonShared['& a'],
        color: 'white',
      },
    },
  },
  sections: {
    default: {
      bg: 'white',
      gridTemplateColumns: '25% auto',
      maxWidth: '65rem',
    },
    fullBleed: {
      bg: 'light',
      gridTemplateColumns: 'calc(300px + 5vw) auto',
      marginBottom: '7rem',
    },
    textonly: {
      marginBottom: '7rem',
    },
  },
  sectionsContent: {
    default: {
    },
    fullBleed: {
      padding: '2rem',
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
        fontSize: '4',
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
