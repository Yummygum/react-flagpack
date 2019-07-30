import React from 'react'
import renderer from 'react-test-renderer'

import Flag from '../Flag.tsx'

test('Should render a small dutch flag', () => {
  const component = renderer.create(
    <Flag
      code="NL"
      size="s"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a medium dutch flag', () => {
  const component = renderer.create(
    <Flag
      code="NL"
      size="m"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large dutch flag', () => {
  const component = renderer.create(
    <Flag
      code="NL"
      size="l"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large US flag with drop shadow', () => {
  const component = renderer.create(
    <Flag
      code="US"
      dropshadow
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large US flag with a custom classname', () => {
  const component = renderer.create(
    <Flag
      code="US"
      className="custom-flag-class"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large Belgium flag with a real-linear gradient', () => {
  const component = renderer.create(
    <Flag
      code="BE"
      gradient="real-linear"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large Belgium flag with a top-down gradient', () => {
  const component = renderer.create(
    <Flag
      code="BE"
      gradient="top-down"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large Belgium flag with a real-circular gradient', () => {
  const component = renderer.create(
    <Flag
      code="BE"
      gradient="real-circular"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large Belgium flag without a border.', () => {
  const component = renderer.create(
    <Flag
      code="BE"
      hasBorder={false}
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large Italian flag with a border.', () => {
  const component = renderer.create(
    <Flag
      code="IT"
      hasBorder={true}
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render a large Italian flag with a 10px border radius.', () => {
  const component = renderer.create(
    <Flag
      code="IT"
      customBorderRadius="10px"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

