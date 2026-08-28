# Manish Jha's website

This is the source code for Manish Jha's personal website. It uses Astro to turn a small collection of content files and templates into ordinary static HTML pages.

## The four things to know

- Files in `src/content/` contain content that is intended to be easy to edit.
- Files in `src/pages/` define the public pages and their structure.
- `src/styles/global.css` controls colours, typography and spacing across the site.
- The `dist/` folder is generated automatically. Never edit or publish it by hand.

## Preview the website locally

Open Terminal and move into this folder:

```bash
cd "/Users/manishjha/Documents/Codex/2026-07-25/i-want-to-rebuild-my-website/website"
```

Start the local preview:

```bash
npm run dev
```

Open the local address shown in Terminal, normally `http://localhost:4321/`.

Press `Control + C` in Terminal when you want to stop the preview.

## Edit the Home page

Edit `src/content/pages/home.md`. Save the file while the local preview is running and the browser should refresh automatically.

The lines between the two sets of `---` at the top are called frontmatter. They provide the browser title and search description. The remaining text is Markdown and becomes the visible page.

## Edit the Work page

Edit `src/pages/work/index.astro`. Most of this file is normal HTML surrounded by a small amount of Astro setup.

Keep the existing heading order:

1. Work
2. Selected work
3. How I work
4. From people I've worked with
5. Beyond the day job

## Add a Writeup

1. Open `src/content/writeups/`.
2. Duplicate an existing Markdown file.
3. Give the duplicate a short lowercase filename with hyphens.
4. Replace every frontmatter value with the new article's information.
5. Give it the next `order` number or adjust the existing numbers to control the display order.
6. Save the file and check the Writeups page locally.

Example:

```markdown
---
title: "A clear article title"
displayDate: "4 September 2026"
date: "2026-09-04"
order: 1
description: >-
  A short excerpt that gives the reader a reason to continue.
url: "https://example.com/article"
---
```

`displayDate` is the date visitors see. `date` is the machine-readable version. `order` controls the position on the page.

## Add a Case Study

Follow the same process inside `src/content/case-studies/`.

Example:

```markdown
---
title: "Case study title"
displayDate: "September 2026"
date: "2026-09"
order: 1
description: >-
  A concise and accurate description of the independent work.
url: "https://example.com/case-study"
---
```

Every case study must remain independent work and must not include confidential employer material.

## Check the website before publishing

Run both commands:

```bash
npm run check
npm run build
```

`check` looks for structural mistakes in the Astro files. `build` creates the complete static website inside `dist/`. A successful build ends with `Complete!`.

## Publish after GitHub is connected

The file `.github/workflows/deploy.yml` tells GitHub Pages to rebuild and publish the website whenever the `main` branch is updated.

The normal publishing loop will be:

1. Edit or add content.
2. Preview it locally.
3. Run the checks above.
4. Commit the change in Git.
5. Push the `main` branch to GitHub.
6. GitHub Pages publishes the new version automatically.

The final GitHub address and custom domain still need to be added to `astro.config.mjs` before the first public deployment.

## Dependency updates

Do not run `npm audit fix --force`. A forced update can replace major packages and break the site.

Use planned updates instead. Update Astro, run `npm run check` and `npm run build` then inspect the local website before publishing the change.
