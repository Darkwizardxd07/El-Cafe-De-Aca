/**
 * app.js — Lógica de la carta digital interactiva "El Café de Acá".
 * Sin frameworks ni dependencias externas (Vanilla JS).
 */

(function () {
  "use strict";

  let currentLang = DEFAULT_LANG;
  let activeModalItem = null;

  // -------------------------------------------------------------------
  // Helpers de traducción
  // -------------------------------------------------------------------
  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N[DEFAULT_LANG][key] || key;
  }
  function tr(field) {
    if (!field) return "";
    return field[currentLang] || field[DEFAULT_LANG] || field.es || "";
  }

  // -------------------------------------------------------------------
  // Render de la carta a partir de MENU_DATA
  // -------------------------------------------------------------------
  function renderItem(item) {
    const wrap = document.createElement("button");
    wrap.type = "button";
    wrap.className = "menu-item";
    wrap.dataset.itemId = item.id;

    const row = document.createElement("div");
    row.className = "menu-item-row";

    const name = document.createElement("span");
    name.className = "item-name";
    name.textContent = tr(item.name);

    const price = document.createElement("span");
    price.className = "item-price";
    price.textContent = item.price;

    row.appendChild(name);
    row.appendChild(price);
    wrap.appendChild(row);

    if (item.desc) {
      const desc = document.createElement("span");
      desc.className = "item-desc";
      desc.textContent = tr(item.desc);
      wrap.appendChild(desc);
    }

    if (item.tag === "featured" || item.vegan) {
      const badges = document.createElement("span");
      badges.className = "item-badges";
      if (item.tag === "featured") {
        const b = document.createElement("span");
        b.className = "badge badge-gold";
        b.textContent = t("featuredTag");
        badges.appendChild(b);
      }
      if (item.vegan) {
        const b = document.createElement("span");
        b.className = "badge";
        b.textContent = t("veganTag");
        badges.appendChild(b);
      }
      wrap.appendChild(badges);
    }

    wrap.addEventListener("click", function () { openModal(item); });
    return wrap;
  }

  function renderItemsGrid(items) {
    const grid = document.createElement("div");
    grid.className = "items-grid";
    items.forEach(function (item) { grid.appendChild(renderItem(item)); });
    return grid;
  }

  function renderCallout(callout) {
    const box = document.createElement("div");
    box.className = "callout";
    const h = document.createElement("h4");
    h.textContent = tr(callout.title);
    box.appendChild(h);

    if (callout.lines && callout.lines.length) {
      const ul = document.createElement("ul");
      callout.lines.forEach(function (line) {
        const li = document.createElement("li");
        li.textContent = tr(line);
        ul.appendChild(li);
      });
      box.appendChild(ul);
    }

    if (callout.note) {
      const note = document.createElement("p");
      note.className = "callout-note";
      note.textContent = tr(callout.note);
      box.appendChild(note);
    }
    return box;
  }

  function renderSection(section) {
    const el = document.createElement("section");
    el.className = "menu-section";
    el.id = section.id;

    if (section.superTitle) {
      const st = document.createElement("p");
      st.className = "section-supertitle";
      st.textContent = tr(section.superTitle);
      el.appendChild(st);
    }

    const titleClass = section.superTitle ? "style-plain" : "";
    const title = document.createElement("h2");
    title.className = "section-title " + titleClass;
    title.textContent = tr(section.title);
    el.appendChild(title);

    if (section.note) {
      const note = document.createElement("p");
      note.className = "section-note";
      note.textContent = tr(section.note);
      el.appendChild(note);
    }

    if (section.items) el.appendChild(renderItemsGrid(section.items));

    if (section.subsections) {
      section.subsections.forEach(function (sub) {
        const subTitle = document.createElement("h3");
        subTitle.className = "subsection-title";
        subTitle.textContent = tr(sub.title);
        el.appendChild(subTitle);

        if (sub.note) {
          const note = document.createElement("p");
          note.className = "section-note";
          note.textContent = tr(sub.note);
          el.appendChild(note);
        }

        el.appendChild(renderItemsGrid(sub.items));
      });
    }

    if (section.callouts) {
      section.callouts.forEach(function (c) { el.appendChild(renderCallout(c)); });
    }

    return el;
  }

  function renderMenu() {
    const container = document.getElementById("menu-sections");
    container.innerHTML = "";
    MENU_DATA.forEach(function (section) { container.appendChild(renderSection(section)); });
  }

  // -------------------------------------------------------------------
  // Navegación de categorías (sticky) + scroll-spy
  // -------------------------------------------------------------------
  function renderCatNav() {
    const nav = document.getElementById("cat-nav");
    nav.innerHTML = "";
    MENU_DATA.forEach(function (section) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cat-nav-btn";
      btn.dataset.target = section.id;
      btn.textContent = tr(section.title);
      btn.addEventListener("click", function () {
        const target = document.getElementById(section.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      nav.appendChild(btn);
    });
  }

  // Centra el botón activo dentro del carril horizontal de categorías,
  // usando scrollLeft directo: nunca tocar scrollIntoView aquí, porque al
  // vivir el botón dentro del header "sticky", scrollIntoView intenta
  // además desplazar verticalmente el documento y pelea con el scroll
  // suave hacia la sección (lo cancela a mitad de camino).
  function centerNavButton(btn) {
    const rail = document.getElementById("cat-nav");
    if (!rail) return;
    const target = btn.offsetLeft - (rail.clientWidth / 2) + (btn.clientWidth / 2);
    rail.scrollTo({ left: target, behavior: "smooth" });
  }

  let scrollSpyObserver = null;
  function setupScrollSpy() {
    if (scrollSpyObserver) scrollSpyObserver.disconnect();
    const navButtons = Array.from(document.querySelectorAll(".cat-nav-btn"));
    scrollSpyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navButtons.forEach(function (b) { b.classList.remove("active"); });
          const btn = navButtons.find(function (b) { return b.dataset.target === entry.target.id; });
          if (btn) {
            btn.classList.add("active");
            centerNavButton(btn);
          }
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    document.querySelectorAll(".menu-section").forEach(function (sec) { scrollSpyObserver.observe(sec); });
  }

  // animated=true solo la primera vez (al salir del intro), para dar el
  // efecto de cascada. En cambios de idioma se re-renderiza todo el menú
  // (nuevos nodos DOM), y si volviéramos a animar en cascada cada vez,
  // una sección tardía (ej. la última de 19) quedaría en opacity:0 por
  // más de un segundo cada vez que el usuario cambia de idioma.
  function cascadeReveal(animated) {
    const sections = document.querySelectorAll(".menu-section");
    if (!animated) {
      sections.forEach(function (sec) { sec.classList.add("is-visible"); });
      return;
    }
    sections.forEach(function (sec, i) {
      setTimeout(function () { sec.classList.add("is-visible"); }, i * 70);
    });
  }

  // -------------------------------------------------------------------
  // Modal de detalle de plato
  // -------------------------------------------------------------------
  function openModal(item) {
    activeModalItem = item;
    document.getElementById("modal-title").textContent = tr(item.name);
    document.getElementById("modal-desc").textContent = item.desc ? tr(item.desc) : "";
    document.getElementById("modal-desc").hidden = !item.desc;
    document.getElementById("modal-price").textContent = t("modalPriceLabel") + ": " + item.price;

    const veganTag = document.getElementById("modal-vegan-tag");
    veganTag.hidden = !item.vegan;
    veganTag.textContent = t("veganTag");

    const featuredTag = document.getElementById("modal-featured-tag");
    featuredTag.hidden = item.tag !== "featured";
    featuredTag.textContent = t("featuredTag");

    const overlay = document.getElementById("modal-overlay");
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.getElementById("modal-overlay").hidden = true;
    document.body.style.overflow = "";
    activeModalItem = null;
  }

  function setupModal() {
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-overlay").addEventListener("click", function (e) {
      if (e.target.id === "modal-overlay") closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  // -------------------------------------------------------------------
  // Carruseles temáticos
  // -------------------------------------------------------------------
  function buildCarousel(key, data) {
    const wrap = document.createElement("div");
    wrap.className = "carousel";
    wrap.dataset.carouselKey = key;

    const label = document.createElement("span");
    label.className = "carousel-label";
    label.textContent = tr(data.title);
    wrap.appendChild(label);

    const track = document.createElement("div");
    track.className = "carousel-track";
    data.slides.forEach(function (slide) {
      const s = document.createElement("div");
      s.className = "carousel-slide";
      s.innerHTML = '<span class="cam">📷</span><span class="carousel-caption"></span>';
      s.querySelector(".carousel-caption").textContent = tr(slide);
      track.appendChild(s);
    });
    wrap.appendChild(track);

    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "carousel-btn carousel-prev";
    prev.setAttribute("aria-label", "Anterior");
    prev.textContent = "‹";

    const next = document.createElement("button");
    next.type = "button";
    next.className = "carousel-btn carousel-next";
    next.setAttribute("aria-label", "Siguiente");
    next.textContent = "›";

    const dots = document.createElement("div");
    dots.className = "carousel-dots";

    let current = 0;
    const total = data.slides.length;

    function update() {
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      Array.from(dots.children).forEach(function (d, i) { d.classList.toggle("active", i === current); });
    }
    function goTo(i) { current = (i + total) % total; update(); }

    for (let i = 0; i < total; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", function () { goTo(i); });
      dots.appendChild(dot);
    }

    prev.addEventListener("click", function () { goTo(current - 1); });
    next.addEventListener("click", function () { goTo(current + 1); });

    wrap.appendChild(prev);
    wrap.appendChild(next);
    wrap.appendChild(dots);

    // Soporte táctil (swipe)
    let touchStartX = null;
    wrap.addEventListener("touchstart", function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener("touchend", function (e) {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
      touchStartX = null;
    });

    // Autoplay, pausado al interactuar
    let autoplay = setInterval(function () { goTo(current + 1); }, 4500);
    wrap.addEventListener("mouseenter", function () { clearInterval(autoplay); });

    return wrap;
  }

  function renderCarousels() {
    const container = document.getElementById("carousels");
    container.innerHTML = "";
    Object.keys(CAROUSEL_DATA).forEach(function (key) {
      container.appendChild(buildCarousel(key, CAROUSEL_DATA[key]));
    });
  }

  // -------------------------------------------------------------------
  // Footer: sucursales, redes, whatsapp
  // -------------------------------------------------------------------
  function renderBranches() {
    const list = document.getElementById("branches-list");
    list.innerHTML = "";
    BRANCHES.forEach(function (branch) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(branch.mapsQuery);
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = "<span>📍</span><span></span>";
      a.querySelector("span:last-child").textContent = branch.name;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function wireFooterLinks() {
    document.getElementById("whatsapp-link").href = "https://wa.me/" + CONTACT_INFO.whatsapp;
    document.getElementById("instagram-link").href = CONTACT_INFO.instagram;
    document.getElementById("facebook-link").href = CONTACT_INFO.facebook;
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------
  // i18n: aplicar a nodos estáticos + re-render de contenido dinámico
  // -------------------------------------------------------------------
  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.documentElement.lang = currentLang;
  }

  function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    applyStaticI18n();
    renderMenu();
    renderCatNav();
    renderBranches();
    renderCarousels();
    setupScrollSpy();
    cascadeReveal(false);
    if (activeModalItem) openModal(activeModalItem);
  }

  function setupLanguageSwitcher() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { setLanguage(btn.dataset.lang); });
    });
  }

  // -------------------------------------------------------------------
  // Intro → revelar carta
  // -------------------------------------------------------------------
  function revealMenu() {
    const intro = document.getElementById("intro");
    const nav = document.getElementById("site-nav");
    const main = document.getElementById("menu-main");

    intro.classList.add("is-closing");

    setTimeout(function () {
      intro.style.display = "none";
      nav.hidden = false;
      main.hidden = false;
      setupScrollSpy();
      cascadeReveal(true);
    }, 650);
  }

  // -------------------------------------------------------------------
  // Botón volver arriba
  // -------------------------------------------------------------------
  function setupBackToTop() {
    const btn = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
      btn.hidden = window.scrollY < 500;
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // -------------------------------------------------------------------
  // Init
  // -------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    applyStaticI18n();
    document.querySelector('.lang-btn[data-lang="' + DEFAULT_LANG + '"]').classList.add("active");

    renderMenu();
    renderCatNav();
    renderBranches();
    renderCarousels();
    wireFooterLinks();
    setupModal();
    setupLanguageSwitcher();
    setupBackToTop();

    document.getElementById("btn-ver-menu").addEventListener("click", revealMenu);
  });
})();
