/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import typy from 'typy'

export const query = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "theme"}}}, sort: {fields: frontmatter___sort}) {
      edges {
        node {
          id
          frontmatter {
            title
            marbleId
            slug
          }
        }
      }
    }
    menusJson(id: {eq: "historyEssays"}) {
      id
      label
      items {
        id
        label
        link
        icon
        selectedPatterns
      }
    }
  }
`

export const InquisitionLeftNav = ({ location }) => {
  const data = useStaticQuery(query)
  const { allMarkdownRemark, menusJson } = data
  const menu = typy(menusJson, 'items').safeArray
  console.log(allMarkdownRemark)
  const menuItems = allMarkdownRemark.edges.map(l => {
    return { id: l.node.frontmatter.title, label: l.node.frontmatter.title, link: l.node.frontmatter.slug, selectedPatterns: ['^/' + l.node.frontmatter.slug] }
  })

  return (
    <div>
      <Menu variant='vertical' location={location} items={menuItems} label={<Link className={location.pathname.match('^/theme.*') ? 'selected' : ''} to='/themes'>Themes</Link>} expand={location.pathname.match('^/theme.*')} />
      <Menu variant='vertical' location={location} items={menu} label={<Link to='/essay-brief-history' className={location.pathname.match('^/essay.*') ? 'selected' : ''}>Inquisitions History</Link>} expand={location.pathname.match('^/essay.*')} />
    </div>
  )
}

InquisitionLeftNav.propTypes = {
  location: PropTypes.object.isRequired,
}

InquisitionLeftNav.defaultProps = {
  variant: 'default',
}

export default InquisitionLeftNav
