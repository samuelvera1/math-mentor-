import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo_mathmentor.png';
import VolverAtras from '/src/components/VolverAtras';

export default function Figuras() {
  const [activeTab, setActiveTab] = useState('teoria');

  const figurasPlanas = [
    { nombre: 'Triángulo', lados: 3, propiedades: '3 lados, 3 ángulos' },
    { nombre: 'Cuadrado', lados: 4, propiedades: '4 lados iguales, 4 ángulos rectos' },
    { nombre: 'Rectángulo', lados: 4, propiedades: '4 lados, ángulos rectos' },
    { nombre: 'Círculo', lados: 0, propiedades: 'Sin lados, radio constante' },
    { nombre: 'Pentágono', lados: 5, propiedades: '5 lados, 5 ángulos' },
    { nombre: 'Hexágono', lados: 6, propiedades: '6 lados, 6 ángulos' }
  ];

  const cuerposGeometricos = [
    { nombre: 'Cubo', caras: 6, propiedades: '6 caras cuadradas' },
    { nombre: 'Esfera', caras: 0, propiedades: 'Superficie curva perfecta' },
    { nombre: 'Cilindro', caras: 3, propiedades: '2 bases circulares, superficie lateral curva' },
    { nombre: 'Cono', caras: 2, propiedades: '1 base circular, 1 vértice' },
    { nombre: 'Pirámide', caras: 5, propiedades: 'Base cuadrada, 4 caras triangulares' },
    { nombre: 'Prisma', caras: 5, propiedades: '2 bases iguales, caras rectangulares' }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <VolverAtras />

      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />

      <h1 className="text-4xl font-bold text-[#8b5cf6] mb-4">Figuras Geométricas</h1>
      
      <div className="flex border-b border-gray-200 mb-8 w-full max-w-4xl">
        <button
          onClick={() => setActiveTab('teoria')}
          className={`py-2 px-4 font-medium ${activeTab === 'teoria' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
        >
          Teoría
        </button>
        <button
          onClick={() => setActiveTab('planas')}
          className={`py-2 px-4 font-medium ${activeTab === 'planas' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
        >
          Figuras Planas
        </button>
        <button
          onClick={() => setActiveTab('cuerpos')}
          className={`py-2 px-4 font-medium ${activeTab === 'cuerpos' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
        >
          Cuerpos Geométricos
        </button>
      </div>

      <div className="w-full max-w-4xl">
        {activeTab === 'teoria' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">¿Qué son las figuras geométricas?</h2>
            <div className="space-y-4">
              <p>Las figuras geométricas son conjuntos de puntos en un plano o en el espacio que forman contornos cerrados.</p>
              
              <div className="bg-purple-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold mb-2">Clasificación:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Figuras planas:</strong> Existen en 2 dimensiones (círculo, cuadrado)</li>
                  <li><strong>Cuerpos geométricos:</strong> Existen en 3 dimensiones (esfera, cubo)</li>
                  <li><strong>Polígonos:</strong> Figuras con lados rectos (triángulo, pentágono)</li>
                  <li><strong>No polígonos:</strong> Figuras con lados curvos (círculo, elipse)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'planas' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Figuras Planas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {figurasPlanas.map((figura, index) => (
                <div key={index} className="border border-purple-200 rounded-lg p-4 flex flex-col">
                  <h3 className="font-medium text-lg text-purple-700">{figura.nombre}</h3>
                  <p className="text-sm text-gray-600 mt-1">{figura.propiedades}</p>
                  <div className="mt-2 pt-2 border-t border-purple-100">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      {figura.lados} {figura.lados === 1 ? 'lado' : 'lados'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cuerpos' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Cuerpos Geométricos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cuerposGeometricos.map((cuerpo, index) => (
                <div key={index} className="border border-purple-200 rounded-lg p-4 flex flex-col">
                  <h3 className="font-medium text-lg text-purple-700">{cuerpo.nombre}</h3>
                  <p className="text-sm text-gray-600 mt-1">{cuerpo.propiedades}</p>
                  <div className="mt-2 pt-2 border-t border-purple-100">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      {cuerpo.caras} {cuerpo.caras === 1 ? 'cara' : 'caras'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}