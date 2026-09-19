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
