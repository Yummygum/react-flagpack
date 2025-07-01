> [!CAUTION]
> THIS PROJECT ONLY CONTAINS A PATCH TO MAKE `react-flagpack` WORK WITH REACT 19.
>
> IF YOU ENCOUNTER ANY ISSUES, PLEASE REPORT THEM IN THE `react-flagpack` REPO.
> 

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

This package depends on the files being injected into the static folder of the project.
React flagpack comes bundled with a CLI that will do this automatically for you, but you have to tell node to execute it.

Add the following to the scripts in package.json *Note that postinstall sometimes doesn't run with certain package managers, so you may need to run it manually*

```json
{
  "scripts": {
    // ...rest of your scripts
    "postinstall": "react-flagpack"
  },
  "dependencies": {
    "react-flagpack": "^2.0.5"
  }
}
```


This tool accepts the parameter "--framework" which can be used to pass the correct framework to it.
The default selected framework supports NextJS, create-react-app, Remix.

For Gastby support please provide the `--framework gatsby` option

## Usage

### Defining the component
Import the Flagpack component into any of your project's React components.
```js
import Flag from 'react-flagpack'
// # Optional but required for props other than code & size to work.
// Can also be imported in a css file using @import 'react-flagpack/dist/style.css';
import 'react-flagpack/dist/style.css'
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

## Migrating to 2.0.0
To migrate to react-flagpack 2.0.0 you will need to make some minor changes to your code base. First you will need to add react-flagpack to your post-install hook see [installation](#installation), then run yarn install (ensuring you are on at minimal react-flagpack 2.0.2).

After install you should see a flags folder in the public (or static) folder of your project.

Since react-flagpack styles are no longer injected in the Flag by default.
This change was made for two reasons:
- Server side support (the injecting relied on document)
- Not all users require the default styling so this caused unnecessary addition to bundle size

The new way of loading the CSS is by importing the default styles. You can do this in one of two ways.
```ts
// Component.tsx - In a component where flagpack is used
import 'react-flagpack/dist/style.css'
```

Or

```css
/* Global.css - Importing it in the global css file */
@import 'react-flagpack/dist/style.css';
```

## Support

[Frequently Asked Questions](https://flagpack.xyz/support/)

[Documentation](https://flagpack.xyz/docs/)

## Releases

You can find a changelog of Flagpack's releases on the [Releases page](https://github.com/Yummygum/react-flagpack/releases) on GitHub.

## Contribute

If you're interested in contributing to this project, great! Please see the [contributing document](CONTRIBUTING.md) how to set up you up.

## License

Flagpack is an open source project published under a [MIT license](LICENSE).
