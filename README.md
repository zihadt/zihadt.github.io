# zitar.dev

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages
by the workflow in `.github/workflows/deploy.yml`.

```sh
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
npm run check    # type-check .astro files
```

Site-wide text, nav items, and profile links live in `src/site.ts`.
Projects are markdown files in `src/content/projects/` with their images under
`src/assets/projects/`. CV content is in `src/data/cv.ts`.
The colour tokens for both themes are in `src/styles/global.css`.
