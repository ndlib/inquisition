import React from 'react'
import { shallow } from 'enzyme'
import Footer from './'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'

test('Footer renders some divs with markdown text', () => {
  const wrapper = shallow(<Footer location={{ location: '' }}><div id='test'>Children</div></Footer>)

  // test the children.
  //
  expect(wrapper.find(Menu).props().menu).toEqual('footer')
})
