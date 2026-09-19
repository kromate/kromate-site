# Anthony Akpan | Software Engineer Portfolio

This repository is the source authority for a Goalmatic project.

## Run locally

```bash
yarn install --frozen-lockfile
yarn dev
```

## Connect the local App to Goalmatic

Create a Web Key in **Site Builder > App Store > Local development**, then copy the checked-in example and set the public key:

```bash
cp .env.example .env.local
```

```env
VITE_GOALMATIC_API_KEY=gmw_dev_...
```

Keep using `yarn dev`. A development key uses development App resources and the signed-in workspace's real Goalmatic credits. A production-local key uses the current Store release permissions, production data, connected accounts, provider actions, and real credits. Site Builder restricts production-local keys to the exact loopback origins you register.

The Web Key is a public App identifier, not an account credential. Goalmatic sign-in, App installation permissions, server-side resource bindings, and credit policy authorize protected requests. Never put a private `gm_` account key or provider secret in a `VITE_*` variable.

With no Web Key, the App starts in a visibly labeled offline preview. If a configured key is invalid or its origin is not allowed, startup fails visibly and never falls back to sample data.

The default `preview` branch is the editable integration branch. Create feature branches from `preview`, select them in Site Builder for an isolated hosted working copy, and target `preview` with pull requests. The `main` branch contains read-only reviewed release candidates. A Git push never publishes the deployed App.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a change.
