import React from 'react'
import renderer from 'react-test-renderer'

import Flag from '../Flag.tsx'

test('Should render a small dutch flag', () => {
  const component = renderer.create(
    <Flag
      code="NL"
      gradient="real-linear"
      size="m"
      dropshadow
    />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
