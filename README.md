# Anthony Akpan | Software Engineer Portfolio

The public portfolio site for Anthony Akpan: software projects, native utilities, writing, and contact details.

## Local development

Use Node.js 20.19 or later and Yarn 1.22.

```bash
yarn install --frozen-lockfile
yarn dev
```

Other available commands:

```bash
yarn build
yarn preview
```

## Project links

- [WiFi Drop](https://github.com/kromate/wifi-drop) moves files between devices on the same Wi-Fi network.
- [Codex Account Switcher](https://github.com/kromate/codex-account-switcher) is a native macOS menu bar utility for saved Codex accounts.
- [Kromate on GitHub](https://github.com/kromate)
- [Kromate blog](https://blog.kromate.dev)

## Git workflow

`preview` is the active integration branch. Keep changes focused, review the diff before committing, and open pull requests against `preview`. Publish from [Site Builder](https://goalmatic.site/projects/12ce3127-ff9d-45b4-967e-0acf4d68f71d) after reviewing the hosted draft. Publishing promotes the reviewed source to `main` and deploys it to [kromate.dev](https://kromate.dev). A push to `preview` only updates the draft.

Do not commit credentials, `node_modules`, or generated build output. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a change.

## App pages and search metadata

The directory is `/apps`. Detail pages use stable app IDs: `/app/wifi-drop` and `/app/codex-account-switcher`. Their page files live under `pages/App/`; `composables/apps.js` holds the shared release data.

`goalmatic.seo.json` defines titles, descriptions, and 1200 × 630 social images for each route. Site Builder renders canonical URLs, Open Graph, Twitter cards, and WebPage structured data in the initial response. App pages include SoftwareApplication microdata without invented ratings. Site Builder generates the production sitemap and robots file from published routes.

After changing `goalmatic.seo.json`, run `node scripts/sync-page-seo.mjs` to keep in-browser navigation metadata synchronized with the server metadata.

## Goalmatic startup reference

`/startup` renders the public answers in `composables/startupReference.js`. Edit that source, then run `node scripts/sync-startup-reference.mjs` to update the matching Markdown and JSON. Run the same command with `--check` before publishing to verify that all formats agree. Keep answer IDs stable so shared question links continue to work.

The page links to these files on the public repository's `main` branch; Site Builder's Vue runtime does not serve Markdown or JSON as public assets. Publishing promotes the reviewed files to `main`. Keep traction, revenue, fundraising terms, legal records and the private pitch pack out of all public formats.
