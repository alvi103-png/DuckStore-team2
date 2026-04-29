let cart = [];

function addToCart(product){
    const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

function removeFromCart(id){
     cart = cart.filter(item => item.id !== id);

}

function increaseQuantity(id){
    const item = cart.find(p => p.id === id);

  if (!item) return;

  item.quantity++;
}

function decreaseQuantity(id){
    const item = cart.find(p => p.id === id);

  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    cart = cart.filter(p => p.id !== id);
  }
}

function getTotal(){
      return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function getSubtotal(id) {
  const item = cart.find(p => p.id === id);
  return item ? item.price * item.quantity : 0;
}

function getCart(){
    return cart;
}

export {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal, getCart, getSubtotal}