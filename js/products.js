function creaArraypatitos(){
    const patitos = [
  {
    nombre: "EL ORIGINAL",
    precio: "12.99 €",
    imagen: "./assets/images/original.png",
    alt: "Pato de goma amarillo clásico"
  },
  {
    nombre: "CHEFSITO",
    precio: "12.99 €",
    imagen: "./assets/images/cocinero.jpg",
    alt: "Pato de goma amarillo disfrazado de cocinero"
  },
  {
    nombre: "DRÁCUACK",
    precio: "12.99 €",
    imagen: "./assets/images/vampiro.jpg",
    alt: "Pato de goma amarillo disfrazado de drácula"
  },
  {
    nombre: "VACUACK",
    precio: "12.99 €",
    imagen: "./assets/images/vaquero.jpg",
    alt: "Pato de goma amarillo disfrazado de vaquero"
  },
  {
    nombre: "GUA-FI",
    precio: "12.99 €",
    imagen: "./assets/images/informatico.jpg",
    alt: "Pato de goma amarillo disfrazado de programador",
    link: "detail.html"
  },
  {
    nombre: "MAGO ALAKACUÁ",
    precio: "12.99 €",
    imagen: "./assets/images/mago.jpg",
    alt: "Pato de goma amarillo disfrazado de mago"
  },
  {
    nombre: "VIKINGO",
    precio: "12.99 €",
    imagen: "./assets/images/vikingo.jpg",
    alt: "Pato de goma amarillo disfrazado de vikingo"
  },
  {
    nombre: "PRINCESA PLUMA",
    precio: "12.99 €",
    imagen: "./assets/images/princesa.jpg",
    alt: "Pato de goma amarillo disfrazado de princesa"
  },
  {
    nombre: "CUAKERO",
    precio: "12.99 €",
    imagen: "./assets/images/rockero.jpg",
    alt: "Pato de goma amarillo disfrazado de roquero"
  },
  {
    nombre: "HOLMESITO",
    precio: "12.99 €",
    imagen: "./assets/images/holmes.jpg",
    alt: "Pato de goma amarillo disfrazado de Sherlock Holmes"
  },
  {
    nombre: "NINJACUACK",
    precio: "12.99 €",
    imagen: "./assets/images/ninja.jpg",
    alt: "Pato de goma amarillo disfrazado de ninja"
  },
  {
    nombre: "CUACTABLE",
    precio: "12.99 €",
    imagen: "./assets/images/contable.jpg",
    alt: "Pato de goma amarillo disfrazado de contable"
  },
  {
    nombre: "SUPERCUAC",
    precio: "12.99 €",
    imagen: "./assets/images/super.jpg",
    alt: "Pato de goma amarillo disfrazado de Superman"
  },
  {
    nombre: "ASTROCUAC",
    precio: "12.99 €",
    imagen: "./assets/images/astronauta.jpg",
    alt: "Pato de goma amarillo disfrazado de astronauta"
  },
  {
    nombre: "CAPITÁN PARCHE",
    precio: "12.99 €",
    imagen: "./assets/images/pirata.jpg",
    alt: "Pato de goma amarillo disfrazado de pirata"
  }
];
    return patitos;
}

function renderpatitos(patitos)
{
    const catalogo = document.getElementById("catalog");

    patitos.forEach(pato => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${pato.imagen}" alt="${pato.alt}" class="card_img">
        <h2 class="h2_catalog">${pato.nombre}</h2>
        <p class="p_catalog">${pato.precio}</p>
        <button class="button_catalog">
        ${pato.link 
            ? `<a href="${pato.link}">VER DETALLES</a>` 
            : "VER DETALLES"}
        </button>
    `;

    catalogo.appendChild(card);
});

}

export {creaArraypatitos, renderpatitos}