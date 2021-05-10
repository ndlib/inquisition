/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

export const NDBrandBreadcrumbs = ({ location, variant, breadcrumbs, currentPageTitle }) => {
  const sx = {
    m: '0 0 2.5em',
    p: '0',
    listStyle: 'none',
    fontSize: 1,
    '& li': {
      display: 'inline-block',
      mr: '0.75rem',
    },
    '& a': {
      color: 'gray.7',
      mr: '0.75rem',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }
  return (
    <ol varaint={'breadcrumbs.' + variant} sx={sx}>
      <li><Link to='/'>Home</Link> › </li>
      {breadcrumbs.map((item) => {
        return (<li key={item.url}><Link to={item.url}>{item.title}</Link>›</li>)
      })}
      <li>{currentPageTitle} › </li>
    </ol>
  )
}

NDBrandBreadcrumbs.propTypes = {
  variant: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  currentPageTitle: PropTypes.string.isRequired,
}

NDBrandBreadcrumbs.defaultProps = {
  variant: 'default',
}

export default NDBrandBreadcrumbs
