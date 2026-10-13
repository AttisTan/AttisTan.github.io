// Builds the page from content.js. You shouldn't need to edit this file.
(function () {
  const S = window.SITE;
  const app = document.getElementById("app");
  if (!S || !app) return;

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const link = (label, url) => (url ? `<a href="${esc(url)}">${esc(label)}</a>` : "");
  const list = (xs) => (Array.isArray(xs) ? xs : []);

  document.title = S.name;

  const authors = (names) =>
    list(names).map((a) => (a === S.name ? `<strong>${esc(a)}</strong>` : esc(a))).join(", ");

  const paper = (p) => {
    const hasDraft = p.pdf || p.arxiv || p.ssrn;
    const actions = [
      link("PDF", p.pdf),
      link("arXiv", p.arxiv),
      link("SSRN", p.ssrn),
      link("Code", p.code),
      link("Slides", p.slides),
    ].filter(Boolean);
    if (!hasDraft) actions.push(`<span class="muted">Draft available upon request</span>`);
    const meta = [p.status, p.venue, p.year].filter(Boolean).map(esc).join(" · ");
    const titleUrl = p.pdf || p.arxiv || p.ssrn;
    return `
      <li class="paper">
        <h3>${titleUrl ? link(p.title, titleUrl) : esc(p.title)}</h3>
        <p class="authors">${authors(p.authors)}</p>
        ${meta ? `<p class="meta">${meta}</p>` : ""}
        <div class="actions">${actions.join("")}</div>
        ${p.abstract ? `<details><summary>Abstract</summary><p>${p.abstract}</p></details>` : ""}
      </li>`;
  };

  const header = `
    <header class="hero">
      ${S.photo ? `<img class="photo" src="${esc(S.photo)}" alt="${esc(S.name)}">` : ""}
      <div>
        <h1>${esc(S.name)}</h1>
        <p class="tagline">${esc(S.tagline)}</p>
        ${S.email ? `<p class="email">${esc(S.email)}</p>` : ""}
        <nav class="links">${list(S.links).map((l) => link(l.label, l.url)).filter(Boolean).join("")}</nav>
      </div>
    </header>`;

  const about = `<section><h2>About</h2>${list(S.bio).map((p) => `<p>${p}</p>`).join("")}</section>`;

  const papers = list(S.papers)
    .filter((g) => list(g.items).length)
    .map((g) => `<section><h2>${esc(g.heading)}</h2><ul class="papers">${g.items.map(paper).join("")}</ul></section>`)
    .join("");

  const experience = list(S.experience).length
    ? `<section><h2>Research Experience</h2><ul class="entries">${S.experience
        .map(
          (e) => `
        <li>
          <div class="entry-head"><span><strong>${esc(e.role)}</strong>${e.org ? `, ${esc(e.org)}` : ""}</span><span class="muted">${esc(e.period)}</span></div>
          ${e.detail ? `<p>${e.detail}</p>` : ""}
        </li>`
        )
        .join("")}</ul></section>`
    : "";

  const projects = list(S.projects).length
    ? `<section><h2>Other Projects</h2><ul class="entries">${S.projects
        .map(
          (p) => `
        <li>
          <div class="entry-head"><strong>${p.link ? link(p.title, p.link) : esc(p.title)}</strong></div>
          ${p.detail ? `<p>${p.detail}</p>` : ""}
        </li>`
        )
        .join("")}</ul></section>`
    : "";

  const footer = `<footer>© ${new Date().getFullYear()} ${esc(S.name)}${S.updated ? ` · Last updated ${esc(S.updated)}` : ""}</footer>`;

  app.innerHTML = header + about + papers + experience + projects + footer;
})();
