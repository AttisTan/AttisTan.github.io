# Academic homepage

A one-page site for your bio, papers, and CV. All content lives in `content.js`.

```
index.html   page shell (rarely edited)
content.js   ← EDIT THIS: name, bio, links, papers, experience, projects
render.js    builds the page from content.js (no need to edit)
style.css    look and feel; colors are at the top
papers/      paper PDFs
images/      photo, if you add one
cv.pdf       your CV (add it here)
```

## Publish on GitHub Pages (free, one time)

1. Create a GitHub account if you don't have one.
2. Create a new **public** repository named `<your-username>.github.io`.
3. On the repo page, choose **Add file → Upload files** and upload everything in this folder, including `.nojekyll` and the `papers/` and `images/` folders. Commit.
4. Go to **Settings → Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
5. After a minute or two, the site is live at `https://<your-username>.github.io`.

## Editing

**In the browser, with no software needed:**
- **Change text:** open `content.js` on GitHub, click the pencil icon, edit, then **Commit changes**. The site updates within a minute or two.
- **Add or replace a PDF:** open the `papers/` folder, then **Add file → Upload files**. Uploading a file with the same name replaces it, and every existing link keeps working. Then set `pdf: "papers/<file>.pdf"` for that paper in `content.js`.

**On your computer:** edit the files, then preview by running this from this folder:

```bash
python3 -m http.server 8000
```

and opening http://localhost:8000.

## Adding a paper

Copy an existing entry inside `papers: [...]` in `content.js` and change its fields. Any link left as `""` is hidden. A paper with no PDF, arXiv or SSRN link shows "Draft available upon request."

## Before linking a joint paper

Get each coauthor's agreement before posting the PDF. Remove internal comments, and put the authors, date and "Working paper" on the title page.
