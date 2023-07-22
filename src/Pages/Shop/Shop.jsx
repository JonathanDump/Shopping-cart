import shop from "./Shop.module.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

export function Shop() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(products);

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

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <div className={shop.shop}>
      shop
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            item={item}
            products={products}
            setProducts={setProducts}
          />
        );
      })}
    </div>
  );
}

export async function productLoader() {
  const result = await fetch("/src/json/products.json");
  const data = await result.json();
  return data;
}
