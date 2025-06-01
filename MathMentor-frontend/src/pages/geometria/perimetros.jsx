import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo_mathmentor.png';
import VolverAtras from '/src/components/VolverAtras';

export default function Perimetros() {
  const [activeTab, setActiveTab] = useState('teoria');
  const [figura, setFigura] = useState('cuadrado');
  const [medidas, setMedidas] = useState({ lado: 0, base: 0, altura: 0, radio: 0, lados: 4, longitud: 0 });
  const [resultado, setResultado] = useState(null);

  const calcularPerimetro = () => {
    switch(figura) {
      case 'cuadrado':
        setResultado(4 * medidas.lado);
        break;
      case 'rectangulo':
        setResultado(2 * (medidas.base + medidas.altura));
        break;
      case 'triangulo':
        setResultado(medidas.lado * 3);
        break;
      case 'circulo':
        setResultado(2 * Math.PI * medidas.radio);
        break;
      case 'poligono':
        setResultado(medidas.lados * medidas.longitud);
        break;
      default:
        setResultado(null);
    }
  };

  const handleChange = (e) => {
    setMedidas({
      ...medidas,
      [e.target.name]: parseFloat(e.target.value) || 0
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <VolverAtras />

      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />

      <h1 className="text-4xl font-bold text-[#3b82f6] mb-4">Perímetros</h1>
      
      <div className="flex border-b border-gray-200 mb-8 w-full max-w-4xl">
        <button
          onClick={() => setActiveTab('teoria')}
          className={`py-2 px-4 font-medium ${activeTab === 'teoria' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Teoría
        </button>
        <button
          onClick={() => setActiveTab('calculadora')}
          className={`py-2 px-4 font-medium ${activeTab === 'calculadora' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Calculadora
        </button>
      </div>

      <div className="w-full max-w-4xl">
        {activeTab === 'teoria' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">¿Qué es el perímetro?</h2>
            <div className="space-y-4">
              <p>El perímetro es la suma de las longitudes de los lados de una figura plana.</p>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold mb-2">Fórmulas principales:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cuadrado:</strong> 4 × lado</li>
                  <li><strong>Rectángulo:</strong> 2 × (base + altura)</li>
                  <li><strong>Triángulo:</strong> lado₁ + lado₂ + lado₃</li>
                  <li><strong>Círculo:</strong> 2 × π × radio (circunferencia)</li>
                  <li><strong>Polígono regular:</strong> n × lado (n = número de lados)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calculadora' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Calculadora de Perímetros</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Selecciona una figura:</label>
              <select
                value={figura}
                onChange={(e) => setFigura(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="cuadrado">Cuadrado</option>
                <option value="rectangulo">Rectángulo</option>
                <option value="triangulo">Triángulo</option>
                <option value="circulo">Círculo</option>
                <option value="poligono">Polígono Regular</option>
              </select>
            </div>

            <div className="space-y-4 mb-6">
              {figura === 'cuadrado' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lado:</label>
                  <input
                    type="number"
                    name="lado"
                    value={medidas.lado}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  />
                </div>
              )}

              {figura === 'rectangulo' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Base:</label>
                    <input
                      type="number"
                      name="base"
                      value={medidas.base}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Altura:</label>
                    <input
                      type="number"
                      name="altura"
                      value={medidas.altura}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                  </div>
                </>
              )}

              {figura === 'triangulo' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lado (triángulo equilátero):</label>
                  <input
                    type="number"
                    name="lado"
                    value={medidas.lado}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  />
                </div>
              )}

              {figura === 'circulo' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Radio:</label>
                  <input
                    type="number"
                    name="radio"
                    value={medidas.radio}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  />
                </div>
              )}

              {figura === 'poligono' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de lados:</label>
                    <input
                      type="number"
                      name="lados"
                      min="3"
                      value={medidas.lados}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Longitud de cada lado:</label>
                    <input
                      type="number"
                      name="longitud"
                      value={medidas.longitud}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                  </div>
                </>
              )}
            </div>

            <button
              onClick={calcularPerimetro}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Calcular Perímetro
            </button>

            {resultado !== null && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold">Resultado:</h3>
                <p className="text-2xl font-bold mt-2">
                  Perímetro = {resultado.toFixed(2)} unidades
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}