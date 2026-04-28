function creaArraypatitos(){
    const arrayPatitos = [
  {
    nombre: "EL ORIGINAL",
    categoria: "otros",
    precio: "12.99 €",
    imagen: "./assets/images/original.png",
    alt: "Pato de goma amarillo clásico"
  },
  {
    nombre: "CHEFSITO",
    categoria: "profesiones",
    precio: "12.99 €",
    imagen: "./assets/images/cocinero.jpg",
    alt: "Pato de goma amarillo disfrazado de cocinero"
  },
  {
    nombre: "DRÁCUACK",
    categoria: "peliculas",
    precio: "12.99 €",
    imagen: "./assets/images/vampiro.jpg",
    alt: "Pato de goma amarillo disfrazado de drácula"
  },
  {
    nombre: "VACUACK",
    categoria: "peliculas",
    precio: "12.99 €",
    imagen: "./assets/images/vaquero.jpg",
    alt: "Pato de goma amarillo disfrazado de vaquero"
  },
  {
    nombre: "GUA-FI",
    categoria: "profesiones",
    precio: "12.99 €",
    imagen: "./assets/images/informatico.jpg",
    alt: "Pato de goma amarillo disfrazado de programador",
    link: "detail.html"
  },
  {
    nombre: "MAGO ALAKACUÁ",
    categoria: "profesiones",
    precio: "12.99 €",
    imagen: "./assets/images/mago.jpg",
    alt: "Pato de goma amarillo disfrazado de mago"
  },
  {
    nombre: "VIKINGO",
    categoria: "peliculas",
    precio: "12.99 €",
    imagen: "./assets/images/vikingo.jpg",
    alt: "Pato de goma amarillo disfrazado de vikingo"
  },
  {
    nombre: "PRINCESA PLUMA",
    categoria: "otros",
    precio: "12.99 €",
    imagen: "./assets/images/princesa.jpg",
    alt: "Pato de goma amarillo disfrazado de princesa"
  },
  {
    nombre: "CUAKERO",
    categoria: "profesiones",
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
    categoria: "otros",
    precio: "12.99 €",
    imagen: "./assets/images/ninja.jpg",
    alt: "Pato de goma amarillo disfrazado de ninja"
  },
  {
    nombre: "CUACTABLE",
    categoria: "profesiones",
    precio: "12.99 €",
    imagen: "./assets/images/contable.jpg",
    alt: "Pato de goma amarillo disfrazado de contable"
  },
  {
    nombre: "SUPERCUAC",
    categoria: "peliculas",
    precio: "12.99 €",
    imagen: "./assets/images/super.jpg",
    alt: "Pato de goma amarillo disfrazado de Superman"
  },
  {
    nombre: "ASTROCUAC",
    categoria: "profesiones",
    precio: "12.99 €",
    imagen: "./assets/images/astronauta.jpg",
    alt: "Pato de goma amarillo disfrazado de astronauta"
  },
  {
    nombre: "CAPITÁN PARCHE",
    categoria: "otros",
    precio: "12.99 €",
    imagen: "./assets/images/pirata.jpg",
    alt: "Pato de goma amarillo disfrazado de pirata"
  }
];
    return arrayPatitos;
}

function renderpatitos(patitos)
{
    const catalogo = document.getElementById("catalog");

    //si renderizamos sin limpiar catalogo se duplicarian los patitos
    //limpiar los elementos del catalogo
    catalogo.innerHTML = "";

    patitos.forEach(pato => {
    const card = document.createElement("article");
    card.classList.add("card");

    // card.innerHTML = `
    //     <img src="${pato.imagen}" alt="${pato.alt}" class="card_img">
    //     <h2 class="h2_catalog">${pato.nombre}</h2>
    //     <p class="p_catalog">${pato.precio}</p>
    //     <button class="button_catalog">
    //     ${pato.link 
    //         ? `<a href="${pato.link}">VER DETALLES</a>` 
    //         : "VER DETALLES"}
    //     </button>
    // `;

    card.innerHTML = `
        <img src="${pato.imagen}" alt="${pato.alt}" class="card_img">
        <h2 class="h2_catalog">${pato.nombre}</h2>
        <p class="p_catalog">${pato.precio}</p>
        <div id="capabotones">
        <button class="button_catalog">
            <i class="fas fa-shopping-cart"></i>
        </button>
         <button class="button_catalog">
           ${pato.link 
             ? `<a href="${pato.link}"><i class="fa-solid fa-eye"></i></a>` 
             : '<i class="fa-solid fa-eye"></i>'}
        </button>   
        </div> 
    `;

    catalogo.appendChild(card);
});
}

function filtrarCategoria(listaPatitos, filtrocategoria){
    alert ("evento filtrar categoria");
    if (filtrocategoria!="todos") 
    {
        const patitosfiltrados = listaPatitos.filter(cat => cat.categoria === filtrocategoria);
        renderpatitos(patitosfiltrados);
    }
    else
    {
        renderpatitos(listaPatitos);
    }    
   
}

export {creaArraypatitos, renderpatitos,filtrarCategoria}