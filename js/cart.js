import { creaArraypatitos } from './renderProducts.js';

// Función para obtener los detalles de un producto por su ID
function getProductById(productId, allProducts) {
    return allProducts.find(product => product.id == productId);
}

// Función para renderizar los productos en el carrito
function renderCart(allProducts) {
    const cartItemsContainer = document.querySelector(".card__container");
    const cartCounter = document.querySelector(".cart__counter");
    const subtotalPriceElement = document.querySelector(".checkout__subtotal__price");
    const totalPriceElement = document.querySelector(".checkout__total__price");

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ""; // Limpiar el contenedor del carrito

    let totalItems = 0;
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='cart-empty'>Tu carrito está vacío.</p>";
        cartCounter.textContent = "0 items";
        subtotalPriceElement.textContent = "0.00 €";
        totalPriceElement.textContent = "0.00 €";
        actualizarEstadoBoton();
        return;
    }

    cart.forEach(item => {
        const product = getProductById(item.id, allProducts);
        if (product) {
            const cardProduct = document.createElement("article");
            cardProduct.classList.add("card__product");
            cardProduct.setAttribute("data-id", product.id); // Añadir data-id para identificar el producto

            // Convertir precio a número para cálculos
            const price = parseFloat(product.precio.replace('€', '').replace(',', '.').trim());
            const itemTotal = price * item.quantity;
            subtotal += itemTotal;
            totalItems += item.quantity;

            cardProduct.innerHTML = `
                <img src="${product.imagen}" alt="${product.alt}" class="card__product__img">
                <div class="card__product__content">
                    <h3 class="card__product__title">${product.nombre}</h3>
                    <p class="card__product__price">${price.toFixed(2)} €</p>
                    <div class="stepper">
                        <button class="stepper__btn stepper__btn--minus" data-id="${product.id}">−</button>
                        <span class="stepper__value">${item.quantity}</span>
                        <button class="stepper__btn stepper__btn--plus" data-id="${product.id}">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-trash-can remove-item-btn" data-id="${product.id}"></i>
            `;
            cartItemsContainer.appendChild(cardProduct);
        }
    });

    cartCounter.textContent = `${totalItems} items`;
    subtotalPriceElement.textContent = `${subtotal.toFixed(2)} €`;
    totalPriceElement.textContent = `${subtotal.toFixed(2)} €`; // Asumiendo que el total es igual al subtotal por ahora

    // Añadir event listeners para los botones de cantidad y eliminar
    addCartEventListeners(allProducts);

    // Resaltar el producto recién añadido si existe
    highlightAddedProduct();

    actualizarEstadoBoton();
}

// Función para manejar la adición/eliminación de cantidad y la eliminación de productos
function addCartEventListeners(allProducts) {
    const minusButtons = document.querySelectorAll(".stepper__btn--minus");
    const plusButtons = document.querySelectorAll(".stepper__btn--plus");
    const removeButtons = document.querySelectorAll(".remove-item-btn");

    minusButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.currentTarget.dataset.id;
            updateCartItemQuantity(productId, -1, allProducts);
        });
    });

    plusButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.currentTarget.dataset.id;
            updateCartItemQuantity(productId, 1, allProducts);
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.currentTarget.dataset.id;
            removeCartItem(productId, allProducts);
        });
    });
}

// Función para actualizar la cantidad de un item en el carrito
function updateCartItemQuantity(productId, change, allProducts) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id == productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += change;
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1); // Eliminar si la cantidad llega a 0 o menos
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(allProducts); // Volver a renderizar el carrito
}

// Función para eliminar un item del carrito
function removeCartItem(productId, allProducts) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id != productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(allProducts); // Volver a renderizar el carrito
}


// Función para resaltar el producto que acaba de ser añadido
function highlightAddedProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const addedProductId = urlParams.get('added');

    if (addedProductId) {
        const productCard = document.querySelector(`.card__product[data-id="${addedProductId}"]`);
        if (productCard) {
            productCard.classList.add('highlight-added'); // Añadir una clase para resaltar
            productCard.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Desplazarse al producto
            // Opcional: Remover la clase después de un tiempo
            setTimeout(() => {
                productCard.classList.remove('highlight-added');
            }, 3000);
        }
    }
}

// Al cargar la página del carrito
window.onload = function() {
    // Verifica si estamos en la página del carrito
    if (window.location.pathname.includes("/cart.html")) {
        const allProducts = creaArraypatitos(); // Obtener todos los productos
        renderCart(allProducts); // Renderizar el carrito
    }
};

const popup = document.getElementById('miPopup');
const btnAbrir = document.getElementById('btn-popup');
const btnCerrar = document.getElementById('btnCerrar');

function montarCheckout() {
    //let totalItems = 0;
    let subtotal = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const allProducts = creaArraypatitos();

    const divrecibo = document.getElementById("recibo");
    divrecibo.innerHTML ="";

    cart.forEach(item => {
        const product = getProductById(item.id, allProducts);

        // Convertir precio a número para cálculos
        const price = parseFloat(product.precio.replace('€', '').replace(',', '.').trim());
        const itemTotal = price * item.quantity;
        subtotal += itemTotal;
        //totalItems += item.quantity;

        const cardProduct = document.createElement("article");

        cardProduct.innerHTML = `
                
                <div class="receipt__content">
                    <span>${product.nombre}<span>
                    <span class="receipt__price">${price.toFixed(2)} €</span>
                    <br>
                    <span >${item.quantity} unidades</span>
                    <span class="receipt__price">${itemTotal} €</span>
                </div>
                
            `;
            divrecibo.appendChild(cardProduct);

    })
     divrecibo.innerHTML = divrecibo.innerHTML + `<span class="receipt__total"> TOTAL RECIBO: ${subtotal} €</span>`;
}




// Abrir el modal
btnAbrir.addEventListener('click', () => {
    montarCheckout();
    popup.showModal();
});

// Cerrar el modal
btnCerrar.addEventListener('click', () => {
  popup.close();
});

function actualizarEstadoBoton() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  btnAbrir.disabled = cart.length === 0;
}

actualizarEstadoBoton();
