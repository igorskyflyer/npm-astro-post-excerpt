# Post Excerpt component for `Astro`

⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown files! 🚀

<br>
<br>

<p align="center">
<img src="https://raw.githubusercontent.com/igorskyflyer/npm-astro-post-excerpt/main/assets/demo.png" alt="Generated post excerpt">
<br>
<sub><code>&lt;PostExcerpt /&gt;</code> component generated excerpt</sub>
</p>

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

> **NOTE**: if you get a build error _"unknown file extension \".astro\" for @igor.dvlpr/astro-post-excerpt"_, you'll need to update your `astro.config.mjs` file and add the following property:

```js
vite: {
    ssr: {
      noExternal: ['astro', '@igor.dvlpr/astro-post-excerpt'],
    },
  }
```

See [#3820](https://github.com/withastro/astro/issues/3820) for more information.

<br>

## 🤹🏼‍♂️ Options

### post

```ts
post: MarkdownInstance<Record<string, any>>
```

**required** , represents the post whose excerpt you want to generate and render, usually obtained via [`Astro.glob()`](https://docs.astro.build/en/reference/api-reference/#astroglob), thus, you should insert this component inside your posts loop, see [`Astro API`](https://docs.astro.build/en/reference/api-reference/) for more info.

If this prop is not supplied or not valid, the component will throw an error.

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

If this prop is not valid, a warning will be output to the console.

 <br>

### ellipsis

```ts
ellipsis?: string
```

**optional**, controls the ellipsis string that should be appended to the post excerpt. Defaults to **"…"**.

If this prop is not valid, a warning will be output to the console.
