export function addToCart({ item, products, setProducts }) {
  const newProducts = products.map((product) => {
    if (product.id === item.id) {
      if (product.inCart) {
        product.inCart = 0;
      } else {
        product.inCart = 1;
      }
    }
    return product;
  });
  setProducts(newProducts);
}
