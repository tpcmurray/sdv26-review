(function () {
  const R = window.REVIEW;
  const $ = (s, el = document) => el.querySelector(s);
  const h = (tag, attrs = {}, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") el.className = v; else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    for (const kid of kids.flat()) if (kid != null) el.append(kid.nodeType ? kid : document.createTextNode(kid));
    return el;
  };
  // a frame is either packed in a sheet ({sheet, x, y, w, h}) or a file of its own ({src}: the big maps)
  function setPic(el, f, z) {
    if (f.sheet == null) { el.src = f.src; return; }
    const s = R.sheets[f.sheet];
    Object.assign(el.style, { width: f.w * z + "px", height: f.h * z + "px", backgroundImage: `url(${s.src})`,
      backgroundSize: `${s.w * z}px ${s.h * z}px`, backgroundPosition: `${-f.x * z}px ${-f.y * z}px` });
  }
  function pic(f, z, attrs = {}) {
    if (f.sheet == null) return h("img", Object.assign({ src: f.src, loading: "lazy", alt: "" }, attrs));
    const el = h("div", attrs);
    el.classList.add("pic");
    setPic(el, f, z);
    return el;
  }
  let zoom = 6, bg = "checker", playing = true;
  const players = [];

  function stage(frames, w, hgt) {
    const img = pic(frames[0], zoom);
    const wrap = h("div", { class: "stage bg-" + bg }, img);
    const p = { img, z: zoom, frames, i: 0, t: 0, w, hgt, wrap };
    players.push(p);
    return wrap;
  }

  function sceneStage(s) {
    const z = Math.max(1, Math.min(4, Math.floor(1200 / s.w)));
    const img = h("img", { src: s.frames[0].src, width: s.w * z, height: s.h * z, alt: s.title, loading: "lazy" });
    players.push({ img, frames: s.frames, i: 0, t: 0 });
    return h("div", { class: "stage" }, img);
  }

  // painted map, with buttons for its layer views
  function mapStage(m) {
    const views = Object.keys(m.views);
    if (views.length === 1) return sceneStage({ w: m.w, h: m.h, title: m.title, frames: m.views.all });
    const z = Math.max(1, Math.min(4, Math.floor(1200 / m.w)));
    let view = "all";
    const img = h("img", { src: m.views[view][0].src, width: m.w * z, height: m.h * z, alt: m.title, loading: "lazy" });
    const p = { img, frames: m.views[view], i: 0, t: 0 };
    players.push(p);
    const bar = h("div", { class: "variants" }, h("span", { class: "sub" }, "shows: "), views.map(v => {
      const b = h("button", { class: v === view ? "on" : "", onclick: () => {
        view = v; p.frames = m.views[v]; p.i = 0; p.t = 0; img.src = p.frames[0].src;
        [...bar.querySelectorAll("button")].forEach(x => x.classList.toggle("on", x === b));
      } }, v);
      return b;
    }));
    return h("div", {}, bar, h("div", { class: "stage" }, img));
  }

  function badge(text, cls) { return h("span", { class: "badge " + cls }, text); }

  function criticNote(r) {
    if (!r) return null;
    const ok = r.verdict === "pass";
    return h("div", {},
      badge(ok ? `critic passed${r.rounds ? " (" + r.rounds + " round" + (r.rounds > 1 ? "s" : "") + ")" : ""}` : "critic unresolved", ok ? "b-ok" : "b-err"),
      r.fixed && r.fixed.length ? h("div", { class: "sub" }, "Critic fixes: " + r.fixed.join("; ")) : null,
      r.open && r.open.length ? h("div", { class: "lint" }, "Open: " + r.open.join("\n")) : null,
      r.overruled && r.overruled.length ? h("div", { class: "sub" }, "Overruled: " + r.overruled.join("; ")) : null);
  }

  function card(a) {
    const vnames = Object.keys(a.variants);
    let current = vnames[0];
    const holder = h("div");
    const frameRow = h("div", { class: "frames" });
    function show() {
      holder.innerHTML = "";
      const frames = a.variants[current];
      holder.append(stage(frames, a.w, a.h));
      frameRow.innerHTML = "";
      if (frames.length > 1) frames.forEach((f, i) =>
        frameRow.append(pic(f, 2, { title: `frame ${i} · ${f.ms}ms` })));
    }
    const vbar = vnames.length > 1 ? h("div", { class: "variants" }, vnames.map(v => {
      const b = h("button", { class: v === current ? "on" : "", onclick: () => {
        current = v; [...vbar.children].forEach(x => x.classList.toggle("on", x === b)); rebuild();
      } }, v);
      return b;
    })) : null;
    const errs = a.lint.filter(l => l.sev === "error").length, warns = a.lint.filter(l => l.sev === "warn").length;
    const badges = h("div", {},
      badge(a.status, a.status.startsWith("approved") ? "b-ok" : "b-status"),
      a.draft.length ? badge("draft palette: " + a.draft.join(", "), "b-draft") : null,
      errs ? badge(errs + " error", "b-err") : null,
      warns ? badge(warns + " warn", "b-warn") : null,
      !errs && !warns ? badge("lint clean", "b-ok") : null);
    const lint = a.lint.length ? h("div", { class: "lint" }, a.lint.map(l => l.id + " " + l.msg).join("\n")) : null;
    const hist = a.history ? h("div", { class: "history" }, a.history.map(v =>
      h("figure", {}, pic(v, 2),
        h("figcaption", { title: v.note }, "v" + v.v)))) : null;
    const c = h("div", { class: "card", id: "a-" + a.id },
      h("div", { class: "id" }, a.id),
      h("div", { class: "sub" }, `${a.kind} ${a.w}×${a.h}` + (a.generator ? ` · gen:${a.generator}` : "")),
      vbar, holder, frameRow, badges, criticNote(a.critic), lint,
      a.notes ? h("div", { class: "sub" }, a.notes) : null, hist);
    function rebuild() { show(); }
    show();
    return c;
  }

  // tabs: the asset groups gathered by kind, so the page shows one part at a time
  const TABS = [
    { id: "overview", title: "Palette" },
    { id: "maps", title: "Maps & scenes" },
    { id: "chars", title: "Characters", heads: ["chr"] },
    { id: "objects", title: "Objects", heads: ["obj"] },
    { id: "terrain", title: "Terrain & sea", heads: ["terrain", "water", "edge", "tile"] },
    { id: "items", title: "Fish & items", heads: ["fish", "item", "crop"] },
    { id: "ui", title: "UI", heads: ["ui"] },
    { id: "fx", title: "Effects & animation", heads: ["fx", "ani"] },
    { id: "other", title: "Other" },
  ];
  const head = g => g.name.split(".")[0];
  function tabOfGroup(g) {
    const t = TABS.find(t => t.heads && t.heads.includes(head(g)));
    return t ? t.id : "other";
  }
  function tabOfAsset(id) {
    const g = R.groups.find(g => g.assets.some(a => a.id === id));
    return g ? tabOfGroup(g) : null;
  }
  function hasContent(t) {
    if (t.id === "overview") return true;
    if (t.id === "maps") return (R.maps && R.maps.length) || R.scenes.length;
    if (t.id === "ui" && R.title_screen) return true;
    return R.groups.some(g => tabOfGroup(g) === t.id);
  }
  let tab = "overview";
  function readHash() {
    const m = location.hash.match(/^#tab=([\w-]+)/);
    if (m && TABS.some(t => t.id === m[1])) return { tab: m[1] };
    const a = location.hash.match(/^#a-(.+)$/);
    if (a) { const t = tabOfAsset(decodeURIComponent(a[1])); if (t) return { tab: t, asset: "a-" + decodeURIComponent(a[1]) }; }
    return null;
  }

  function render() {
    players.length = 0;
    const main = $("#main");
    main.innerHTML = "";
    const tabs = $("#tabs");
    tabs.innerHTML = "";
    for (const t of TABS) if (hasContent(t)) {
      const n = t.id === "overview" || t.id === "maps" ? null
        : R.groups.filter(g => tabOfGroup(g) === t.id).reduce((k, g) => k + g.assets.length, 0);
      tabs.append(h("a", { href: "#tab=" + t.id, class: t.id === tab ? "on" : "" }, t.title, n ? h("span", { class: "n" }, " " + n) : null));
    }
    const toc = $("#toc");
    toc.innerHTML = "";
    const sections = [];
    const add = (id, title, el) => {
      main.append(h("section", { id }, h("h2", {}, title), el));
      sections.push([id, title]);
    };
    if (tab === "overview") add("palette", `Palette v${R.palette_version}`, h("div", {}, R.palette.map(r =>
      h("div", { class: "ramp" }, h("div", { class: "name" }, r.ramp),
        r.colors.map((c, i) => h("div", { class: "swatch", style: `background:${c}`, title: `${r.names[i]} ${c}` })),
        badge(r.status, r.status === "approved" ? "b-ok" : "b-draft")))));
    if (tab === "maps") {
      if (R.maps && R.maps.length) add("maps", "Painted maps", h("div", {}, R.maps.map(m =>
        h("div", { class: "scene" }, h("div", { class: "cap" }, m.title), mapStage(m)))));
      if (R.scenes.length) add("scenes", "Scenes", h("div", {}, R.scenes.map(s =>
        h("div", { class: "scene" }, h("div", { class: "cap" }, s.title), sceneStage(s)))));
    }
    if (tab === "ui" && R.title_screen) add("title-screen", "Title screen", h("div", { class: "scene" },
      h("div", { class: "cap" }, R.title_screen.title), sceneStage(R.title_screen)));
    for (const g of R.groups) if (tabOfGroup(g) === tab)
      add("g-" + g.name, g.name, h("div", { class: "grid" }, g.assets.map(card)));
    // jump links within the tab, when it has more than one section
    if (sections.length > 1) for (const [id, title] of sections)
      toc.append(h("a", { href: "#", onclick: e => { e.preventDefault(); document.getElementById(id).scrollIntoView(); } }, title));
  }

  function go() {
    const r = readHash();
    if (r) tab = r.tab;
    render();
    if (r && r.asset) { const el = document.getElementById(r.asset); if (el) el.scrollIntoView(); }
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", go);

  let last = performance.now();
  function tick(now) {
    const dt = now - last; last = now;
    if (playing) for (const p of players) {
      if (p.frames.length < 2) continue;
      p.t += dt;
      const ms = p.frames[p.i].ms || 100;
      if (p.t >= ms) { p.t -= ms; p.i = (p.i + 1) % p.frames.length; setPic(p.img, p.frames[p.i], p.z); }
    }
    requestAnimationFrame(tick);
  }

  $("#meta").textContent = `built ${R.built} · lint: ${R.lint_totals.errors} errors, ${R.lint_totals.warnings} warnings`;
  $("#zoom").addEventListener("change", e => { zoom = +e.target.value; render(); });
  $("#bg").addEventListener("change", e => { bg = e.target.value; render(); });
  $("#play").addEventListener("change", e => { playing = e.target.checked; });
  go();
  requestAnimationFrame(tick);
})();
