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

Writeups can either live on this website or link to an article published elsewhere. New original articles should normally live on this website. The older Medium archive remains external.

### Publish a complete article on this website

1. Open `src/content/writeups/`.
2. Duplicate an on-site article Markdown file.
3. Give the duplicate a short lowercase filename with hyphens. The filename becomes the public URL.
4. Replace every frontmatter value with the new article's information.
5. Paste the article below the closing `---` line using Markdown headings that begin with `##`.
6. Give it the next `order` number or adjust the existing numbers to control the display order.
7. Save the file and check both the Writeups index and the full article page locally.

Example:

```markdown
---
title: "A clear article title"
displayDate: "4 September 2026"
date: "2026-09-04"
order: 1
description: >-
  A short excerpt that gives the reader a reason to continue.
---

Opening paragraph of the article.

## First section

The rest of the article.
```

Do not add a `url` field to an on-site article. The website creates its URL from the filename.

### Add graphics to an on-site article

Keep each article's graphics in its own folder under `src/assets/writeups/`. Name that folder exactly like the article's Markdown filename. Use short lowercase image filenames with hyphens.

For example:

```text
src/
├── assets/
│   └── writeups/
│       └── a-clear-article-title/
│           └── workflow-diagram.png
└── content/
    └── writeups/
        └── a-clear-article-title.md
```

Add the image to the article using a relative path:

```markdown
![Diagram showing the release-documentation workflow](../../assets/writeups/a-clear-article-title/workflow-diagram.png)
```

The words inside the square brackets are alternative text. They should communicate the image's meaning to someone who cannot see it. Do not begin with “Image of” or repeat a nearby caption. If a graphic is purely decorative and adds no information, use empty brackets: `![](...)`.

Astro processes local images stored in `src/assets/`, including resizing them for the page. The site also prevents them from overflowing on smaller screens. Prefer PNG for screenshots and diagrams with text, SVG for simple diagrams you created and own and JPEG or WebP for photographs. Remove confidential names, data and interface details before adding any image.

A caption is optional. Put this directly after the image when context or attribution would help:

```html
<p class="article-caption">A short caption explaining what the reader should notice.</p>
```

Use both meaningful alternative text and a caption when they serve different purposes. Alternative text describes the information in the graphic. A caption explains why it matters in the article. Check every graphic in the local preview at both a wide desktop size and a narrow phone size before publishing.

### Add an externally published article

Follow the same steps but include the external destination in the frontmatter and do not add an article body:

```markdown
---
title: "An externally published article"
displayDate: "4 September 2026"
date: "2026-09-04"
order: 1
description: >-
  A short excerpt that gives the reader a reason to continue.
url: "https://example.com/article"
---
```

External articles open in a new tab. On-site articles open normally within the website. `displayDate` is the date visitors see. `date` is the machine-readable version. `order` controls the position on the Writeups page.

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

The canonical public address is `https://whomanish.com`. The custom domain is configured in the repository's GitHub Pages settings because this site deploys through GitHub Actions. A `public/CNAME` file is not required for this deployment method.

## Dependency updates

Do not run `npm audit fix --force`. A forced update can replace major packages and break the site.

Use planned updates instead. Update Astro, run `npm run check` and `npm run build` then inspect the local website before publishing the change.
