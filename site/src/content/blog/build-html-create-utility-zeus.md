---
title: Build an HTML element creation utility ⚡
publishDate: 2022-09-08 02:50
tag: js,javascript,html,tutorial
---

# Zeus - an HTML library

Zeus&copy; allows you to create HTML elements and set their attributes in a completely different manner &ndash; all at once! Zeus allows you to create HTML elements and set their attributes in a completely different manner &ndash; all at once!

## Usage

First, get `⚡ Zeus 🦅` by doing any of the following:

- download the source code from [zeus.js](https://raw.githubusercontent.com/igorskyflyer/js-zeus/main/src/zeus.js),
- download the minified source code from [zeus.min.js](https://raw.githubusercontent.com/igorskyflyer/js-zeus/main/dist/zeus.min.js),
- download the release package from [zeus](https://github.com/igorskyflyer/js-zeus/releases/tag/v1.0.0) which contains both the original and minified source code &ndash; use only one of two `.js` files.

Next, import it into your project, e.g.

```html
<script src="script/zeus.js"></script>

<!-- or -->

<script src="script/zeus.min.js"></script>
```

Then, just call `zeus()` when you need to easily create your cool HTML elements, that's it! 🦸‍♂️

```js
// the redundant use of both the className and id is for illustration purposes only

// so, instead of using
// ❌
const span = document.createElement('span')
span.id = 'my-new-span'
span.className = 'test'
span.innerHTML = 'Hello world'

// or even worse, with setAttribute() 😱
// ❌
const span = document.createElement('span')
span.setAttribute('id', 'my-new-span')
span.setAttribute('class', 'test')
span.innerHTML = 'Hello world'

// use this instead
// ✅
const span = zeus('span', {
  id: 'my-new-span',
  className: 'test',
  innerHTML: 'Hello world'
})

// returns <span id="my-new-span" class="test">Hello world</span>
```
