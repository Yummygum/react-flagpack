# React Flag Pack

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
  dropshadow
/>
```
</br>

## Available component configurations

| key   | value   | required | default | format |
|-------|-------|------|------|------|
| country code |  String | true | - | see all codes |
| size |  String | false | l | 's', 'm' or 'l' |
| className |  String | false | - | - |
| dropshadow |  boolean | false | false | - |
| hasBorder |  boolean | false | true | - |
| hasBorderRadius | boolean | false | true | - |
| customBorderRadius |  String | false | - | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |


## Build Dist
```bash
# install dependencies
npm install

# build for prod
npm run build
```
