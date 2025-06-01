import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo_mathmentor.png";

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-6xl mx-auto">
        {/* Logo sin funcionalidad de retroceso */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* Enlaces */}
        <ul className="flex space-x-4">
          <li><Link to="/aritmetica" className="hover:underline">Aritmética</Link></li>
          <li><Link to="/geometria" className="hover:underline">Geometría</Link></li>
        </ul>

        {/* Botón logout */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Cerrar sesión
          </button>
        )}
      </nav>
    </header>
  );
}