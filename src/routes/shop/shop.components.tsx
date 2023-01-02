import { Routes, Route } from "react-router-dom";
import { Category } from "../category/category.component";

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

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />}></Route>
        <Route path=":category" element={<Category />}></Route>
      </Routes>
    </>
  );
};
