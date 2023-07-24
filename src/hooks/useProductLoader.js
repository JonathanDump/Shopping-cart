import { useState, useEffect, useReducer } from "react";
import { reducer } from "../functions/eventsHandlers";

export function useProductLoader() {
  //   const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    async function productLoader() {
      try {
        const response = await fetch("/src/json/products.json");

        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();

        dispatch({ type: "fetch", products: data });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    productLoader();
  }, []);

  return { products, loading, dispatch };
}
