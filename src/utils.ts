import { stripFile } from '@igor.dvlpr/strip-yaml-front-matter'
import type { Root, RootContent } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import { mdxjs } from 'micromark-extension-mdxjs'
import { Props } from './Props'

export function isPost(post: any): boolean {
  return typeof post['body'] === 'string'
}

export function isMdx(post: any): boolean {
  return typeof post['Content'] === 'function'
}

function restoreWhitespace(current: string, previous: string): string {
  if (previous === '') {
    return current
  }

  if (!current.endsWith(' ') && !previous.startsWith(' ')) {
    return `${previous} ${current}`
  }

  return `${previous}${current}`
}

function walk(node: RootContent | any): string | undefined {
  const allowedNodes: string[] = ['emphasis', 'paragraph', 'strong', 'text']

  if (!allowedNodes.includes(node.type)) {
    return
  }

  let result: string = ''

  if (node.value?.length > 0) {
    result += node.value
  } else if (node.children?.length > 0) {
    node.children.forEach((child: RootContent) => {
      if (allowedNodes.includes(child.type)) {
        const value: string | undefined = walk(child)

        if (value) {
          result += value
        }
      }
    })
  }

  return result
}

export function getPlainText(markdown: string): string {
  let result: string = ''

  const tree: Root = fromMarkdown(markdown, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown()],
  })

  tree.children.forEach((node: RootContent): void => {
    const value: string | undefined = walk(node)

    if (value) {
      result = restoreWhitespace(value, result)
    }
  })

  return result
}

export function generateExcerpt(props: Props): string {
  props = {
    post: props.post,
    words: props.words ?? 40,
    maxLength: props.maxLength ?? 0,
    addEllipsis: props.addEllipsis !== undefined ? props.addEllipsis : true,
    smartEllipsis:
      props.smartEllipsis !== undefined ? props.smartEllipsis : true,
    ellipsis: '…',
  }

  if (!props.post || (!isPost(props.post) && !isMdx(props.post))) {
    throw new TypeError('The required prop post is not valid, aborting now.')
  }

  if (typeof props.words !== 'number' || props.words < 0) {
    props.words = 40
    console.warn('The optional prop words is not valid, defaulting to 40.')
  }

  if (typeof props.maxLength !== 'number' || props.maxLength < 0) {
    props.maxLength = 0
    console.warn('The optional prop maxLength is not valid, defaulting to 0.')
  }

  if (typeof props.addEllipsis !== 'boolean') {
    props.addEllipsis = true
    console.warn(
      'The optional prop addEllipsis is not valid, defaulting to true.',
    )
  }

  if (typeof props.smartEllipsis !== 'boolean') {
    props.smartEllipsis = true
    console.warn(
      'The optional prop smartEllipsis is not valid, defaulting to true.',
    )
  }

  const symbolEllipsis: string = '…'
  const punctuationSymbols: string[] = ['.', ',', '?', '!', ';', symbolEllipsis]

  if (typeof props.ellipsis !== 'string' || props.ellipsis.length < 1) {
    props.ellipsis = symbolEllipsis
    console.warn('The optional prop ellipsis is not valid, defaulting to "…".')
  }

  let postExcerpt: string = ''

  if (isPost(props.post)) {
    // Astro post detected
    postExcerpt = props.post['body']
  } else if (isMdx(props.post)) {
    // MDX file detected
    // cannot be used directly from Astro 😔
    postExcerpt = stripFile(props.post.file)
  }

  postExcerpt = postExcerpt.trim()
  postExcerpt = getPlainText(postExcerpt)

  if (props.words > 0) {
    postExcerpt = postExcerpt.split(' ').slice(0, props.words).join(' ')
  }

  if (props.maxLength > 0) {
    postExcerpt = postExcerpt.substring(0, props.maxLength)
  }

  if (props.addEllipsis) {
    const postLength: number = postExcerpt.length

    if (postLength > 0) {
      if (props.smartEllipsis) {
        const lastChar: string | undefined = postExcerpt.at(-1)

        if (lastChar && !punctuationSymbols.includes(lastChar)) {
          postExcerpt += props.ellipsis
        }
      } else {
        postExcerpt += props.ellipsis
      }
    }
  }

  return postExcerpt
}
