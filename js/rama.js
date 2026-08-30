(function () {
  var via = document.getElementById("rama-via");
  var foto = document.getElementById("rama-foto");
  var btnVia = document.getElementById("btn-via");
  var btnFoto = document.getElementById("btn-foto");
  if (!via || !foto || !btnVia || !btnFoto) return;

  via.hidden = true;
  foto.hidden = true;

  function mostrar(cual) {
    var esVia = cual === "via";
    via.hidden = !esVia;
    foto.hidden = esVia;
    btnVia.setAttribute("aria-pressed", esVia ? "true" : "false");
    btnFoto.setAttribute("aria-pressed", esVia ? "false" : "true");
    btnVia.classList.toggle("rama-btn-ghost", !esVia);
    btnFoto.classList.toggle("rama-btn-ghost", esVia);
    (esVia ? via : foto).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  btnVia.addEventListener("click", function () { mostrar("via"); });
  btnFoto.addEventListener("click", function () { mostrar("foto"); });
})();
