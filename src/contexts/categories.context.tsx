import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: (user: any): any => null,
});

export const CategoriesProvider = ({ children }: any) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value: any = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getProducts = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategoriesMap(categories);
    };

    getProducts();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
