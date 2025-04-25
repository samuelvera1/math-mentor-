import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_mathmentor.png";
import aritmeticaImg from "../assets/aritmetica.png";
import geometriaImg from "../assets/geometria.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-blue-50 py-10 px-4">
      
      {/* Logo sin animación */}
      <img
        src={logo}
        alt="Logo MathMentor"
        className="w-64 mb-10"
      />

      {/* Cards con animación, sombra, etc */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <Link to="/aritmetica">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 w-72 md:w-80 text-center">
            <img
              src={aritmeticaImg}
              alt="Aritmética"
              className="w-36 h-36 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600">Aritmética</h2>
          </div>
        </Link>

        <Link to="/geometria">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 w-72 md:w-80 text-center">
            <img
              src={geometriaImg}
              alt="Geometría"
              className="w-36 h-36 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-green-600">Geometría</h2>
          </div>
        </Link>
      </div>

      {/* Frase motivacional */}
      <footer className="text-center text-gray-600 mt-8">
        <p className="italic text-lg">
          "Las matemáticas no son difíciles, solo necesitan paciencia y práctica."
        </p>
      </footer>
    </div>
  );
};

export default Home;
