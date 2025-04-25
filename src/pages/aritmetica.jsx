import React from 'react';
import operacionesImg from '../assets/suma.png';
import multiDivImg from '../assets/multiplicacion.png';
import fraccionesImg from '../assets/fracciones.png';
import decimalesImg from '../assets/decimales.png';
import logo from '../assets/logo_mathmentor.png';

const temas = [
  {
    titulo: 'Sumas y Restas',
    descripcion: 'Aprende a sumar y restar con ejemplos prácticos y visuales.',
    imagen: operacionesImg,
  },
  {
    titulo: 'Multiplicaciones y Divisiones',
    descripcion: 'Domina la multiplicación y división de manera clara.',
    imagen: multiDivImg,
  },
  {
    titulo: 'Fracciones',
    descripcion: 'Entiende cómo funcionan las fracciones y cómo operarlas.',
    imagen: fraccionesImg,
  },
  {
    titulo: 'Decimales',
    descripcion: 'Aprende a trabajar con números decimales fácilmente.',
    imagen: decimalesImg,
  },
];

export default function Aritmetica() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-10 px-4">
      {/* Logo en la esquina */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />

      <h1 className="text-4xl font-bold text-[#3b82f6] mb-4">Aritmética</h1>
      <p className="text-center text-gray-700 max-w-2xl mb-10">
        Bienvenido a la sección de Aritmética. Aquí encontrarás los fundamentos para resolver operaciones básicas de forma sencilla y divertida.
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
