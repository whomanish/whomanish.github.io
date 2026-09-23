# whomanish.com

This repository contains the source code for my personal website, [whomanish.com](https://whomanish.com).

I use the site to bring together my professional experience, writing and independent case studies. It is deliberately text-first, fast and simple to maintain.

## Built with

- [Astro](https://astro.build/) for generating the static website
- Markdown for articles and content listings
- Plain CSS for the visual design
- GitHub Actions and GitHub Pages for deployment

The site uses minimal JavaScript and does not ship a client-side UI framework.

## Run locally

The project requires Node.js 22.12 or later and npm.

```bash
git clone https://github.com/whomanish/whomanish.github.io.git
cd whomanish.github.io
npm install
npm run dev
```

Open the local address shown in the terminal, normally `http://localhost:4321/`.

## Check a change

```bash
npm run check
npm run build
```

The production site is rebuilt and deployed automatically when a change is pushed to the `main` branch.
