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

export function decreaseItemInCart(products, setProducts, id) {
  const newProducts = products.map((item) => {
    if (item.id === id) {
      item.inCart--;
      return item;
    }
    return item;
  });
  setProducts(newProducts);
}

export function increaseItemInCart(products, setProducts, id) {
  const newProducts = products.map((item) => {
    if (item.id === id) {
      item.inCart++;
      return item;
    }
    return item;
  });
  setProducts(newProducts);
}

export function handleInputChange(products, setProducts, id, e) {
  const newProducts = products.map((item) => {
    if (item.id === id) {
      item.inCart = e.target.value;
      return item;
    }
    return item;
  });
  setProducts(newProducts);
}
