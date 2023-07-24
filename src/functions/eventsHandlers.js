// export function addToCart({ item, products, setProducts }) {
//   const newProducts = products.map((product) => {
//     if (product.id === item.id) {
//       if (product.inCart) {
//         product.inCart = 0;
//       } else {
//         product.inCart = 1;
//       }
//     }
//     return product;
//   });
//   setProducts(newProducts);
// }

// export function decreaseItemInCart(products, setProducts, id) {
//   const newProducts = products.map((item) => {
//     if (item.id === id) {
//       item.inCart--;
//       return item;
//     }
//     return item;
//   });
//   setProducts(newProducts);
// }

// export function increaseItemInCart(products, setProducts, id) {
//   const newProducts = products.map((item) => {
//     if (item.id === id) {
//       item.inCart++;
//       return item;
//     }
//     return item;
//   });
//   setProducts(newProducts);
// }

// export function handleInputChange(products, setProducts, id, e) {
//   const newProducts = products.map((item) => {
//     if (item.id === id) {
//       item.inCart = e.target.value;
//       return item;
//     }
//     return item;
//   });
//   setProducts(newProducts);
// }

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
        console.log("init", item.inCart);
        if (item.id === action.id) {
          return { ...item, inCart: item.inCart + 1 };
        }
        console.log("res", item.inCart);
        return item;
      });
    }
    case "handleInputChange": {
      products.map((item) => {
        if (item.id === action.id) {
          return { ...item, inCart: action.value };
        }
        return item;
      });
    }
  }
}
