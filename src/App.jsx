import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Aritmetica from "./pages/aritmetica";
import Geometria from "./pages/geometria";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aritmetica" element={<Aritmetica />} />
      <Route path="/geometria" element={<Geometria />} />
    </Routes>
  );
}
