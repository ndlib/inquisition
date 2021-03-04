/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Button } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const InquisitionButtonLink = ({
  title, // page title to be placed inside main
  target,
}) => {
  return (
    <Button sx={{ backgroundColor: 'primary' }} onClick={() => {}}>
      <Link to={target}>
        <span sx={{ color: 'white' }}>{title}</span>
      </Link>
    </Button>
  )
}

InquisitionButtonLink.propTypes = {
  title: PropTypes.string,
  target: PropTypes.string,
}

export default InquisitionButtonLink
