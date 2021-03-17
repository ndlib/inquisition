import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery } from 'gatsby'
import AboutTemplate from '../src/templates/about'
import Store from '@ndlib/gatsby-theme-marble/src/store/ReduxWrapper'
import staticQuery from '../__mocks__/staticQueryHelper'

const testData = {
  markdownRemark: {
    html: 'html!',
    frontmatter: {
      title: 'title',
    },
  },
}

describe('about page', () => {
  it('renders correctly', () => {
    useStaticQuery.mockImplementation(() => staticQuery)

    const tree = renderer
      .create(<Store>
        <AboutTemplate location={{}} data={testData} />
      </Store>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
