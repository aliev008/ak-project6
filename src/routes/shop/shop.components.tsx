import { Routes, Route } from "react-router-dom";
import { Category } from "../category/category.component";

import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/category/category.action";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
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
