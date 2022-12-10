import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      {products &&
        (products as any).map((item: any) => {
          const { id, name } = item;
          return <h1 key={id}>{name}</h1>;
        })}
    </>
  );
};
