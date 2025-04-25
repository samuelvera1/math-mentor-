import React from 'react';
import figurasImg from '../assets/figuras.png';
import perimetrosImg from '../assets/perimetros.png';
import areasImg from '../assets/areas.png';
import volumenesImg from '../assets/volumenes.png';
import logo from '../assets/logo_mathmentor.png';

const temas = [
  {
    titulo: 'Figuras Geométricas',
    descripcion: 'Conoce las formas básicas: triángulos, cuadrados, círculos y más.',
    imagen: figurasImg,
  },
  {
    titulo: 'Perímetros',
    descripcion: 'Aprende a calcular el perímetro de distintas figuras.',
    imagen: perimetrosImg,
  },
  {
    titulo: 'Áreas',
    descripcion: 'Fórmulas y ejemplos para calcular el área de figuras planas.',
    imagen: areasImg,
  },
  {
    titulo: 'Volúmenes',
    descripcion: 'Explora cómo calcular el volumen de cuerpos geométricos.',
    imagen: volumenesImg,
  },
];

export default function Geometria() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-10 px-4">
      {/* Logo en esquina superior izquierda */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />

      <h1 className="text-4xl font-bold text-[#22c55e] mb-4">Geometría</h1>
      <p className="text-center text-gray-700 max-w-2xl mb-10">
        Bienvenido a la sección de Geometría. Aquí explorarás las figuras, sus propiedades,
        y aprenderás a calcular perímetros, áreas y volúmenes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {temas.map((tema, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg border"
          >
            <img src={tema.imagen} alt={tema.titulo} className="w-28 h-28 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{tema.titulo}</h3>
            <p className="text-gray-600 text-sm">{tema.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
