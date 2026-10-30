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

  // painted map: before (blockout) / after (painted) slider, with layer views for the painted side
  function mapStage(m) {
    if (!m.before.length && Object.keys(m.views).length === 1)
      return sceneStage({ w: m.w, h: m.h, title: m.title, frames: m.views.all });
    const z = Math.max(1, Math.min(4, Math.floor(1200 / m.w)));
    const W = m.w * z, H = m.h * z;
    const before = h("img", { src: m.before.length ? m.before[0].src : "", width: W, height: H, alt: "blockout", loading: "lazy" });
    const views = Object.keys(m.views);
    let view = "all";
    const after = h("img", { src: m.views[view][0].src, width: W, height: H, alt: "painted", class: "after", loading: "lazy" });
    const pb = { img: before, frames: m.before, i: 0, t: 0 };
    const pa = { img: after, frames: m.views[view], i: 0, t: 0 };
    players.push(pb, pa);
    const lblL = h("div", { class: "lbl l" }, "blockout (tiles)");
    const lblR = h("div", { class: "lbl r" }, "painted");
    const handle = h("div", { class: "handle" });
    const box = h("div", { class: "slider", style: `width:${W}px;height:${H}px` }, before, after, handle, lblL, lblR);
    function setPos(f) {
      f = Math.max(0, Math.min(1, f));
      after.style.clipPath = `inset(0 0 0 ${f * 100}%)`;
      handle.style.left = `${f * W}px`;
    }
    let drag = false;
    const move = e => { const r = box.getBoundingClientRect(); setPos((e.clientX - r.left) / r.width); };
    box.addEventListener("pointerdown", e => { drag = true; box.setPointerCapture(e.pointerId); move(e); });
    box.addEventListener("pointermove", e => { if (drag) move(e); });
    box.addEventListener("pointerup", () => { drag = false; });
    setPos(m.before.length ? 0.5 : 0);
    const bar = h("div", { class: "variants" }, h("span", { class: "sub" }, "painted side shows: "), views.map(v => {
      const b = h("button", { class: v === view ? "on" : "", onclick: () => {
        view = v; pa.frames = m.views[v]; pa.i = 0; pa.t = 0; after.src = pa.frames[0].src;
        [...bar.querySelectorAll("button")].forEach(x => x.classList.toggle("on", x === b));
      } }, v);
      return b;
    }));
    return h("div", {}, bar, h("div", { class: "stage" }, box), h("div", { class: "sub" }, "Drag across the picture to compare."));
  }

  function badge(text, cls) { return h("span", { class: "badge " + cls }, text); }

  // critic changes: the asset before the critic loop (left) and after it (right), bottoms aligned
  function pairStage(c) {
    c = Object.assign({}, c, { w: c.after.w, h: c.after.h, bw: c.before.w, bh: c.before.h });
    const z = Math.max(2, Math.min(8, Math.floor(320 / Math.max(c.w, c.bw))));
    const W = Math.max(c.w, c.bw) * z, H = Math.max(c.h, c.bh) * z;
    const place = (w, hh) => `position:absolute;left:${(W - w * z) / 2}px;top:${H - hh * z}px;image-rendering:pixelated`;
    const before = pic(c.before, z, { style: place(c.bw, c.bh), title: "before" });
    const after = pic(c.after, z, { style: place(c.w, c.h), title: "after" });
    const top = h("div", { style: `position:absolute;inset:0` }, after);
    const handle = h("div", { class: "handle" });
    const box = h("div", { class: "slider bg-" + bg, style: `width:${W}px;height:${H}px` },
      before, top, handle, h("div", { class: "lbl l" }, "before"), h("div", { class: "lbl r" }, "after"));
    function setPos(f) {
      f = Math.max(0, Math.min(1, f));
      top.style.clipPath = `inset(0 0 0 ${f * 100}%)`;
      handle.style.left = `${f * W}px`;
    }
    let drag = false;
    const move = e => { const r = box.getBoundingClientRect(); setPos((e.clientX - r.left) / r.width); };
    box.addEventListener("pointerdown", e => { drag = true; box.setPointerCapture(e.pointerId); move(e); });
    box.addEventListener("pointermove", e => { if (drag) move(e); });
    box.addEventListener("pointerup", () => { drag = false; });
    setPos(0.5);
    return h("div", { class: "card" }, h("div", { class: "id" }, h("a", { href: "#a-" + c.id }, c.id)),
      h("div", { class: "stage" }, box),
      badge(c.verdict === "pass" ? "critic passed" : "critic unresolved", c.verdict === "pass" ? "b-ok" : "b-err"),
      c.fixed.length ? h("div", { class: "sub" }, "Fixed: " + c.fixed.join("; ")) : null,
      c.open.length ? h("div", { class: "lint" }, "Open: " + c.open.join("\n")) : null,
      h("div", { class: "sub" }, "To roll back: the old version is in history/ with the commit it came from; restore that file from git."));
  }

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

  function render() {
    players.length = 0;
    const main = $("#main");
    main.innerHTML = "";
    const toc = $("#toc");
    toc.innerHTML = "";
    const add = (id, title, el) => {
      main.append(h("section", { id }, h("h2", {}, title), el));
      toc.append(h("a", { href: "#" + id }, title));
    };
    if (R.notes) add("notes", "Notes", h("div", { class: "notes" }, R.notes));
    add("palette", `Palette v${R.palette_version}`, h("div", {}, R.palette.map(r =>
      h("div", { class: "ramp" }, h("div", { class: "name" }, r.ramp),
        r.colors.map((c, i) => h("div", { class: "swatch", style: `background:${c}`, title: `${r.names[i]} ${c}` })),
        badge(r.status, r.status === "approved" ? "b-ok" : "b-draft")))));
    if (R.maps && R.maps.length) add("maps", "Painted maps", h("div", {}, R.maps.map(m =>
      h("div", { class: "scene" }, h("div", { class: "cap" }, m.title), mapStage(m)))));
    if (R.scenes.length) add("scenes", "Scenes", h("div", {}, R.scenes.map(s =>
      h("div", { class: "scene" }, h("div", { class: "cap" }, s.title),
        sceneStage(s)))));
    if (R.critic_changes && R.critic_changes.length) add("critic", "Critic changes", h("div", {},
      h("div", { class: "sub" }, "Art the critics changed. Drag across each picture to compare before and after."),
      h("div", { class: "grid" }, R.critic_changes.map(pairStage))));
    for (const g of R.groups) add("g-" + g.name, g.name, h("div", { class: "grid" }, g.assets.map(card)));
    for (const s of R.scenes) if (s.frames) { /* scenes animate at fixed 3x */ }
  }

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
  render();
  requestAnimationFrame(tick);
})();
