export default () => {
  const cart = localStorage["cart"];

  if (cart) {
    return JSON.parse(cart);
  }

  return null;
};
