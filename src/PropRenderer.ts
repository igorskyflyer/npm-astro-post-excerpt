export enum PropRenderer {
  /** Render post excerpts as simple text,  no entities supported. */
  text,
  /** Render post excerpts as HTML, entities supported. */
  html,
  /** Render post excerpts as simple text but allow HTML entities as well. */
  hybrid,
}
