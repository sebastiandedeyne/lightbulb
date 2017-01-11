# Lightbulb

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/v/lightbulb.svg?style=flat-square)](https://www.npmjs.com/package/lightbulb)

Project shadows under elements based on the position of a light source.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/11269635/21862518/d9d0c496-d839-11e6-9b7c-ce506df50ba2.png">
</p>

## Installation

```
yarn add lightbulb
```

## Usage

### Using the mouse as a light source

```js
import { mouse as lightbulb } from 'lightbulb';

lightbulb({
    container: '.js-lightbulb-container',
    item: '.js-lightbulb-item',
    distance: 20,
    spread: '20px',
    color: 'rgba(0, 0, 0, .2)',
    inset: false,
});
```

## Example

Build and run the example:

```
yarn
yarn run build:example
open ./example/index.html
```

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please check the [LICENSE](https://github.com/sebastiandedeyne/yaml_front_matter/blob/master/LICENSE.md) for more information.
