jQuery(function () {
  var imagenes = [
    "../img/Mano_Celestial.png",
    "../img/tornado_fuego.jpg",
    "../img/cañon_meteoritos.jpg"
  ];

  function imagenAleatoria() {
    return imagenes[Math.floor(Math.random() * imagenes.length)];
  }

  function colorActual() {
    return jQuery("#bgColor").val();
  }

  function crearElemento(color, src) {
    var card = jQuery("<div></div>");
    card.addClass("card item");
    card.css("background", color);

    var img = jQuery("<img>");
    img.attr("src", src);
    img.attr("alt", "Elemento");
    img.css("width", "100%");
    img.css("height", "180px");
    img.css("object-fit", "contain");
    img.css("display", "block");
    img.css("margin-bottom", "10px");

    var btnCambiar = jQuery("<button></button>");
    btnCambiar.attr("type", "button");
    btnCambiar.addClass("btnChange");
    btnCambiar.text("Cambiar");

    var btnBorrar = jQuery("<button></button>");
    btnBorrar.attr("type", "button");
    btnBorrar.addClass("btnDelete");
    btnBorrar.text("Borrar");

    card.append(img);
    card.append(btnCambiar);
    card.append(" ");
    card.append(btnBorrar);

    return card;
  }

  function ponerInicial() {
    jQuery("#items").empty();
    var i = 0;
    while (i < 4) {
      jQuery("#items").append(crearElemento(colorActual(), imagenAleatoria()));
      i++;
    }
  }

  jQuery("#btnApplyColor").on("click", function () {
    jQuery(".item").css("background", colorActual());
  });

  jQuery("#btnAdd").on("click", function () {
    jQuery("#items").append(crearElemento(colorActual(), imagenAleatoria()));
  });

  jQuery("#btnReset").on("click", function () {
    jQuery("#bgColor").val("#222222");
    ponerInicial();
  });

  jQuery("#items").on("click", ".btnDelete", function () {
    jQuery(this).closest(".item").remove();
  });

  jQuery("#items").on("click", ".btnChange", function () {
    jQuery(this).closest(".item").find("img").attr("src", imagenAleatoria());
  });

  ponerInicial();
});
