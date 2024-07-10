// Author: Igor Dimitrijević (@igorskyflyer)

export interface IAstroMarkdownFile {
  [key: string]: any
  rawContent: Function
  compiledContent: Function
}
