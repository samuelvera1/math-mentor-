import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Importar páginas principales
import Home from "./pages/home";
import Aritmetica from "./pages/aritmetica";
import Login from "./pages/login";
import Register from "./pages/register";

// Importar subpáginas de aritmética
import Suma from "./pages/aritmetica/suma";
import Resta from "./pages/aritmetica/resta";

// Importar páginas de geometría
import Geometria from "./pages/geometria";
import Figuras from "./pages/geometria/figuras";
import Areas from "./pages/geometria/areas";
import Perimetros from "./pages/geometria/perimetros";
import Volumenes from "./pages/geometria/volumenes";

// Componente de ruta protegida
function ProtectedRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    sessionStorage.setItem("redirectAfterLogin", location.pathname);
    return <Navigate to="/login" />;
  }

  return children;
}

// Componente de barra de navegación
function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    checkLogin();
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  if (!isLoggedIn) return null;

  return (
    <nav className="bg-gray-100 p-4 text-right">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Cerrar sesión
      </button>
    </nav>
  );
}

// Componente principal de la aplicación
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas - Aritmética */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aritmetica"
          element={
            <ProtectedRoute>
              <Aritmetica />
            </ProtectedRoute>
          }
        />
        <Route
          path="/suma"
          element={
            <ProtectedRoute>
              <Suma />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resta"
          element={
            <ProtectedRoute>
              <Resta />
            </ProtectedRoute>
          }
        />

        {/* Rutas protegidas - Geometría */}
        <Route
          path="/geometria"
          element={
            <ProtectedRoute>
              <Geometria />
            </ProtectedRoute>
          }
        />
        <Route
          path="/geometria/figuras"
          element={
            <ProtectedRoute>
              <Figuras />
            </ProtectedRoute>
          }
        />
        <Route
          path="/geometria/areas"
          element={
            <ProtectedRoute>
              <Areas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/geometria/perimetros"
          element={
            <ProtectedRoute>
              <Perimetros />
            </ProtectedRoute>
          }
        />
        <Route
          path="/geometria/volumenes"
          element={
            <ProtectedRoute>
              <Volumenes />
            </ProtectedRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}