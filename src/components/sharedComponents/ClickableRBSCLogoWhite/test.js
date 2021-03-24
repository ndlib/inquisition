import React from 'react'
import renderer from 'react-test-renderer'
import ClickableRBSCLogoWhite from './'

describe('rbsc logo', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ClickableRBSCLogoWhite width={100} height={100} variant='variant' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('sets width and heigh on the image', () => {
    const tree = renderer
      .create(<ClickableRBSCLogoWhite width={50} height={100} variant='variant' />)
      .toJSON()

    expect(tree.children[0].children[0].props.height).toEqual(100)
    expect(tree.children[0].children[0].props.width).toEqual(50)
    expect(tree.children[0].children[0].props.alt).toEqual('Rare Books & Special Collections, Hesburgh Libraries, University of Notre Dame')
  })
})
