document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle-theme");
  if (!toggle) return;
  const saved = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = saved;
  toggle.addEventListener("click", () => {
    const next = document.body.dataset.theme === "light" ? "dark" : "light";
    document.body.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
});
