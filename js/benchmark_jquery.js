jQuery(function () {
  var estado = "listo";
  var timeoutId = null;
  var inicio = 0;
  var mejor = null;

  function pintar(color) {
    jQuery("#humanArea").css("background", color);
  }

  function texto(titulo, msg) {
    jQuery("#infoTitle").text(titulo);
    jQuery("#infoText").text(msg);
  }

  function reset() {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = null;
    estado = "listo";
    pintar("#111");
    texto("Click para empezar", "Cuando cambie a VERDE, haz click lo más rápido posible.");
  }

  function empezar() {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = null;

    estado = "espera";
    pintar("#b91c1c");
    texto("Espera...", "No hagas click todavía.");

    var delay = Math.floor(1500 + Math.random() * 3500);
    timeoutId = setTimeout(function () {
      timeoutId = null;
      estado = "verde";
      inicio = Date.now();
      pintar("#16a34a");
      texto("YA", "Click ahora.");
    }, delay);
  }

  jQuery("#humanArea").on("click", function () {
    if (estado === "listo" || estado === "resultado" || estado === "pronto") {
      empezar();
      return;
    }

    if (estado === "espera") {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = null;
      estado = "pronto";
      pintar("#111");
      texto("Demasiado pronto", "Click para intentarlo otra vez.");
      return;
    }

    if (estado === "verde") {
      var ms = Date.now() - inicio;
      if (mejor === null || ms < mejor) mejor = ms;
      estado = "resultado";
      pintar("#111");
      texto(ms + " ms", "Mejor: " + mejor + " ms. Click para repetir.");
    }
  });

  jQuery("#btnReset").on("click", function () {
    reset();
  });

  reset();
});
