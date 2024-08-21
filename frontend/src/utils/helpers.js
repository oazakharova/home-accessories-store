// Сохранение корзины в LocalStorage
export const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Загрузка корзины из LocalStorage
export const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};
