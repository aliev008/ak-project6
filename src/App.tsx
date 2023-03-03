import { useEffect, Suspense } from "react";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { GlobalStyle } from "./global.styles";

import { Routes, Route } from "react-router-dom";
import { Shop, Home, Navigation, Authentification, Checkout } from "./routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentification />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
