const formatPrice = (priceInCents: number): string => {
  return `${(priceInCents/100).toFixed(2)}`.replace('.', ',');
}

export { formatPrice };