// js/renderProducts.js

function creaArraypatitos(){
    const arrayPatitos = [
  {
    id:1,
    nombre: "EL ORIGINAL",
    categoria: "otros",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/original.png",
    alt: "Pato de goma amarillo clásico"
  },
  {
    id:2,
    nombre: "CHEFSITO",
    categoria: "profesiones",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/cocinero.jpg",
    alt: "Pato de goma amarillo disfrazado de cocinero"
  },
  {
    id:3,
    nombre: "DRÁCUACK",
    categoria: "peliculas",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/vampiro.jpg",
    alt: "Pato de goma amarillo disfrazado de drácula"
  },
  {
    id:4,
    nombre: "VACUACK",
    categoria: "peliculas",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/vaquero.jpg",
    alt: "Pato de goma amarillo disfrazado de vaquero"
  },
  {
    id:5,
    nombre: "GUA-FI",
    categoria: "profesiones",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/informatico.jpg",
    alt: "Pato de goma amarillo disfrazado de programador",
    link: "detail.html"
  },
  {
    id:6,
    nombre: "MAGO ALAKACUÁ",
    categoria: "profesiones",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/mago.jpg",
    alt: "Pato de goma amarillo disfrazado de mago"
  },
  {
    id:7,
    nombre: "VIKINGO",
    categoria: "peliculas",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/vikingo.jpg",
    alt: "Pato de goma amarillo disfrazado de vikingo"
  },
  {
    id:8,
    nombre: "PRINCESA PLUMA",
    categoria: "otros",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/princesa.jpg",
    alt: "Pato de goma amarillo disfrazado de princesa"
  },
  {
    id:9,
    nombre: "CUAKERO",
    categoria: "profesiones",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/rockero.jpg",
    alt: "Pato de goma amarillo disfrazado de roquero"
  },
  {
    id:10,
    nombre: "HOLMESITO",
    categoria: "peliculas",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/holmes.jpg",
    alt: "Pato de goma amarillo disfrazado de Sherlock Holmes"
  },
  {
    id:11,
    nombre: "NINJACUACK",
    categoria: "otros",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/ninja.jpg",
    alt: "Pato de goma amarillo disfrazado de ninja"
  },
  {
    id:12,
    nombre: "CUACTABLE",
    categoria: "profesiones",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/contable.jpg",
    alt: "Pato de goma amarillo disfrazado de contable"
  },
  {
    id:13,
    nombre: "SUPERCUAC",
    categoria: "peliculas",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/super.jpg",
    alt: "Pato de goma amarillo disfrazado de Superman"
  },
  {
    id:14,
    nombre: "ASTROCUAC",
    categoria: "profesiones",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/astronauta.jpg",
    alt: "Pato de goma amarillo disfrazado de astronauta"
  },
  {
    id:15,
    nombre: "CAPITÁN PARCHE",
    categoria: "otros",
    precio: "12.99",
    precio: "12.99",
    imagen: "./assets/images/pirata.jpg",
    alt: "Pato de goma amarillo disfrazado de pirata"
  }
];
    return arrayPatitos;
}


// Función para añadir productos al carrito (solo una vez)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = cart.find(item => item.id == productId);

    if (productExists) {
        productExists.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = `/cart.html?added=${productId}`;
}


// Función ÚNICA para renderizar los patitos
function renderpatitos(patitos) {
    const catalogo = document.getElementById("catalog");

    // Limpiar los elementos del catalogo para evitar duplicados
    catalogo.innerHTML = "";

    patitos.forEach(pato => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${pato.imagen}" alt="${pato.alt}" class="card_img">
            <h2 class="h2_catalog">${pato.nombre}</h2>
            <p class="p_catalog">${parseFloat(pato.precio).toFixed(2)} €</p>
            <div id="capabotones">
                <button class="button_catalog add-to-cart-btn" data-id="${pato.id}">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="button_catalog">
                    <a href="detail.html?id=${pato.id}"><i class="fa-solid fa-eye"></i></a>
                </button>   
            </div> 
        `;
        catalogo.appendChild(card);
    });

    // Adjuntar event listeners a los botones "Añadir al Carrito" después de que se rendericen
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.currentTarget.dataset.id;
            addToCart(productId);
        });
    });
}


// Función ÚNICA para filtrar por categoría
function filtrarCategoria(listaPatitos, filtrocategoria){
    if (filtrocategoria !== "todos") {
        const patitosfiltrados = listaPatitos.filter(cat => cat.categoria === filtrocategoria);
        renderpatitos(patitosfiltrados);
    } else {
        renderpatitos(listaPatitos);
    }    
}

// Exportar todas las funciones necesarias
export {creaArraypatitos, renderpatitos, filtrarCategoria, addToCart}