import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
  products: null,
  setProducts: (user: any): any => null,
});

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState(null);
  const value: any = { products, setProducts };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("shopData.json");
        if (response.status === 200) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
