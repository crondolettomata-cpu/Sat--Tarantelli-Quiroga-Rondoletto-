/* Tabs */
const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".board-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
    panels.forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    document.getElementById(btn.dataset.target).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* Shot slot: tries to load screenshots/<file>; falls back to a labeled placeholder */
function shotSlot(shot) {
  const wrap = document.createElement("div");
  wrap.className = "shot";

  const img = document.createElement("img");
  img.src = `screenshots/${shot.file}`;
  img.alt = shot.caption;
  img.loading = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "shot-placeholder";
  placeholder.innerHTML = `
    <span class="shot-icon">📸</span>
    <span class="shot-caption">${shot.caption}</span>
    <code class="shot-file">screenshots/${shot.file}</code>
  `;

  img.addEventListener("error", () => {
    img.remove();
    wrap.appendChild(placeholder);
  }, { once: true });

  wrap.appendChild(img);
  return wrap;
}

/* Board 1: Leyes UX */
const leyesGrid = document.getElementById("leyes-grid");
const verdictLabel = { cumple: "Se cumple", revisar: "Punto a revisar" };

LEYES_UX.forEach((law, i) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
      <span class="verdict verdict-${law.verdict}">${verdictLabel[law.verdict]}</span>
    </div>
    <h3>${law.name}</h3>
    <blockquote>“${law.quote}”<cite>— ${law.author}</cite></blockquote>
    <p class="finding"><strong>En Burger King:</strong> ${law.finding}</p>
  `;
  card.appendChild(shotSlot(law.shot));
  leyesGrid.appendChild(card);
});

/* Board 2: Nielsen */
const nielsenGrid = document.getElementById("nielsen-grid");

NIELSEN.forEach((h) => {
  const card = document.createElement("article");
  card.className = "card" + (h.priority ? " priority" : "");
  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">${String(h.n).padStart(2, "0")}</span>
      <span class="chip sev-${h.severity}">Gravedad ${h.severity}</span>
      ${h.priority ? '<span class="priority-badge">★ Prioritaria</span>' : ""}
    </div>
    <h3>${h.name}</h3>
    <p class="def">${h.def}</p>
    <p class="finding"><strong>Hallazgo en Burger King:</strong> ${h.finding}</p>
  `;
  card.appendChild(shotSlot(h.shot));
  nielsenGrid.appendChild(card);
});
