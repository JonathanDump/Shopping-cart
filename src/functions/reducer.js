export function reducer(products, action) {
  switch (action.type) {
    case "fetch": {
      return action.products;
    }
    case "addToCart": {
      return products.map((item) => {
        if (item.id === action.id) {
          return { ...item, inCart: 1 };
        }
        return item;
      });
    }
    case "removeFromCart": {
      return products.map((item) => {
        if (item.id === action.id) {
          return { ...item, inCart: 0 };
        }
        return item;
      });
    }
    case "decreaseItemInCart": {
      return products.map((item) => {
        if (item.id === action.id) {
          return { ...item, inCart: item.inCart - 1 };
        }
        return item;
      });
    }
    case "increaseItemInCart": {
      return products.map((item) => {
        if (item.id === action.id) {
          return { ...item, inCart: item.inCart + 1 };
        }

        return item;
      });
    }
    case "handleInputChange": {
      return products.map((item) => {
        if (item.id === action.id) {
          return { ...item, inCart: action.value };
        }
        return item;
      });
    }
    case "checkout": {
      return products.map((item) => ({ ...item, inCart: 0 }));
    }
  }
}
