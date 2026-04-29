import {
  getCart,
  getTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./renderCart.js";

const container = document.getElementById("cart-container");

function renderCart() {
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = "<p>El carrito está vacío</p>";
    return;
  }

  container.innerHTML = `
    ${cart
      .map(
        (item) => `
        <div class="cart-item">
          <h3>${item.name}</h3>
          <p>Precio: ${item.price}€</p>
          <p>Subtotal: ${item.price * item.quantity}€</p>

          <div>
            <button data-id="${item.id}" class="decrease">-</button>
            <span>${item.quantity}</span>
            <button data-id="${item.id}" class="increase">+</button>
          </div>

          <button data-id="${item.id}" class="remove">Eliminar</button>
        </div>
      `
      )
      .join("")}

    <hr />

    <h2>Total: ${getTotal()}€</h2>
  `;

  addEvents();
}

function addEvents() {
  // Incrementar
  document.getElementById("increase").forEach((btn) => {
    btn.addEventListener("click", () => {
      increaseQuantity(btn.dataset.id);
      renderCart();
    });
  });

  // Decrementar
  document.getElementById("decrease").forEach((btn) => {
    btn.addEventListener("click", () => {
      decreaseQuantity(btn.dataset.id);
      renderCart();
    });
  });

  // Eliminar
  document.getElementById("remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.dataset.id);
      renderCart();
    });
  });
}

renderCart();