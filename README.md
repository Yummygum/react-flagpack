# React Flagpack

> A project made by Yummygum

## Installation

```bash
npm install react-flagpack --save
```

## Usage
```js
// use own name as variable
import Flag from 'react-flagpack'
```

Use in JSX:
```html
<Flag
  code="NL"
  gradient="real-linear"
  size="m"
  hasDropShadow
/>
```
</br>

## Available component configurations

| key   | value   | required | default | format |
|-------|-------|------|------|------|
| country code |  String | true | - | see all codes |
| size |  String | false | l | 's', 'm' or 'l' |
| className |  String | false | - | - |
| hasDropShadow |  boolean | false | false | - |
| hasBorder |  boolean | false | true | - |
| hasBorderRadius | boolean | false | true | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |


## Build Dist
```bash
# install dependencies
npm install

# build for prod
npm run build
```

## Releasing
To release a new version you'll need to make sure all changes commits are done and pushed. After that you'll need to decide which release type you want to use. The release types are; patch (0.0.1), minor (0.1.0), or major (1.0.0).
```
npm version <release_type>
```
This will update the version number in the `package.json`, and will add a git tag automatically. Next you'll need to push the git tag to the remote.
```
git push --tags origin main
```
After that you'll need to publish to npm.
```
npm publish
```

When you're confident with the release, make sure the version tag is also released at GitHub.
