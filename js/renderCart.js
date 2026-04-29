import {
  getCart,
  getTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./cart.js";

const container = document.getElementById("cart-container");
const subtotalContainer = document.querySelector(".checkout__subtotal__price");
const totalContainer = document.querySelector(".checkout__total__price");
const counter = document.querySelector(".cart__counter");

function renderCart() {
  const cart = getCart();

  // 🟣 Carrito vacío
  if (cart.length === 0) {
    container.innerHTML = `<p>El carrito está vacío</p>`;
    subtotalContainer.textContent = "0€";
    totalContainer.textContent = "0€";
    counter.textContent = "0 items";
    return;
  }

  // 🟣 Render productos
  container.innerHTML = cart.map(item => `
    <article class="card__product">
      <img src="${item.image}" alt="${item.name}" class="card__product__img">

      <div class="card__product__content">
        <h3 class="card__product__title">${item.name}</h3>
        <p class="card__product__price">${item.price} €</p>

        <div class="stepper">
          <button class="stepper__btn stepper__btn--minus" data-id="${item.id}">−</button>
          <span class="stepper__value">${item.quantity}</span>
          <button class="stepper__btn stepper__btn--plus" data-id="${item.id}">+</button>
        </div>

        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)} €</p>
      </div>

      <i class="fa-solid fa-trash-can remove" data-id="${item.id}"></i>
    </article>
  `).join("");

  // 🟣 Totales
  const total = getTotal();

  subtotalContainer.textContent = `${total.toFixed(2)} €`;
  totalContainer.textContent = `${total.toFixed(2)} €`;

  // 🟣 Contador
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  counter.textContent = `${totalItems} items`;

  addEvents();
}

function addEvents() {
  // ➕ Incrementar
  document.querySelectorAll(".stepper__btn--plus").forEach(btn => {
    btn.addEventListener("click", () => {
      increaseQuantity(Number(btn.dataset.id));
      renderCart();
    });
  });

  // ➖ Decrementar
  document.querySelectorAll(".stepper__btn--minus").forEach(btn => {
    btn.addEventListener("click", () => {
      decreaseQuantity(Number(btn.dataset.id));
      renderCart();
    });
  });

  // 🗑️ Eliminar
  document.querySelectorAll(".remove").forEach(btn => {
    btn.addEventListener("click", () => {
      removeFromCart(Number(btn.dataset.id));
      renderCart();
    });
  });
}

renderCart();

