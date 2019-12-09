# @calipsa/timer

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

## Installation
```bash
# using npm:
npm install --save @calipsa/timer

# or if you like yarn:
yarn add @calipsa/timer
```

## Usage
```javascript
import timer from '@calipsa/timer'

const end = timer()
// do something
const duration = end()
console.log('Time elapsed:', duration, 'ms')
```

[npm-url]: https://npmjs.org/package/@calipsa/timer
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/timer.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/timer.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/timer
[david-dm-image]:https://david-dm.org/inker/@calipsa/timer.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/timer#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/timer/dev-status.svg
