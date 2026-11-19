# Bojo Solutions

Public shelf for the games, web apps and websites finished by Boyjonauth Kevin.

The site lists work that already has a live address, plus AgriResolve, which is finished in source and waiting on an API key before it can be hosted. Drafts and empty repositories are left off.

## Run it locally

```bash
npm install
npm run dev
```

The dev server listens on port 4327.

## GitHub Pages

This repository is set up for GitHub Pages with a custom domain.

1. Push the repository to GitHub.
2. In the repository settings, open Pages and set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` builds the site and publishes it.
4. `CNAME` is `bojosolutions.com`. Point the domain at GitHub Pages when you are ready:
   - an `A` record for `@` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` to `<user>.github.io`

Until the domain is attached, the site is available at the GitHub Pages address for the repository.

## Catalogue

The cards are compiled from the public repositories under `Bojo2025` and `boyjonauth2021-netizen` that were updated from April through November 2026 and that actually ship a site or a complete app.
