/** Shared nav — set data-page on <body> for active link */
(function () {
  const page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll(".site-nav a[data-nav]").forEach(a => {
    if (a.dataset.nav === page) a.classList.add("active");
  });
})();