import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_mathmentor.png';
import figurasImg from '../assets/figuras.png';
import areasImg from '../assets/areas.png';
import perimetrosImg from '../assets/perimetros.png';
import volumenesImg from '../assets/volumenes.png';
import VolverAtras from "../components/VolverAtras";

const temas = [
  {
    titulo: 'Figuras Geométricas',
    descripcion: 'Conoce las formas básicas y sus propiedades.',
    imagen: figurasImg,
    ruta: '/geometria/figuras',
    color: 'purple'
  },
  {
    titulo: 'Áreas',
    descripcion: 'Aprende a calcular el área de figuras planas.',
    imagen: areasImg,
    ruta: '/geometria/areas',
    color: 'green'
  },
  {
    titulo: 'Perímetros',
    descripcion: 'Calcula el perímetro de distintas figuras.',
    imagen: perimetrosImg,
    ruta: '/geometria/perimetros',
    color: 'blue'
  },
  {
    titulo: 'Volúmenes',
    descripcion: 'Calcula el volumen de cuerpos geométricos.',
    imagen: volumenesImg,
    ruta: '/geometria/volumenes',
    color: 'orange'
  }
];

export default function Geometria() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <VolverAtras />

      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />

      <h1 className="text-4xl font-bold text-[#22c55e] mb-4">Geometría</h1>
      <p className="text-center text-gray-700 max-w-2xl mb-10">
        Explora el mundo de las formas, sus propiedades y cómo calcular sus medidas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {temas.map((tema, index) => (
          <Link to={tema.ruta} key={index} className="w-full">
            <div className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg border border-${tema.color}-200`}>
              <img src={tema.imagen} alt={tema.titulo} className="w-28 h-28 mb-4" />
              <h3 className={`text-lg font-semibold mb-2 text-${tema.color}-600`}>{tema.titulo}</h3>
              <p className="text-gray-600 text-sm">{tema.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}