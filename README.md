<div align="center">
  <img src="https://github.com/igorskyflyer/npm-astro-post-excerpt/raw/main/assets/post-excerpt-for-astro.png" alt="Icon of Post Excerpt component for 🚀 Astro" width="256" height="256">
<h1 align="center">Post Excerpt component for 🚀 Astro</h1>
</div>

<br>

<div align="center">
  ⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown and MDX files using Astro collections! 💎
</div>

<br>

<blockquote align="center">
Now featured in Astro's official <a href="https://astro.build/integrations?search=igor.dvlpr" target="_blank">Integrations library</a>. 😍
</blockquote>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

---

## 🤖 Features

- 🔌 Plug-and-play with Astro props
- 📜 Parses Markdown/MDX safely
- 🧹 Strips YAML front matter
- 💬 Preserves whitespace
- ✂️ Trims by word or length
- 🤖 Adds ellipsis smartly
- 🔧 Configurable props
- 🚫 No client-side JS
- 🧪 Warns on invalid input + has fallbacks

---

## 🕵🏼 Usage

<p align="center">
<img src="https://raw.githubusercontent.com/igorskyflyer/npm-astro-post-excerpt/main/assets/demo.png" alt="Generated post excerpt">
<br>
<sub><code>&lt;PostExcerpt /&gt;</code> component generated excerpt</sub>
</p>

<br>

Install it by executing:

```shell
npm i -D "@igor.dvlpr/astro-post-excerpt"
```

then import it into your project:

<br>

`PostPreview.astro`

```jsx
import PostExcerpt from '@igor.dvlpr/astro-post-excerpt'

const { post } = Astro.props

<article>
{ /* other markup */ }
  <p class="post-excerpt">
    <PostExcerpt
      post={post}
      words={20}
      addEllipsis={false} />
  </p>
{ /* other markup */ }
</article>
```

<br>

> ❗ **NOTE**: if you get a build error _"unknown file extension \".astro\" for @igor.dvlpr/astro-post-excerpt"_, you'll need to update your [`astro.config.mjs`](https://docs.astro.build/en/guides/configuring-astro/) file and add the following property:

```js
vite: {
    ssr: {
      noExternal: ['@igor.dvlpr/astro-post-excerpt'],
    },
  }
```

See [#3820](https://github.com/withastro/astro/issues/3820) for more information.

<br>

## 🤹🏼‍♂️ Options

### post

```ts
post: IAstroCollectionEntry
```

**required** , represents the post whose excerpt you want to generate and render. You should insert this component inside your posts loop, obtained via: [`getCollection()`](https://docs.astro.build/en/reference/modules/astro-content/#getcollection).

If this prop is not supplied or not valid, the component will throw a `fatal` error.

<br>

### words

```ts
words?: number
```

**optional**, represents the number of words the generated excerpt should have in total. Be aware that the prop [`maxLength`](#maxlength) has precedence over this prop but you can use both props simultaneously.

Defaults to **40**.

If this prop is not supplied or not valid, a warning will be output to the console.

<br>

### maxLength

```ts
maxLength?: number
```

**optional**, represent the max length of the generated excerpt. Be aware that this prop has precedence over the [`words`](#words) prop but you can use both props simultaneously.

Defaults to **0** (unlimited).

If this prop is not supplied or not valid, a warning will be output to the console.

 <br>

### addEllipsis

```ts
addEllipsis?: boolean
```

**optional**, controls whether an ellipsis should be appended to the post excerpt. Defaults to **true**.

If this prop is not valid, a warning will be output to the console.

 <br>

### smartEllipsis

```ts
smartEllipsis?: boolean
```

**optional**, controls whether the appended ellipsis should be aware of how the excerpt ends, i.e. if the excerpt ends with a punctuation symbol the ellipsis won't be appended. Defaults to **true**.

**Note**: punctuation symbols that this component is aware of are:

- `"."`
- `","`
- `"?"`
- `"!"`
- `";"`
- `"…"`

If this prop is not valid, a warning will be output to the console.

 <br>

### ellipsis

```ts
ellipsis?: string
```

**optional**, controls the ellipsis string that should be appended to the post excerpt. Defaults to **"…"**.

If this prop is not valid, a warning will be output to the console.

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-astro-post-excerpt/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-astro-post-excerpt/blob/main/LICENSE.txt).

---

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

---

## 🧬 Related

[@igor.dvlpr/rawelement](https://www.npmjs.com/package/@igor.dvlpr/rawelement)

> _🐯 A utility that lets you manipulate HTML elements, their attributes and innerHTML as strings, on the go and then render the modified HTML. Very useful in SSG projects. 💤_

<br>

[@igor.dvlpr/astro-escaped-component](https://www.npmjs.com/package/@igor.dvlpr/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@igor.dvlpr/astro-saferesource](https://www.npmjs.com/package/@igor.dvlpr/astro-saferesource)

> _🎐 Adds CSP-compliant inline scripts and styles to Astro! 🎠_

<br>

[@igor.dvlpr/astro-easynav-button](https://www.npmjs.com/package/@igor.dvlpr/astro-easynav-button)

> _🧭 Add an easy-to-use navigational button (jump to top/bottom) to your Astro site. 🔼_

<br>

[@igor.dvlpr/vscode-folderpicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker)

> _✨ Provides a custom Folder Picker API + UI for Visual Studio Code. 🎨_

---

## 👨🏻‍💻 Author

Created by **Igor Dimitrijević** ([_@igorskyflyer_](https://github.com/igorskyflyer/)).
