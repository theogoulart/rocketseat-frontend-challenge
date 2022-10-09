const formatPrice = (priceInCents: number): string => {
  return `${(priceInCents/100).toFixed(2)}`.replace('.', ',');
}

const getCartProducts = () => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
}

const setCartProducts = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
}

const getCartProductCount = () => {
  const products = localStorage.getItem('products');
  if (!products) return 0;
  const count: unknown = Object.values(JSON.parse(products))
    .reduce((acc, { quantity }) => acc + quantity, 0);
  return typeof count === 'number' ? count : 0;
}

const translate = (word) => {
  return {'mugs': 'Caneca', 't-shirts': 'Camiseta'}[word];
}

export { formatPrice, getCartProducts, getCartProductCount, setCartProducts, translate };