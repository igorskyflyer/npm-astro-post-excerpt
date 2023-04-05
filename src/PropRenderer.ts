export enum PropRenderer {
  /** Render post excerpts as simple text, no entities supported. */
  Text,
  /** Render post excerpts as HTML, entities supported. */
  Html,
  /** Render post excerpts as simple text but allow HTML entities as well. */
  Hybrid,
}
