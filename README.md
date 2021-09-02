# Flagpack

Flagpack contains 250+ flag icons to easily use within your code project. Flagpack is an open source project and available for JavaScript frameworks/libraries React, Vue and Svelte.

![Flagpack. 260+ easily implementable flag icons to use in your design or code project. Open Source. Available for Sketch, Figma, Angular, Vue, and React. [www.flagpack.xyz](https://www.flagpack.xyz). Made with love by Yummygum. Graphic showing a list with the flags of Argentina, Croatia, Estonia, Kenia, Netherlands, and Scotland.](https://flagpack.xyz/meta-image.png)

[View documentation on flagpack.xyz](https://flagpack.xyz/docs/)

## react-flagpack
<p>
  <a href="https://www.npmjs.com/package/react-flagpack" target="_blank">
    <img src="https://img.shields.io/npm/v/react-flagpack.svg?style=flat" />
  </a>
  <a href="https://www.npmjs.com/package/react-flagpack" target="_blank">
    <img src="https://img.shields.io/npm/dt/react-flagpack.svg?style=flat" />
  </a>
  <a href="https://github.com/sponsors/Yummygum" target="_blank">
    <img src="https://img.shields.io/badge/Support-♥-E94AAA"  />
  </a>
  <a href="https://twitter.com/flagpack" target="_blank">
    <img src="https://img.shields.io/twitter/follow/flagpack.svg?style=social&label=follow"  />
  </a>
</p>

Flagpack for React is created using React v16.8. The Flagpack component has not been tested for compatibility with older versions of React.

## Installation

```bash
$: npm install react-flagpack --save
```

## Usage

### Defining the component
Import the Flagpack component into any of your project's React components.
```js
import Flag from 'react-flagpack'
```

### Use in JSX
```jsx
<Flag
  code="NL"
  gradient="real-linear"
  size="m"
  hasDropShadow
/>
```

## Available component configurations — Props

| Key   | Value   | Required | Default | Format |
|-------|-------|------|------|------|
| code |  String | false | 'NL' | [See all codes](https://flagpack.xyz/docs/flag-index/) |
| size |  String | false | 'L' | 'S', 'M' or 'L' |
| className |  String | false | - | - |
| hasDropShadow |  Boolean | false | false | - |
| hasBorder |  Boolean | false | true | - |
| hasBorderRadius | Boolean | false | true | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |

## Support

[Frequently Asked Questions](https://flagpack.xyz/support/)

[Documentation](https://flagpack.xyz/docs/)

## Releases

You can find a changelog of Flagpack's releases on the [Releases page](https://github.com/Yummygum/react-flagpack/releases) on GitHub.

## Contribute

If you're interested in contributing to this project, great! Please see the [contributing document](CONTRIBUTING.md) how to set up you up.

## License

Flagpack is an open source project published under a [MIT license](LICENSE).
