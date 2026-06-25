const state = {
  lang: localStorage.getItem("homepage-language") || "zh"
};

const $ = (selector) => document.querySelector(selector);

function render() {
  const content = siteContent[state.lang];
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-field]").forEach((node) => {
    const key = node.dataset.field;
    node.textContent = content[key] || "";
  });

  $(".language-toggle").textContent = content.langLabel;
  $(".nav").innerHTML = content.nav
    .map((item, index) => {
      const href = ["#home", "#research", "#publications", "#experience", "#contact"][index];
      return `<a href="${href}">${item}</a>`;
    })
    .join("");

  $(".contact-list").innerHTML = content.contacts
    .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer"><span>${item.label}</span>${item.value}</a>`)
    .join("");

  $(".metrics").innerHTML = content.metrics
    .map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`)
    .join("");

  $(".research-grid").innerHTML = content.research
    .map((item) => `<article class="research-card"><h3>${item.title}</h3><p>${item.text}</p></article>`)
    .join("");

  const groupedPublications = content.publications.reduce((groups, item) => {
    if (!groups[item.year]) groups[item.year] = [];
    groups[item.year].push(item);
    return groups;
  }, {});

  $(".publication-years").innerHTML = Object.keys(groupedPublications)
    .sort((a, b) => Number(b) - Number(a))
    .map(
      (year) => `
        <section class="publication-year" aria-label="Publications in ${year}">
          <h3>${year}</h3>
          <ol class="publication-list">
            ${groupedPublications[year]
              .map((item) => `<li><span>${item.tag}</span><p>${item.text}</p></li>`)
              .join("")}
          </ol>
        </section>
      `
    )
    .join("");

  $("#dissertation-title").textContent = content.dissertation.title;
  $(".dissertation-card h3").textContent = content.dissertation.name;
  $(".dissertation-card ul").innerHTML = content.dissertation.points
    .map((item) => `<li>${item}</li>`)
    .join("");

  $(".timeline").innerHTML = content.education
    .map(
      (item) => `
        <article class="timeline-item">
          <span>${item.period}</span>
          <h3>${item.place}</h3>
          <p>${item.degree}</p>
        </article>
      `
    )
    .join("");
}

$(".language-toggle").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("homepage-language", state.lang);
  render();
});

render();
