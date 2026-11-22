/* =============================================================================
   Small touches of life (no dependencies):
   1. the Motivation path fades in step by step as you scroll to it;
   2. the Trajectory route draws itself, then a light travels it;
   3. Pixel, the robot in the Contact section: her eyes follow the pointer,
      a click gives a high-five, hearts and a joke. The text follows the
      EN / FR switch (it watches the lang attribute that app.js sets).
   ============================================================================= */
(function () {
  "use strict";
  var root = document.documentElement;
  function reduce() { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function lang() { return root.getAttribute("lang") === "fr" ? "fr" : "en"; }

  /* ---------------------- 1. the path in Motivation ---------------------- */
  (function () {
    var flow = document.getElementById("mo-flow");
    if (!flow || !("IntersectionObserver" in window) || reduce()) return;
    flow.classList.add("fx");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    Array.prototype.forEach.call(flow.querySelectorAll(".mo-node"), function (n) { io.observe(n); });
  })();


  /* --------------------------- 3. the trajectory --------------------------- */
  (function () {
    var sec = document.getElementById("trajectory"), fig = document.getElementById("journey");
    if (!sec || !fig) return;
    var move = document.getElementById("jr-move");
    // a card lights its stop on the route (and the other way round)
    Array.prototype.forEach.call(sec.querySelectorAll(".jr-card"), function (card) {
      var node = document.getElementById("jr-n" + card.getAttribute("data-n"));
      function on() { if (node) node.classList.add("is-hot"); }
      function off() { if (node) node.classList.remove("is-hot"); }
      card.addEventListener("mouseenter", on); card.addEventListener("mouseleave", off);
    });
    if (reduce() || !("IntersectionObserver" in window)) { fig.classList.add("is-in"); return; }
    sec.classList.add("fx"); fig.classList.add("fx");
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      sec.classList.add("is-in"); fig.classList.add("is-in");
      // the light starts once the route is drawn
      setTimeout(function () { try { if (move && move.beginElement) move.beginElement(); } catch (e) {} }, 2700);
    }, { threshold: 0.3 });
    io.observe(sec);
  })();

  /* ------------------------------ 2. Pixel ------------------------------- */
  var bot = document.getElementById("pet-bot"), say = document.getElementById("pet-say");
  var cnt = document.getElementById("pet-count"), unit = document.getElementById("pet-unit");
  var pet = document.getElementById("pet");
  if (!bot || !say || !pet) return;

  var TXT = {
    en: {
      hello: "Hi! I'm Pixel. I run on pink and good vibes. Click me!",
      label: "Give Pixel a high-five", one: "high-five", many: "high-fives",
      mail: "Okay, you've earned it. Write to me:",
      jokes: [
        "My loss is converging, and so is my love for tea.",
        "I never overfit. I just really love my training set.",
        "Gradient descent: falling downhill, on purpose.",
        "I asked an LLM for a joke. It cited three sources and a footnote.",
        "Debugging is a conversation with past-you. Past-you is rude.",
        "P(you send an email now) = 0.98. Prove the model right!",
        "Careful: high-fives are not differentiable.",
        "Imene fine-tunes models. And her tea, apparently.",
        "I trust my agents. I also read their traces.",
        "Attention is all you need. And snacks."
      ]
    },
    fr: {
      hello: "Coucou ! Je suis Pixel. Je fonctionne au rose et à la bonne humeur. Clique sur moi !",
      label: "Faire un high-five à Pixel", one: "high-five", many: "high-fives",
      mail: "Bon, tu l'as mérité. Écris-moi :",
      jokes: [
        "Ma loss converge, et mon amour du thé aussi.",
        "Je ne fais jamais de surapprentissage. J'adore juste mon jeu d'entraînement.",
        "Descente de gradient : tomber en pente, mais exprès.",
        "J'ai demandé une blague à un LLM. Il a cité trois sources et une note de bas de page.",
        "Déboguer, c'est discuter avec soi-même d'hier. Et il est désagréable.",
        "P(tu envoies un mail maintenant) = 0,98. Donne raison au modèle !",
        "Attention : les high-fives ne sont pas différentiables.",
        "Imene fine-tune des modèles. Et son thé, apparemment.",
        "Je fais confiance à mes agents. Je lis aussi leurs traces.",
        "L'attention, c'est tout ce qu'il faut. Et des biscuits."
      ]
    }
  };

  var n = 0, order = [], pos = 0, hopTimer = 0, started = false;
  function shuffle() {
    order = TXT.en.jokes.map(function (_, i) { return i; });
    for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = order[i]; order[i] = order[j]; order[j] = t; }
    pos = 0;
  }
  shuffle();

  function show(node) {
    say.textContent = "";
    if (typeof node === "string") say.textContent = node; else say.appendChild(node);
    say.classList.remove("is-new"); void say.offsetWidth; say.classList.add("is-new");
  }
  function counter() { cnt.textContent = n; unit.textContent = n === 1 ? TXT[lang()].one : TXT[lang()].many; }
  function refreshLang() {
    bot.setAttribute("aria-label", TXT[lang()].label);
    counter();
    if (!started) say.textContent = TXT[lang()].hello;
  }

  function hearts() {
    if (reduce()) return;
    for (var i = 0; i < 7; i++) {
      var h = document.createElement("span");
      h.className = "pet-heart"; h.setAttribute("aria-hidden", "true"); h.textContent = "\u2665";
      h.style.setProperty("--dx", (Math.random() * 190 - 95).toFixed(0) + "px");
      h.style.setProperty("--dy", (-60 - Math.random() * 110).toFixed(0) + "px");
      h.style.setProperty("--r", (Math.random() * 60 - 30).toFixed(0) + "deg");
      h.style.animationDelay = (i * 40) + "ms";
      bot.appendChild(h);
      (function (el) { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1300); })(h);
    }
  }

  bot.addEventListener("click", function () {
    started = true; n++; counter();
    bot.classList.remove("is-hop"); void bot.offsetWidth; if (!reduce()) bot.classList.add("is-hop");
    bot.classList.add("is-happy"); clearTimeout(hopTimer);
    hopTimer = setTimeout(function () { bot.classList.remove("is-happy"); }, 1100);
    hearts();
    var L = TXT[lang()];
    if (n % 8 === 0) {
      var box = document.createElement("span");
      box.appendChild(document.createTextNode(L.mail));
      var mailLink = document.querySelector('#footer-links a[href^="mailto:"]');
      var addr = mailLink ? mailLink.getAttribute("href").replace(/^mailto:/, "") : "theimeneart@gmail.com";
      var a = document.createElement("a"); a.href = "mailto:" + addr; a.textContent = addr;
      box.appendChild(a); show(box);
      return;
    }
    if (pos >= order.length) shuffle();
    show(L.jokes[order[pos++]]);
  });

  /* the eyes follow the pointer */
  var pupils = Array.prototype.slice.call(bot.querySelectorAll(".pet-pupil")), raf = 0, lx = 0, ly = 0;
  function look() {
    raf = 0;
    var r = bot.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height * 0.42;
    var dx = lx - cx, dy = ly - cy, d = Math.sqrt(dx * dx + dy * dy) || 1, k = Math.min(1, d / 220) * 6;
    var x = (dx / d) * k, y = (dy / d) * k;
    pupils.forEach(function (p) { p.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)"; });
  }
  if (!reduce()) {
    document.addEventListener("pointermove", function (ev) { lx = ev.clientX; ly = ev.clientY; if (!raf) raf = requestAnimationFrame(look); }, { passive: true });
  }

  refreshLang();
  new MutationObserver(refreshLang).observe(root, { attributes: true, attributeFilter: ["lang"] });
})();