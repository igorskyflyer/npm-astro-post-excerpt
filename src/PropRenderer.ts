export enum PropRenderer {
  /** Render post excerpts as simple text, no HTML entities supported. */
  Text,
  /** Render post excerpts as HTML, HTML entities supported. */
  Html,
  /** Render post excerpts as simple text but allow HTML entities as well. */
  Hybrid,
}
