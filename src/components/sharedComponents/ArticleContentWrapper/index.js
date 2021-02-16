import React from 'react'
import PropTypes from 'prop-types'
import { Main, BaseStyles } from 'theme-ui'
import ReturnToSearch from 'components/Internal/ReturnToSearch'

const ArticleContentWrapper = ({
  title,
  children,
  location,
}) => {
  return (
    <Main id='mainContent'>
      <ReturnToSearch location={location} />
      <article>
        {title ? <BaseStyles><h1>{title}</h1></BaseStyles> : null}
        {children}
      </article>
    </Main>
  )
}

ArticleContentWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

ArticleContentWrapper.defaultProps = {
  title: null,
}
export default ArticleContentWrapper
