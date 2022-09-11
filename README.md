# Post Excerpt component for `Astro`

⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown files! 🚀

<br>

## 🕵🏼‍♂️ Usage

Install it by executing:

```shell
npm i -D "@igor.dvlpr/astro-post-excerpt"
```

then import it into your project:

<br>

`PreviewBlog.astro`

```jsx
import PostExcerpt from '@igor.dvlpr/astro-post-excerpt'

const { post } = Astro.props

<article>
	// other markup
  <p class="post-description">
    <Excerpt post={post}
					 words={20}
					 addEllipsis={true} />
  </p>
	// other markup
</article>
```

<br>

## 🤹🏼‍♂️ Options

<br>

### post

```ts
post: MarkdownInstance<Record<string, any>>
```

**required** , represents the post whose excerpt you want to generate and render, usually obtained via [`Astro.glob()`](https://docs.astro.build/en/reference/api-reference/#astroglob), thus, you should insert this component inside your posts loop, see [`Astro API`](https://docs.astro.build/en/reference/api-reference/) for more info.

If this prop is not supplied or not valid, the component will render an empty string.

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

**optional**, controls whether horizontal ellipsis "…" should be appended to the post excerpt. Defaults to **true**.

If this prop is not supplied or not valid, a warning will be output to the console.
