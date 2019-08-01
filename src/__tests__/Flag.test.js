import React from 'react'
import renderer from 'react-test-renderer'

import Flag from '../Flag.tsx'

const IMG_URL = 'https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg'

test('Should render a small dutch flag', () => {
  const component = renderer.create(
    <Flag
      code="NL"
      size="s"
    />
  )

  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree.props.className).toBe('flag size-s border border-radius')
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
  expect(tree.props.className).toBe('flag size-m border border-radius')
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
  expect(tree.props.className).toBe('flag size-l border border-radius')
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
  expect(tree.props.className).toBe('flag size-l dropshadow border border-radius')
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
  expect(tree.props.className).toBe('flag size-l border border-radius custom-flag-class')
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
  expect(tree.props.className).toBe('flag real-linear size-l border border-radius')
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
  expect(tree.props.className).toBe('flag top-down size-l border border-radius')
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
  expect(tree.props.className).toBe('flag real-circular size-l border border-radius')
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
  expect(tree.props.className).toBe('flag size-l border-radius')
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
  expect(tree.props.className).toBe('flag size-l border border-radius')
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
  expect(tree.props.className).toBe('flag size-l border border-radius')
  expect(tree.props.style.borderRadius).toBe('10px')
})

test('Should render a large Italian flag with no border radius', () => {
  const component = renderer.create(
    <Flag
      code="IT"
      hasBorderRadius={false}
    />
  )

    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree.props.className).toBe('flag size-l border')
})

// Tests what happens if there is no flag code given along.
test('Component with no flag code given along.', () => {
  const component = renderer.create(
    <Flag />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Test if image url is correct (Japan - large)', () => {
  const component = renderer.create(
    <Flag
      code="JO"
    />
  )

  let tree = component.toJSON()
  expect(tree.children[0].props.src).toBe(`${IMG_URL}/l/JO.svg?sanitize=true`)
})

test('Test if image url is correct (Japan - medium)', () => {
  const component = renderer.create(
    <Flag
      code="JO"
      size="m"
    />
  )

  let tree = component.toJSON()
  expect(tree.children[0].props.src).toBe(`${IMG_URL}/m/JO.svg?sanitize=true`)
})

test('Test if image url is correct (Japan - small)', () => {
  const component = renderer.create(
    <Flag
      code="JO"
      size="s"
    />
  )

  let tree = component.toJSON()
  expect(tree.children[0].props.src).toBe(`${IMG_URL}/s/JO.svg?sanitize=true`)
})

test('Test alpha-3 code (Norway - small)', () => {
  const component = renderer.create(
    <Flag
      code="NOR"
      size="s"
    />
  )

  let tree = component.toJSON()
  expect(tree.children[0].props.src).toBe(`${IMG_URL}/s/NO.svg?sanitize=true`)
})

test('Test Numeric code (Canada - medium)', () => {
  const component = renderer.create(
    <Flag
      code="124"
      size="m"
    />
  )

  let tree = component.toJSON()
  expect(tree.children[0].props.src).toBe(`${IMG_URL}/m/CA.svg?sanitize=true`)
})
