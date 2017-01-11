# Lightbulb 💡

<p align="center">
  <em>Project shadows under elements based on the position of a light source.</em>
</p>
<p align="center">
  <img src="">
</p>

## Installation

```
yarn add lightbulb
```

## Usage

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
