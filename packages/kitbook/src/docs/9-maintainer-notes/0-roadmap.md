# Roadmap

Project is now in the quiet beta stage as API is stable but there are a few important bugs to fix and features missing
- fix variants imports for playwright issue in node by using relative paths (.js and `Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'` https://github.com/nodejs/node/issues/31710)
- visual regression testing GitHub action
- hoist compositions into documentation when referenced, parse for links to compositions and just create an ID that can be targeted by composition. May need .not-prose when hoisted

## Announced Beta: Please feel free to [create an issue](https://github.com/jacob-8/kitbook/issues/new) and discuss what you may be able to contribute!
- snapshot compositions also
- automatically analyze component for props
- editable props for variants and compositions
- auto-adjusting iframe height (I already planned this out)
- responsive iframes shrink to keep interior resolution
- movable viewer and adjustable shortcuts
- toggleable padding around variants
- show compositions in viewer
- full-screen focus view for sandbox
  - show source code using code editor <!-- i-tabler-code"-->
- start automatically displaying components without stories by using default props
  - document how to adjust glob to be able to gradually include components
  - `import { svelte2tsx } from 'svelte2tsx';`
  - `import FolderRaw from './Folder.svelte?raw';`
- more keyboard shortcuts, https://zendeskgarden.github.io/react-components/index.html?path=/story/packages-avatars-readme--page
- keep sidebar active page in view
  - menu item should be expanded when linked to (currently not visible if parent folder was manually closed and then it was jumped to via a wikilink)
- update meta-tags based on current page
- Next and Previous pages (see Docusaurus/Vitebook)
- add copy button to code blocks
- expand search to include raw string content with fuzzy search https://github.com/sveltejs/kit/blob/master/sites/kit.svelte.dev/src/lib/search/search.js
- it's all focused on Typescript users, but someone could adjust things to make it work for a JavaScript only user

## Rough edges: Please feel free to [create an issue](https://github.com/jacob-8/kitbook/issues/new) if you know how to help
- hotkey should still open search when sidebar is closed
- catch when a variants file exists by itself and inform how to use variants
- shouldn't crash upon finding oddly placed file like `/src/+layout.svelte` or `src/ind.md`
- on build don't show folders that have no components with Kitbook files 
- Scrollspy TOC in sidebar (maybe client-side only for setup simplicity) - look at svelte-put toc
- accept whichever w/h dimension is given last either via resize or by prompt
- could refactor to use activePage instead of activeUrl to make code simpler
- distinguish between Index and README in search if both exist
- fix shiki-twoslash highlight not scrolling on small screens by learning from https://histoire.dev/guide/svelte3/controls.html

## Post 1.0
- Dark mode (both for Kitbook and for individual sandboxes - or be able to show light and dark side by side) learn from https://github.com/dansvel/sveltekit-windi
- [admonitions](https://docusaurus.io/docs/markdown-features/admonitions)
- backlinks/connections graph (see Foam examples)
- display meta tags of iframe when rendering +page.svelte components
- optional Stackblitz/Codeflow/Gitpod links? 
- dynamic slots?

## Helpful Future Inspiration

- Nuxt DevTools, Vue DevTools, [vite-plugin-devtools](https://github.com/pheno-agency/vite-plugin-devtools)
- [KitDocs](https://kit-docs.svelteness.dev/) 
- [svelte-knobby](https://github.com/Rich-Harris/svelte-knobby)
- svelte-headlessui
- https://github.com/importantimport/urara