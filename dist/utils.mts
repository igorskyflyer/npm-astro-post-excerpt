import type { Root, RootContent } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import { mdxjs } from 'micromark-extension-mdxjs'

export function isPriorV2(post: any): boolean {
  return (
    typeof post['compiledContent'] === 'function' &&
    typeof post['rawContent'] === 'function'
  )
}

export function isV2(post: any): boolean {
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
    mdastExtensions: [mdxFromMarkdown()]
  })

  tree.children.forEach((node: RootContent): void => {
    const value: string | undefined = walk(node)

    if (value) {
      result = restoreWhitespace(value, result)
    }
  })

  return result
}
