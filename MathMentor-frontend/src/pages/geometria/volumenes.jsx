import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo_mathmentor.png';
import VolverAtras from '/src/components/VolverAtras';

export default function Volumenes() {
  const [activeTab, setActiveTab] = useState('teoria');
  const [figura, setFigura] = useState('cubo');
  const [medidas, setMedidas] = useState({ 
    lado: 0, 
    base: 0, 
    altura: 0, 
    profundidad: 0,
    radio: 0,
    radioBase: 0,
    alturaCono: 0
  });
  const [resultado, setResultado] = useState(null);

  const calcularVolumen = () => {
    switch(figura) {
      case 'cubo':
        setResultado(Math.pow(medidas.lado, 3));
        break;
      case 'prisma':
        setResultado(medidas.base * medidas.altura * medidas.profundidad);
        break;
      case 'esfera':
        setResultado((4/3) * Math.PI * Math.pow(medidas.radio, 3));
        break;
      case 'cilindro':
        setResultado(Math.PI * Math.pow(medidas.radio, 2) * medidas.altura);
        break;
      case 'cono':
        setResultado((1/3) * Math.PI * Math.pow(medidas.radioBase, 2) * medidas.alturaCono);
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

      <h1 className="text-4xl font-bold text-[#f97316] mb-4">Volúmenes</h1>
      
      <div className="flex border-b border-gray-200 mb-8 w-full max-w-4xl">
        <button
          onClick={() => setActiveTab('teoria')}
          className={`py-2 px-4 font-medium ${activeTab === 'teoria' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
        >
          Teoría
        </button>
        <button
          onClick={() => setActiveTab('calculadora')}
          className={`py-2 px-4 font-medium ${activeTab === 'calculadora' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
        >
          Calculadora
        </button>
      </div>

      <div className="w-full max-w-4xl">
        {activeTab === 'teoria' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">¿Qué es el volumen?</h2>
            <div className="space-y-4">
              <p>El volumen es la medida del espacio que ocupa un cuerpo geométrico en tres dimensiones.</p>
              
              <div className="bg-orange-50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold mb-2">Fórmulas principales:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cubo:</strong> lado³</li>
                  <li><strong>Prisma rectangular:</strong> base × altura × profundidad</li>
                  <li><strong>Esfera:</strong> (4/3)πr³</li>
                  <li><strong>Cilindro:</strong> πr²h</li>
                  <li><strong>Cono:</strong> (1/3)πr²h</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calculadora' && (
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Calculadora de Volúmenes</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Selecciona un cuerpo:</label>
              <select
                value={figura}
                onChange={(e) => setFigura(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="cubo">Cubo</option>
                <option value="prisma">Prisma Rectangular</option>
                <option value="esfera">Esfera</option>
                <option value="cilindro">Cilindro</option>
                <option value="cono">Cono</option>
              </select>
            </div>

            <div className="space-y-4 mb-6">
              {figura === 'cubo' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Longitud del lado:</label>
                  <input
                    type="number"
                    name="lado"
                    value={medidas.lado}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  />
                </div>
              )}

              {figura === 'prisma' && (
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profundidad:</label>
                    <input
                      type="number"
                      name="profundidad"
                      value={medidas.profundidad}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                  </div>
                </>
              )}

              {figura === 'esfera' && (
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

              {figura === 'cilindro' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Radio de la base:</label>
                    <input
                      type="number"
                      name="radio"
                      value={medidas.radio}
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

              {figura === 'cono' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Radio de la base:</label>
                    <input
                      type="number"
                      name="radioBase"
                      value={medidas.radioBase}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Altura:</label>
                    <input
                      type="number"
                      name="alturaCono"
                      value={medidas.alturaCono}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                  </div>
                </>
              )}
            </div>

            <button
              onClick={calcularVolumen}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Calcular Volumen
            </button>

            {resultado !== null && (
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold">Resultado:</h3>
                <p className="text-2xl font-bold mt-2">
                  Volumen = {resultado.toFixed(2)} unidades cúbicas
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}