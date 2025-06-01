import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo_mathmentor.png';
import VolverAtras from '/src/components/VolverAtras';

export default function Areas() {
  const [activeTab, setActiveTab] = useState('teoria');
  const [figura, setFigura] = useState('cuadrado');
  const [medidas, setMedidas] = useState({ base: 0, altura: 0, radio: 0 });
  const [resultado, setResultado] = useState(null);

  const calcularArea = () => {
    switch(figura) {
      case 'cuadrado':
        setResultado(medidas.base * medidas.base);
        break;
      case 'rectangulo':
        setResultado(medidas.base * medidas.altura);
        break;
      case 'triangulo':
        setResultado((medidas.base * medidas.altura) / 2);
        break;
      case 'circulo':
        setResultado(Math.PI * medidas.radio * medidas.radio);
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

      <h1 className="text-4xl font-bold text-[#10b981] mb-4">Áreas</h1>
      
      <div className="flex border-b border-gray-200 mb-8 w-full max-w-4xl">
        <button
          onClick={() => setActiveTab('teoria')}
          className={`py-2 px-4 font-medium ${activeTab === 'teoria' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
        >
          Teoría
        </button>
        <button
          onClick={() => setActiveTab('calculadora')}
          className={`py-2 px-4 font-medium ${activeTab === 'calculadora' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
        >
          Calculadora
        </button>
      </div>

      <div className="w-full max-w-4xl">
        {activeTab === 'teoria' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">¿Qué es el área?</h2>
            <div className="space-y-4">
              <p>El área es la medida de la superficie de una figura plana.</p>
              
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold mb-2">Fórmulas principales:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cuadrado:</strong> lado × lado</li>
                  <li><strong>Rectángulo:</strong> base × altura</li>
                  <li><strong>Triángulo:</strong> (base × altura) / 2</li>
                  <li><strong>Círculo:</strong> π × radio²</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calculadora' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Calculadora de Áreas</h2>
            
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
              </select>
            </div>

            <div className="space-y-4 mb-6">
              {figura === 'cuadrado' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lado:</label>
                  <input
                    type="number"
                    name="base"
                    value={medidas.base}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  />
                </div>
              )}

              {(figura === 'rectangulo' || figura === 'triangulo') && (
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
            </div>

            <button
              onClick={calcularArea}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Calcular Área
            </button>

            {resultado !== null && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold">Resultado:</h3>
                <p className="text-2xl font-bold mt-2">
                  Área = {resultado.toFixed(2)} unidades cuadradas
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}