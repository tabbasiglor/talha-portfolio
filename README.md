# Talha Faisal Portfolio

React + TypeScript portfolio for Talha Faisal's AI adoption implementation positioning.

Live site: https://tabbasiglor.github.io/talha-portfolio

## Stack

- React + TypeScript + SCSS
- Material UI
- FontAwesome
- React Vertical Timeline

## Sections

- Hero and positioning
- Delivery method
- Career timeline
- Interactive implementation projects
- Interactive capabilities (search, filters, detail panel)
- Contact CTA

## Run locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Deployment

The repo has two branches:

- `main` — source code
- `gh-pages` — built site served by GitHub Pages (do not edit manually)

After making changes, run both:

```bash
git add .
git commit -m "your message"
git push           # backs up source code to main
npm run deploy     # builds and pushes live site to gh-pages
```

`git push` and `npm run deploy` are separate steps. Both are needed. Skipping `npm run deploy` means the live site does not update.

## Content

All site content lives in these files — no code changes needed for copy updates:

- `src/data/projects.json` — work case studies
- `src/data/capabilities.json` — capability cards
- `src/data/categoryLabels.json` — capability category display names

Component copy (hero, method, career, contact) lives directly in the relevant files under `src/components/`.
