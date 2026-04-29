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
        cartItemsContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        cartCounter.textContent = "0 items";
        subtotalPriceElement.textContent = "0.00 €";
        totalPriceElement.textContent = "0.00 €";
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

/* GENERACION DE RECIBO 
function generateReceiptNumber() {
    return 'REC-' + Math.random().toString(36).substring(2, 11).toUpperCase();
}

async function generateReceiptPdf(allProducts) {
    const { jsPDF } = window.jspdf; // Accede a jsPDF desde el objeto window
    const receiptNumber = generateReceiptNumber();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPriceElement = document.querySelector(".checkout__total__price");
    const total = totalPriceElement ? totalPriceElement.textContent : "0.00 €";

    const doc = new jsPDF();
    let yPos = 20;

    // Título
    doc.setFontSize(24);
    doc.text("Recibo de Compra Duck Store", 105, yPos, null, null, "center");
    yPos += 15;

    // Número de Recibo y Fecha
    doc.setFontSize(12);
    doc.text(`Número de Recibo: ${receiptNumber}`, 20, yPos);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 170, yPos, null, null, "right");
    yPos += 10;

    doc.line(20, yPos, 190, yPos); // Línea separadora
    yPos += 10;

    // Detalles de cada producto
    doc.setFontSize(14);
    doc.text("Productos:", 20, yPos);
    yPos += 10;

    for (const item of cart) {
        const product = getProductById(item.id, allProducts);
        if (product) {
            // Incrementar yPos si es necesario para dejar espacio
            if (yPos > 250) { // Si se acerca al final de la página, añade una nueva página
                doc.addPage();
                yPos = 20;
            }

            doc.setFontSize(12);
            doc.text(`- ${product.nombre} (x${item.quantity})`, 30, yPos);
            doc.text(`${parseFloat(product.precio).toFixed(2)} €`, 180, yPos, null, null, "right");
            yPos += 8;

            // Añadir imagen del patito si es posible (usando html2canvas para el elemento de imagen)
            // Para simplificar, vamos a intentar usar la URL directamente en jsPDF,
            // pero html2canvas sería más útil si el "card" completo del patito fuera complejo
            // y quisieras una "captura" de ese HTML.
            // Para imágenes simples, jsPDF puede cargar desde URL si CORS lo permite.
            // Si la imagen no carga, la quitamos o la reemplazamos por un placeholder.

            try {
                 const img = new Image();
                 img.src = product.imagen;
                 // Pequeño truco para esperar a que la imagen se cargue.
                 // Esto es crucial para jsPDF cuando trabaja con URLs o bases64.
                 await new Promise((resolve) => {
                     img.onload = () => resolve();
                     img.onerror = () => { console.error("Error al cargar la imagen para PDF:", product.imagen); resolve(); }; // Continúa incluso si la imagen falla
                 });

                 if (img.complete && img.naturalHeight !== 0) { // Asegurarse de que la imagen cargó correctamente
                     const imgWidth = 20; // Ancho de la imagen en PDF
                     const imgHeight = (img.naturalHeight / img.naturalWidth) * imgWidth;
                     doc.addImage(img, 'PNG', 35, yPos, imgWidth, imgHeight);
                     yPos += imgHeight + 5; // Espacio después de la imagen
                 } else {
                     doc.setFontSize(10);
                     doc.text("(Imagen no disponible)", 35, yPos);
                     yPos += 10;
                 }
            } catch (error) {
                console.error("No se pudo añadir la imagen al PDF:", error);
                doc.setFontSize(10);
                doc.text("(Imagen no disponible)", 35, yPos);
                yPos += 10;
            }

            yPos += 5; // Pequeño espacio entre productos
        }
    }

    doc.line(20, yPos, 190, yPos); // Línea separadora
    yPos += 10;

    // Total
    doc.setFontSize(16);
    doc.text(`Total: ${total}`, 105, yPos, null, null, "center");
    yPos += 20;

    // Mensaje de agradecimiento
    doc.setFontSize(10);
    doc.text("¡Gracias por tu compra en Duck Store!", 105, yPos, null, null, "center");

    // Guardar el PDF
    doc.save(`recibo-duckstore-${receiptNumber}.pdf`);

    // Opcional: Limpiar el carrito después de la compra exitosa
    localStorage.removeItem('cart');
    // Si quieres redirigir a una página de confirmación, podrías hacerlo aquí
    // window.location.href = 'confirmacion.html';
}


// Al cargar la página del carrito
window.onload = function() {
    // Verifica si estamos en la página del carrito
    if (window.location.pathname.includes("/cart.html")) {
        const allProducts = creaArraypatitos(); // Obtener todos los productos
        renderCart(allProducts); // Renderizar el carrito

        // *** NUEVO CÓDIGO: Event listener para el botón de finalizar compra ***
        const checkoutButton = document.querySelector(".checkout__button");
        if (checkoutButton) {
            checkoutButton.addEventListener("click", () => {
                generateReceiptPdf(allProducts);
            });
        }
    }
}; */
