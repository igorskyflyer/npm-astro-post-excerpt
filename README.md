<p align="center">
  <img src="https://github.com/igorskyflyer/npm-astro-post-excerpt/raw/main/assets/post-excerpt-for-astro.png" alt="Logo of Post excerpt for Astro component">
</p>

<h1 align="center">Post Excerpt component for 🚀 Astro</h1>

<p align="center">
⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown files. Astro v2+ collections are supported as well! 💎
<br>
<strong>Works with all 3 major versions of Astro!</strong>
</p>

<br>

<div align="center">
 <img alt="npm" src="https://img.shields.io/npm/dm/@igor.dvlpr/astro-post-excerpt?style=flat-square">
</div>

<br>

<blockquote align="center">
Now featured on Astro's official <a href="https://astro.build/integrations?search=igor.dvlpr" target="_blank">Integrations library</a> 😍
</blockquote>

<br>

<p align="center">
<img src="https://raw.githubusercontent.com/igorskyflyer/npm-astro-post-excerpt/main/assets/demo.png" alt="Generated post excerpt">
<br>
<sub><code>&lt;PostExcerpt /&gt;</code> component generated excerpt</sub>
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
	</blockquote>
</div>

<br>
<br>

## 🕵🏼‍♂️ Usage

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
    <PostExcerpt post={post} words={20} addEllipsis={false} />
  </p>
{ /* other markup */ }
</article>
```

<br>

> ❗ **NOTE**: if you get a build error _"unknown file extension \".astro\" for @igor.dvlpr/astro-post-excerpt"_, you'll need to update your [`astro.config.mjs`](https://docs.astro.build/en/guides/configuring-astro/) file and add the following property:

```js
vite: {
    ssr: {
      noExternal: ['astro', '@igor.dvlpr/astro-post-excerpt'],
    },
  }
```

See [#3820](https://github.com/withastro/astro/issues/3820) for more information.

<br>

If you have migrated your Astro site to v2+ you can now use Collections for your posts loop. This component works with both v2+ and versions prior v2.

<br>

If you're upgrading this component while keeping your Astro installation <2, everything should work as expected since the introduced changes are backwards-compatible.

<br>

In case of an issue, submit it on the component's [Issues](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/new) page. You should provide a concise explanation of the issue you're facing and sample code - if applicable.

<br>

## 🤹🏼‍♂️ Options

### post

```ts
post: AstroMarkdownFile | AstroCollectionEntry
```

**required** , represents the post whose excerpt you want to generate and render. You should insert this component inside your posts loop:

- for `Astro >=2`, obtained via:

  - [`getCollection()`](https://docs.astro.build/en/reference/api-reference/#getcollection)- for posts loop,

  - [`getEntryBySlug()`](https://docs.astro.build/en/reference/api-reference/#getentrybyslug) - for single posts retrival,

- for `Astro <2`, obtained via [`Astro.glob()`](https://docs.astro.build/en/reference/api-reference/#astroglob).

If this prop is not supplied or not valid, the component will throw an error.

<br>

Types `AstroMarkdownFile` and `AstroCollectionEntry`are artificial and they correspond to `MarkdownInstance<Record<string, any>>` and `CollectionEntry<T>` respectfully.

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

<br>

### headings

```ts
headings?: PropHeadings
```

**optional**, controls whether the leading post headings should be stripped or preserved. Defaults to "**PropHeadings.Intact**".

<br>

Possible values:

- **`PropHeadings.Intact`** - leave the headings intact,

- **`PropHeadings.TextOnly`** - remove Markdown code but keep the headings text,

- `PropHeadings.None` - remove the headings completely.

<br>

If this prop is not valid, a warning will be output to the console.

<br>

### renderer

```ts
renderer?: PropRenderer
```

**optional**, controls the rendering of the post excerpt. Defaults to "**PropRenderer.Text**".

<br>

Possible values:

- **`PropRenderer.Text`** - render post excerpts as simple text, no HTML entities supported,

- `PropRenderer.Html` - render post excerpts as HTML, HTML entities supported,

- **`PropRenderer.Hybrid`** - render post excerpts as simple text but allow HTML entities as well.

<br>

If this prop is not valid, a warning will be output to the console.

<br>

> ❗ Note: due to the underlying changes in Astro v2+, posts are retrieved as Markdown only, thus, the options `PropRenderer.Html` and `PropRenderer.Hybrid` will yield the same result in Astro v2+, i.e. the option `PropRenderer.Html` will behave as `PropRenderer.Hybrid` since there are no HTML tags to render, only HTML entities. Astro <2 is unaffected by this.

<br>

> ✨ Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-astro-post-excerpt/blob/main/CHANGELOG.md).
