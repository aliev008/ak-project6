import { Routes, Route } from "react-router-dom";
import { Shop, Home, Navigation, Authentification } from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentification />} />
      </Route>
    </Routes>
  );
};

export default App;
