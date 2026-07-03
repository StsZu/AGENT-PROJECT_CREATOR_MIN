/** Render markdown into .doc-content; optional TOC from h2 headings. */
(function (global) {
  function renderMarkdown(md, container, options) {
    const opts = options || {};
    const tocEl = opts.tocEl || null;
    const demoteH1 = opts.demoteH1 !== false;

    if (!container) return false;

    if (!md) {
      container.innerHTML =
        "<p>Контент не знайдено. Запустіть: <code>node scripts/build-content.js</code></p>";
      return false;
    }

    if (typeof marked === "undefined") {
      container.innerHTML =
        "<p>Бібліотека <code>marked</code> не завантажилась. Перевірте <code>assets/marked.min.js</code>.</p>";
      return false;
    }

    container.innerHTML = marked.parse(md);

    const h1 = container.querySelector("h1");
    if (demoteH1 && h1) {
      const h2 = document.createElement("h2");
      h2.className = "doc-kicker";
      h2.innerHTML = h1.innerHTML;
      h1.replaceWith(h2);
    }

    if (tocEl) {
      const headings = container.querySelectorAll("h2");
      if (!headings.length) {
        tocEl.innerHTML = "<span class=\"muted\">—</span>";
      } else {
        tocEl.innerHTML = Array.from(headings)
          .map((h, i) => {
            const id = "sec-" + i;
            h.id = id;
            const label = h.textContent.replace(/^#+\s*/, "").trim();
            return `<a class="side-link" href="#${id}">${label}</a>`;
          })
          .join("");
      }
    }

    return true;
  }

  global.renderMarkdown = renderMarkdown;
})(window);