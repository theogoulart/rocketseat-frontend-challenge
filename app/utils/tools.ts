const formatPrice = (priceInCents: number): string => {
  return `${(priceInCents/100).toFixed(2)}`.replace('.', ',');
}

const getCartProducts = () => {
  const products = localStorage.getItem('products');
  return products ? Object.values(JSON.parse(products)) : [];
}

const getCartProductCount = () => {
  const products = localStorage.getItem('products');
  return products ? Object.keys(JSON.parse(products)).length : 0;
}

export { formatPrice, getCartProducts, getCartProductCount };