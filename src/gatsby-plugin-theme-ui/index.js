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
    menuHeading: {
      color: 'primary',
      py: '1em',
    },
    lede: {
      fontSize: 4,
    },
    pageTitle: {
      color: 'primary',
      fontWeight: '100',
      fontSize: 7,
      ml: '0',
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
      '& h3': {
        color: 'primary',
        p: '0',
      },
      '& div': {
        px: '.5rem',
        pb: '1rem',
        '& a': {
          padding: '0.7em 1em',
          '&.selected': {
            fontWeight: '700',
          },
        },
      },
      '& a': {
        py: '1rem',
        display: 'block',
        color: 'primary',
        textDecoration: 'none',
        '&:hover': {
          bg: 'var(--theme-ui-colors-light)',
        },
        '&.selected': {
          fontWeight: '700',
        },
      },
    },
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
