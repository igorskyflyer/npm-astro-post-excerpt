## 🤹🏼‍♂️ Changelog

### of [@igor.dvlpr/astro-post-excerpt](https://www.npmjs.com/package/@igor.dvlpr/astro-post-excerpt)

<br>

## 2.0.0 - 09-Apr-2023

- feat: add support for Astro v2 [Collections](https://docs.astro.build/en/guides/content-collections/)
- dev: migrate to Astro v2, check it out for breaking changes:
  - migrate using [Astro migration to v2](https://docs.astro.build/en/guides/upgrade-to/v2/)
- feat: make the component backwards-compatible
- dev: upgrade to Astro v2.2.0

<br>

## 1.3.2 - 06-Apr-2023

- dev: improve IntelliSense

<br>

## 1.3.1 - 05-Apr-2023

- feature: add an HTML render ([#18](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/18))
- add [@igor.dvlpr/strip-html](https://www.npmjs.com/package/@igor.dvlpr/strip-html) which brings:
  - stripping of HTML code,
  - extracting of text content from HTML code
- add [@igor.dvlpr/strip-html-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-html-headings) which brings:
  - stripping of HTML headings' code,
  - extracting of text content from HTML headings
- moved to TypeScript
- dev: fix missing typings
- detect ellipsis symbol in [smartEllipsis](https://github.com/igorskyflyer/npm-astro-post-excerpt#smartellipsis)
- fix `trim()` sometimes not being applied

<br>

## 1.2.3 - 29-Mar-2023

- feature: preserve or strip post headings in the rendered excerpt ([#12](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/12))
  - via [@igor.dvlpr/strip-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-headings),
- fix: broken integrations link ([#16](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/16)),
- dev: upgrade dependencies,
- dev: make the test site public
- dev: update author link ([#17](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/17))

<br>

## 1.1.1 - 16-Dec-2022

- upgraded dependencies,
- minor README fixes

<br>

## 1.1.0 - 02-Dec-2022

- fixed [`maxLength`](https://github.com/igorskyflyer/npm-astro-post-excerpt#maxlength) issue ([#10](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/10)),
- added smartEllipsis,
- added custom ellipsis support,
- use native _\<post\>_`.rawContent()` function,
- updated JSDocs,
- refactored code,
- maintenance

<br>

## 1.0.3 - 13-Oct-2022

- maintenance,
- added testing environment

<br>

## 1.0.2 - 12-Sep-2022

- throw an error instead of logging it when required prop [`post`](https://github.com/igorskyflyer/npm-astro-post-excerpt#post) is missing or not valid,
- maintenance

<br>

## 1.0.1 - 12-Sep-2022

- added an explanation how to fix a common Astro build error caused by Vite,
- maintenance

<br>

## 1.0.0 - 11-Sep-2022

- initial release
