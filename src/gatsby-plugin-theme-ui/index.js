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
  pageHeaders: {
    default: {

    },
    homepage: {

    },
  },
  sections: {
    default: {
      bg: 'white',
      maxWidth: '65rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      '& div.sectionContent': {
        maxWidth: '65rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'center',
        py: '2rem',
      },
      '& div.sectionImage': {
      },
    },
    fullBleed: {
      bg: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      mx: '5vw',
      pt: '2rem',
      '& div.sectionImage': {
        m: '-2rem 0 -2rem 5vw',
      },
      '& div.sectionContent': {
        maxWidth: '65rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'center',
        py: '2rem',
      },
    },
    fullBleedLight: {
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '100%',
        width: '100vw',
        zIndex: -1,
        bg: 'inherit',
      },
      bg: 'light',
      marginLeft: 'auto',
      marginRight: 'auto',
      px: '5vw',
      '& div.sectionImage': {
        m: '-1rem 0 -1rem 0',
      },
      '& div.sectionContent': {
        maxWidth: '65rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'center',
        py: '2rem',
        width: 'auto',
      },
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
    lede: {
      fontSize: 4,
    },
    pageTitle: {
      color: 'primary',
      fontFamily: 'title',
      fontWeight: '600',
      mt: '4rem',
      '::after': {
        content: '""',
        marginLeft: '-0.5em',
        marginTop: '0.2em',
        marginBottom: '0.7em',
        width: '1.5em',
        height: '0.1em',
        minHeight: '5px',
        bg: 'secondary',
        display: 'block',
      },
    },
    sectionTitle: {
      fontSize: 7,
      color: 'primary',
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
        py: '1px',
        color: 'secondary',
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
