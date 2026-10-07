# adamaljaaouni.github.io

Hi, I'm Adam and this is my personal website: a business card in the style of the
Pierce & Pierce cards from *American Psycho*. Click it (or "Turn over") for my experience; the full
résumé is a PDF.

## Editing

- All card text (front and the experience on the back) lives in `src/data.js`.
- `public/Adam-Al-Jaaouni-Resume.pdf` is the downloadable résumé. **Update it and `src/data.js` together** so the
  card and the PDF never disagree.
- The back of the card is sized to fit without scrolling. If you add a lot of text, check a phone-sized window;
  bullets marked `tier: 2` are dropped on narrow cards.

## Running locally

```sh
npm ci
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

## Deploying

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The old `gh-pages` branch is
no longer used and can be deleted after the first successful Actions deploy.
