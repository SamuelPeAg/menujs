document.addEventListener("DOMContentLoaded", function () {
  var imagenes = [
    "../img/Mano_Celestial.png",
    "../img/tornado_fuego.jpg",
    "../img/cañon_meteoritos.jpg"
  ];

  var bgColor = document.getElementById("bgColor");
  var items = document.getElementById("items");
  var btnApplyColor = document.getElementById("btnApplyColor");
  var btnAdd = document.getElementById("btnAdd");
  var btnReset = document.getElementById("btnReset");

  function imagenAleatoria() {
    return imagenes[Math.floor(Math.random() * imagenes.length)];
  }

  function crearElemento(color, src) {
    var card = document.createElement("div");
    card.className = "card item";
    card.style.background = color;

    var img = document.createElement("img");
    img.src = src;
    img.alt = "Elemento";
    img.style.width = "100%";
    img.style.height = "180px";
    img.style.objectFit = "contain";
    img.style.display = "block";
    img.style.marginBottom = "10px";

    var btnCambiar = document.createElement("button");
    btnCambiar.type = "button";
    btnCambiar.className = "btnChange";
    btnCambiar.textContent = "Cambiar";

    var btnBorrar = document.createElement("button");
    btnBorrar.type = "button";
    btnBorrar.className = "btnDelete";
    btnBorrar.textContent = "Borrar";

    card.appendChild(img);
    card.appendChild(btnCambiar);
    card.appendChild(document.createTextNode(" "));
    card.appendChild(btnBorrar);

    return card;
  }

  function ponerInicial() {
    items.innerHTML = "";
    var i = 0;
    while (i < 4) {
      items.appendChild(crearElemento(bgColor.value, imagenAleatoria()));
      i++;
    }
  }

  btnApplyColor.addEventListener("click", function () {
    var all = document.querySelectorAll(".item");
    var i = 0;
    while (i < all.length) {
      all[i].style.background = bgColor.value;
      i++;
    }
  });

  btnAdd.addEventListener("click", function () {
    items.appendChild(crearElemento(bgColor.value, imagenAleatoria()));
  });

  btnReset.addEventListener("click", function () {
    bgColor.value = "#222222";
    ponerInicial();
  });

  items.addEventListener("click", function (e) {
    var changeBtn = e.target.closest(".btnChange");
    var deleteBtn = e.target.closest(".btnDelete");

    if (deleteBtn) {
      var card = deleteBtn.closest(".item");
      if (card) card.remove();
      return;
    }

    if (changeBtn) {
      var card2 = changeBtn.closest(".item");
      if (!card2) return;
      var img = card2.querySelector("img");
      if (!img) return;
      img.src = imagenAleatoria();
    }
  });

  ponerInicial();
});
