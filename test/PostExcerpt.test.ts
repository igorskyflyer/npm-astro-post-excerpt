// @vitest-environment happy-dom
import { renderAstroComponent } from '@igor.dvlpr/astro-render-component'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import PostExcerpt from '../PostExcerpt.astro'
import type { Props } from '../src/Props'
import { IAstroCollectionEntry } from '../src/interfaces/IAstroCollectionEntry'

function readFile(path: string): string {
  return readFileSync(path, { encoding: 'utf-8' })
}

const mdFile: string = readFile('./test/mock/sample.md')
const mdPost: IAstroCollectionEntry = {
  body: mdFile,
}

const mdxFile: string = readFile('./test/mock/sample.mdx')
const mdxPost: IAstroCollectionEntry = {
  body: mdxFile,
}

describe('PostExcerpt -> Markdown', async () => {
  it('extracts first 4 words with ellipsis', async () => {
    const props: Props = { post: mdPost, words: 4, addEllipsis: true }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe('Hello world, this is…')
  })

  it('respects maxLength over words count', async () => {
    const props: Props = {
      post: mdPost,
      words: 50,
      maxLength: 10,
      addEllipsis: true,
      smartEllipsis: false,
    }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe('Hello worl…')
  })

  it('throws if post missing', async () => {
    await expect(renderAstroComponent(PostExcerpt, {})).rejects.toThrow()
  })
})

describe('PostExcerpt -> MDX', () => {
  it('strips MDX syntax (no ellipsis)', async () => {
    const props: Props = { post: mdxPost, words: 3, addEllipsis: false }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe('Lorem ipsum dolor')
  })

  it('strips MDX syntax (with ellipsis)', async () => {
    const props: Props = {
      post: mdxPost,
      words: 4,
      addEllipsis: true,
    }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe('Lorem ipsum dolor sit…')
  })

  it('strips MDX syntax (with custom ellipsis)', async () => {
    const props: Props = {
      post: mdxPost,
      words: 4,
      addEllipsis: true,
      smartEllipsis: true,
      ellipsis: '!',
    }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe('Lorem ipsum dolor sit!')
  })

  it('defaults to 40 words', async () => {
    const props: Props = {
      post: mdxPost,
      words: -128,
      addEllipsis: true,
      smartEllipsis: false,
    }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin enim tellus, id sollicitudin nibh viverra iaculis. Phasellus ligula tellus, efficitur at ligula sed, semper aliquet risus. In dictum lectus a dui laoreet vulputate. Vestibulum at ullamcorper quam. Praesent mollis…',
    )
  })
})
