import { useState, useEffect, useReducer } from "react";
import { reducer } from "../functions/reducer";

export function useProductLoader() {
  const [loading, setLoading] = useState(true);
  const [products, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    async function productLoader() {
      try {
        const response = await fetch("/public/json/products.json");

        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();

        dispatch({ type: "fetch", products: data });
        setLoading(false);
      } catch (err) {}
    }

    productLoader();
  }, []);

  return { products, loading, dispatch };
}
