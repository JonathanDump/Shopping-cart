import { useState, useEffect } from "react";

export function useProductLoader() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function productLoader() {
      try {
        const response = await fetch("/src/json/products.json");

        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();

        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    productLoader();
  }, []);

  return { products, loading, setProducts };
}
