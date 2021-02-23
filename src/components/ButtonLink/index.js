/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MaterialButton from '@ndlib/gatsby-theme-marble/src/components/Internal/MaterialButton'

export const ButtonLink = ({
  title, // page title to be placed inside main
  target,
}) => {
  return (
    <MaterialButton primary wide onClick={() => {}}>
      <Link to={target}>
        <span sx={{ color: 'white' }}>{title}</span>
      </Link>
    </MaterialButton>
  )
}

ButtonLink.propTypes = {
  title: PropTypes.string,
  target: PropTypes.string,
}

export default ButtonLink
