# @cfware/full-center

![Tests][tests-status]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Web Component to center content vertically and horizontally.


### Install @cfware/full-center

```sh
npm i @cfware/full-center
```


## Usage

Import to your application:
```js
import '@cfware/full-center';
```

Use to center content:
```html
<div class="container-class" style="display: flex">
	<full-center>
		<div>This will be in the center of the container element.</div>
	</full-center>
</div>
```

The parent element must have the style `display: flex` for this element to work.


[npm-image]: https://img.shields.io/npm/v/@cfware/full-center.svg
[npm-url]: https://npmjs.org/package/@cfware/full-center
[tests-status]: https://github.com/cfware/full-center/workflows/Tests/badge.svg
[gk-image]: https://badges.greenkeeper.io/cfware/full-center.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/full-center.svg
[downloads-url]: https://npmjs.org/package/@cfware/full-center
[license-image]: https://img.shields.io/npm/l/@cfware/full-center.svg
