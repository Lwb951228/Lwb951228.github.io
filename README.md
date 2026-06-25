# Wenbo Lu Academic Homepage

This is a static bilingual academic personal website. It can be opened locally or hosted directly with GitHub Pages.

## Files

- `index.html`: page structure
- `styles.css`: visual design and responsive layout
- `content.js`: editable bilingual profile content
- `script.js`: language toggle and rendering logic
- `assets/portrait.jpeg`: profile photo
- `.nojekyll`: tells GitHub Pages to serve this static site directly

## Update Content

Open `content.js` and edit the matching array:

- Add a publication in `publications`; include a `year` field so it appears in the correct year group.

Keep the same object format as existing entries.

## Deploy To GitHub Pages For Lwb951228

1. Create a public GitHub repository named `Lwb951228.github.io`.
2. Upload all files in this folder to the repository root.
3. In GitHub, open `Settings > Pages` and deploy from the main branch.
4. The site will be available at `https://Lwb951228.github.io/`.

Current status: the connected GitHub account is `Lwb951228`, but `Lwb951228.github.io` does not exist yet. After that repository is created, these files can be pushed or uploaded directly.

## Push From This Folder

After creating `https://github.com/Lwb951228/Lwb951228.github.io`, run:

```bash
git remote add origin https://github.com/Lwb951228/Lwb951228.github.io.git
git branch -M main
git push -u origin main
```
