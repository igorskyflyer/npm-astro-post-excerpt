## 📒 Changelog

### of [@igor.dvlpr/astro-post-excerpt](https://github.com/igorskyflyer/npm-astro-post-excerpt)

<br>

## v4.1.0 (_14-Mar-2026_)

- ✨ **feat**: add support for Astro v6

### ⚠️ Important notice – End of life under this scope

This is the **last version** that will be published under `@igor.dvlpr/astro-post-excerpt`.

Future updates, bug fixes, and new features will be released under a **new package scope** of [**@igorskyflyer**](https://www.npmjs.com/~igorskyflyer).  
Please plan to migrate to the new package once released.

**Why?**  
Technical issues and maintenance reasons (scope consolidation, better discoverability, and alignment with other projects).

Thank you for using this library – your feedback has been invaluable!

<br>

## v4.0.0 (_10-Aug-2025_)

- **❌ breaking**: drop support for Astro `<5` (MD and MDX parsing is fixed in Astro v5+)
- **❌ breaking**: drop support for Glob files, use Collections instead

<br>

- **✅ fix**: fix custom ellipsis not being applied

<br>

## v3.0.4 (_11-Jul-2024_)

- **✅ fix**: fix missing whitespace when extracting plain text
- **📜 docs**: unify changelog entries

<br>
<br>

## v3.0.3 (_10-Jul-2024_)

- **💻 dev**: conform with installed Astro's Node engine version

<br>
<br>

## v3.0.2 (_10-Jul-2024_)

- **❌ breaking**: property `headings`: `PropHeadings` has been removed completely, headings are now automatically and **ALWAYS** removed
- **❌ breaking**: property `renderer`: `PropRenderer` has been removed completely, only text is rendered with HTML entities support **ALWAYS** enabled
- **🪅 feat**: MDX support is added and enabled by default
- **✅ fix**: fix Markdown being rendered ([#41](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/41))
- **✅ fix**: fix component import error
- **💻 dev**: upgrade to `Astro` **`v4`**
- **💻 dev**: set the Node requirement to `>=20`
- **📜 docs**: change the description and documentation to match the new API (MDX support)

<br>
<br>

## v2.1.0 (_12-Sep-2023_)

- **🪅 feat**: upgrade and test with `Astro` **`v3`**
- **💻 dev**: `<PostExcerpt />` now comes with its own custom-built test suite and runner! (naive implementation 😳)

<br>
<br>

## v2.0.3 (_13-Jul-2023_)

- **💻 dev**: fix vulnerability, upgrade dependencies

<br>
<br>

## v2.0.2 (_30-Jun-2023_)

- **✅ fix**: upgrade dependencies, fixes multiple vulnerabilities
- **✅ fix**: better handle last character for smartEllipsis
- **💻 dev**: add missing types

<br>
<br>

## v2.0.1 (_09-Apr-2023_)

- **✅ fix**: peer dependency install error ([#32](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/32))

<br>
<br>

## v2.0.0 (_09-Apr-2023_)

- **🪅 feat**: add support for Astro v2 [Collections](https://docs.astro.build/en/guides/content-collections/)
- **🪅 feat**: make the component backwards-compatible
- **💻 dev**: migrate to Astro v2, check it out for breaking changes:
  - migrate using [Astro migration to v2](https://docs.astro.build/en/guides/upgrade-to/v2/)
- **💻 dev**: upgrade to Astro v2.2.0

<br>
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
<br>

## v1.3.2 (_06-Apr-2023_)

- **💻 dev**: improve IntelliSense

<br>
<br>

## v1.3.1 (_05-Apr-2023_)

- **🪅 feat**: add an HTML render ([#18](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/18))
- **🪅 feat**: add [@igor.dvlpr/strip-html](https://www.npmjs.com/package/@igor.dvlpr/strip-html) which brings:
  - stripping of HTML code
  - extracting of text content from HTML code
- **🪅 feat**: add [@igor.dvlpr/strip-html-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-html-headings) which brings:
  - stripping of HTML headings' code
  - extracting of text content from HTML headings
- **🪅 feat**: detect ellipsis symbol in [smartEllipsis](https://github.com/igorskyflyer/npm-astro-post-excerpt#smartellipsis)
- **✅ fix**: fix `trim()` sometimes not being applied
- **💻 dev**: move to TypeScript
- **💻 dev**: fix missing typings

<br>
<br>

## v1.2.3 (_29-Mar-2023_)

- **🪅 feat**: preserve or strip post headings in the rendered excerpt ([#12](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/12))
  - via [@igor.dvlpr/strip-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-headings)
- **✅ fix**: broken integrations link ([#16](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/16))
- **💻 dev**: upgrade dependencies
- **💻 dev**: make the test site public
- **💻 dev**: update author link ([#17](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/17))

<br>
<br>

## v1.1.1 (_16-Dec-2022_)

- **💻 dev**: upgrade dependencies
- **📜 docs**: minor README fixes

<br>
<br>

## v1.1.0 (_02-Dec-2022_)

- **🪅 feat**: add smartEllipsis
- **🪅 feat**: add custom ellipsis support
- **✅ fix**: fix [`maxLength`](https://github.com/igorskyflyer/npm-astro-post-excerpt#maxlength) issue ([#10](https://github.com/igorskyflyer/npm-astro-post-excerpt/issues/10))
- **✅ fix**: use native _\<post\>_`.rawContent()` function
- **💻 dev**: refactor code
- **💻 dev**: maintenance
- **📜 docs**: update JSDocs

<br>
<br>

## v1.0.3 (_13-Oct-2022_)

- **💻 dev**: add testing environment
- **💻 dev**: maintenance

<br>
<br>

## v1.0.2 (_12-Sep-2022_)

- **💻 dev**: throw an error instead of logging it when required prop [`post`](https://github.com/igorskyflyer/npm-astro-post-excerpt#post) is missing or not valid
- **💻 dev**: security fixes

<br>
<br>

## v1.0.1 (_12-Sep-2022_)

- **💻 dev**: security fixes
- **📜 docs**: add an explanation how to fix a common Astro build error caused by Vite

<br>
<br>

## v1.0.0 (_11-Sep-2022_)

- **🚀 launch**: initial release
