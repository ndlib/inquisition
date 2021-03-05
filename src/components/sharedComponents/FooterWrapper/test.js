import React from 'react'
import { shallow } from 'enzyme'
import { useStaticQuery } from 'gatsby'
import Footer from './'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'

const sq = {
  menusJson: {
  },
}

test('Footer renders some divs with markdown text', () => {
  useStaticQuery.mockImplementationOnce(() => {
    return sq
  })
  const wrapper = shallow(<Footer location={{ location: '' }}><div id='test'>Children</div></Footer>)

  // test the children.
  //
  expect(wrapper.find(Menu).props().variant).toEqual('footer')
})
