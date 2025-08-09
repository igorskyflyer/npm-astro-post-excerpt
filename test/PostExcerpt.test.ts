// @vitest-environment happy-dom
import { renderAstroComponent } from '@igor.dvlpr/astro-render-component'
import { describe, expect, it } from 'vitest'
import PostExcerpt from '../PostExcerpt.astro'
import type { IAstroMarkdownFile } from '../src/interfaces/IAstroMarkdownFile'
import type { IAstroMarkdownXFile } from '../src/interfaces/IAstroMarkdownXFile'
import type { Props } from '../src/Props'

describe('PostExcerpt', async () => {
  const mdPost: IAstroMarkdownFile = {
    body: '# Title\n\nHello **world**, this is a markdown post.',
    rawContent: () => null,
    compiledContent: () => null,
  }

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
    }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe('Hello worl…')
  })

  it('throws if post missing', async () => {
    await expect(renderAstroComponent(PostExcerpt, {})).rejects.toThrow()
  })
})

describe('generateExcerpt (MDX)', () => {
  const mdxSource = './test/mock/test.mdx'
  const mdxPost: IAstroMarkdownXFile = {
    file: mdxSource,
    Content: () => null,
  }

  it('strips front-matter and markdown syntax', async () => {
    const props: Props = { post: mdxPost, words: 3, addEllipsis: true }
    const result = await renderAstroComponent(PostExcerpt, { props })

    expect(result.textContent).toBe('This is the…')
  })
})
