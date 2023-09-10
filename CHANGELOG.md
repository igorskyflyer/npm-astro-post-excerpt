## 🤹🏼‍♂️ Changelog

### of [@igor.dvlpr/astro-post-excerpt](https://www.npmjs.com/package/@igor.dvlpr/astro-post-excerpt)

<br>

## 2.0.3

<p align="right"><em>13-Jul-2023</em></p>

- security update: fix vulnerability, upgrade dependencies

<br>

## 2.0.2

<p align="right"><em>30-Jun-2023</em></p>

- fix: upgrade dependencies, fixes multiple vulnerabilities
- dev: add missing types
- fix: better handle last character for smartEllipsis

<br>

## 2.0.1

<p align="right"><em>09-Apr-2023</em></p>

- fix: peer dependency install error ([#32](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/32))

<br>

## 2.0.0

<p align="right"><em>09-Apr-2023</em></p>

- feat: add support for Astro v2 [Collections](https://docs.astro.build/en/guides/content-collections/)
- dev: migrate to Astro v2, check it out for breaking changes:
  - migrate using [Astro migration to v2](https://docs.astro.build/en/guides/upgrade-to/v2/)
- feat: make the component backwards-compatible
- dev: upgrade to Astro v2.2.0

<br>

## 🧐 Migration from 1.x to 2.x FAQs

**Q**: Can I _NOT_ upgrade Astro?  
**A**: Yes, but it's not **_recommended_**.

**Q**: Can I upgrade `PostExcerpt` but not Astro?  
**A**: Yes, all changes and new features are backwards-compatible.

**Q**: Can I upgrade Astro but not `PostExcerpt`?  
**A**: Look at the first answer.

**Q**: How do I upgrade Astro and migrate to v2?  
**A**: Migrate your Astro project by going through the [official migration guide](https://docs.astro.build/en/guides/upgrade-to/v2/).

**Q**: What do I need to do if I upgrade `PostExcerpt` but not Astro too?  
**A**: Nothing. Nada.

**Q**: Can I use Collections in Astro without upgrading `PostExcerpt`?  
**A**: No, Collections support is a new feature of `PostExcerpt v>=2.x.x`.

**Q**: Okay, I want to upgrade both. Is there some reference code? 🤓  
**A**: Sure, take a look at this component's testing environment, in particular the [index page](https://github.com/igorskyflyer/npm-astro-post-excerpt/blob/main/site/src/pages/index.astro), which contains the post loops for Astro v\<2 and Astro v\>=2.

<br>

## 1.3.2

<p align="right"><em>06-Apr-2023</em></p>

- dev: improve IntelliSense

<br>

## 1.3.1

<p align="right"><em>05-Apr-2023</em></p>

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

## 1.2.3

<p align="right"><em>29-Mar-2023</em></p>

- feature: preserve or strip post headings in the rendered excerpt ([#12](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/12))
  - via [@igor.dvlpr/strip-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-headings),
- fix: broken integrations link ([#16](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/16)),
- dev: upgrade dependencies,
- dev: make the test site public
- dev: update author link ([#17](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/17))

<br>

## 1.1.1

<p align="right"><em>16-Dec-2022</em></p>

- upgraded dependencies,
- minor README fixes

<br>

## 1.1.0

<p align="right"><em>02-Dec-2022</em></p>

- fixed [`maxLength`](https://github.com/igorskyflyer/npm-astro-post-excerpt#maxlength) issue ([#10](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/10)),
- added smartEllipsis,
- added custom ellipsis support,
- use native _\<post\>_`.rawContent()` function,
- updated JSDocs,
- refactored code,
- maintenance

<br>

## 1.0.3

<p align="right"><em>13-Oct-2022</em></p>

- maintenance,
- added testing environment

<br>

## 1.0.2

<p align="right"><em>12-Sep-2022</em></p>

- throw an error instead of logging it when required prop [`post`](https://github.com/igorskyflyer/npm-astro-post-excerpt#post) is missing or not valid,
- maintenance

<br>

## 1.0.1

<p align="right"><em>12-Sep-2022</em></p>

- added an explanation how to fix a common Astro build error caused by Vite,
- maintenance

<br>

## 1.0.0

<p align="right"><em>11-Sep-2022</em></p>

- initial release
