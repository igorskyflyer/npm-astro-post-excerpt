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

function walk(node): string | undefined {
  const allowedNodes: string[] = ['emphasis', 'paragraph', 'strong', 'text']

  if (!allowedNodes.includes(node.type)) {
    return
  }

  let result: string = ''

  if (node.value?.length > 0) {
    result += node.value
  } else if (node.children?.length > 0) {
    node.children.forEach((child) => {
      if (allowedNodes.includes(child.type)) {
        const data = walk(child)

        if (data) {
          result += data
        }
      }
    })
  }

  return result
}

export function getPlainText(markdown: string): string {
  let result: string = ''

  const tree = fromMarkdown(markdown, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown()]
  })

  tree.children.forEach((node) => {
    const data = walk(node)

    if (data) {
      result += data
    }
  })

  return result
}
