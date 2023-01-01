import { Routes, Route } from "react-router-dom";
import { Category } from "../category/category.component";

<<<<<<< Updated upstream
import { ProductCard } from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

interface Product {
  "id": number,
  "name": string,
  "imageUrl": string,
  "price": number
}

export const Shop = () => {
  const { products } = useContext(ProductsContext);
=======
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/category/category.action";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };
    getProducts();
  }, [dispatch]);

>>>>>>> Stashed changes
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />}></Route>
        <Route path=":category" element={<Category />}></Route>
      </Routes>
    </>
  );
};
