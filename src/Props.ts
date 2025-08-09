import type { IAstroCollectionEntry } from './interfaces/IAstroCollectionEntry'
import type { IAstroMarkdownFile } from './interfaces/IAstroMarkdownFile'

export interface Props extends Record<string, unknown> {
  /**
   * The post whose excerpt you want to generate and render. If this prop is not supplied or not valid, the component will throw an error.
   */
  post: IAstroMarkdownFile | IAstroCollectionEntry
  /**
   * The number of words the generated excerpt should have in total. Be aware that the prop `maxLength` has precedence over this prop but you can use both props simultaneously. Defaults to **40**.
   */
  words?: number
  /**
   * Max length of the generated excerpt. Be aware that this prop has precedence over the `words` prop but you can use both props simultaneously. Defaults to **0** (unlimited).
   */
  maxLength?: number
  /**
   * Controls whether an ellipsis ("…" is the default, you can configure it) should be appended to the post excerpt. Defaults to **true**.
   */
  addEllipsis?: boolean
  /**
   * Controls whether the appended ellipsis should be aware of how the excerpt ends, i.e. if the excerpt ends with a punctuation symbol the ellipsis won't be appended. Defaults to **true**.
   */
  smartEllipsis?: boolean
  /**
   * Controls the ellipsis string that should be appended to the post excerpt. Defaults to **"…"**.
   */
  ellipsis?: string
}
