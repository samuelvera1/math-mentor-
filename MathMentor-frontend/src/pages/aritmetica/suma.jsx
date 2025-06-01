import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo_mathmentor.png';
import VolverAtras from '/src/components/VolverAtras';

export default function Suma() {
  const [activeTab, setActiveTab] = useState('teoria'); // 'teoria', 'practica', 'calculadora'

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <VolverAtras />

      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />

      <h1 className="text-4xl font-bold text-[#3b82f6] mb-4">Suma</h1>
      
      {/* Pestañas */}
      <div className="flex border-b border-gray-200 mb-8 w-full max-w-4xl">
        <button
          onClick={() => setActiveTab('teoria')}
          className={`py-2 px-4 font-medium ${activeTab === 'teoria' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Teoría
        </button>
        <button
          onClick={() => setActiveTab('practica')}
          className={`py-2 px-4 font-medium ${activeTab === 'practica' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Practicar
        </button>
        <button
          onClick={() => setActiveTab('calculadora')}
          className={`py-2 px-4 font-medium ${activeTab === 'calculadora' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Calculadora
        </button>
      </div>

      {/* Contenido de las pestañas */}
      <div className="w-full max-w-4xl">
        {activeTab === 'teoria' && <TeoriaSuma />}
        {activeTab === 'practica' && <PracticaSuma />}
        {activeTab === 'calculadora' && <CalculadoraSuma />}
      </div>
    </div>
  );
}

// Componente de Teoría
function TeoriaSuma() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Teoría de Sumas</h2>
      <div className="space-y-4">
        <p>La suma es una operación básica que combina dos o más números para obtener un total.</p>
        <p className="font-bold text-lg">Ejemplo: 2 + 3 = 5</p>
        <p>Propiedades de la suma:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-semibold">Conmutativa:</span> a + b = b + a</li>
          <li><span className="font-semibold">Asociativa:</span> (a + b) + c = a + (b + c)</li>
          <li><span className="font-semibold">Elemento neutro:</span> a + 0 = a</li>
        </ul>
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">¿Cómo sumar?</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Escribe los números uno debajo del otro</li>
            <li>Suma columna por columna empezando por la derecha</li>
            <li>Si el resultado es mayor a 9, lleva una unidad a la siguiente columna</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

// Componente de Práctica
function PracticaSuma() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [respuesta, setRespuesta] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const generarEjercicio = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setNum1(a);
    setNum2(b);
    setRespuesta('');
    setResultado(null);
    setMensaje('');
  };

  const verificarRespuesta = () => {
    const correcto = num1 + num2;
    if (parseInt(respuesta) === correcto) {
      setResultado(true);
      setMensaje('¡Correcto! 🎉');
    } else {
      setResultado(false);
      setMensaje(`Incorrecto 😢. La respuesta correcta es ${correcto}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Practicar Sumas</h2>
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-3xl font-bold mb-4">
            {num1} + {num2} = ?
          </p>
          <input
            type="number"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 text-center text-xl w-24"
            placeholder="?"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={generarEjercicio}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Nuevo Ejercicio
          </button>
          <button
            onClick={verificarRespuesta}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            disabled={!respuesta}
          >
            Verificar
          </button>
        </div>

        {resultado !== null && (
          <div className={`p-4 rounded-lg text-center ${resultado ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
}

// Componente de Calculadora
function CalculadoraSuma() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    if (num1 && num2) {
      setResultado(parseFloat(num1) + parseFloat(num2));
    }
  };

  const limpiar = () => {
    setNum1('');
    setNum2('');
    setResultado('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Calculadora de Sumas</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 flex-1"
            placeholder="Primer número"
          />
          <span className="text-2xl">+</span>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 flex-1"
            placeholder="Segundo número"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={calcular}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            disabled={!num1 || !num2}
          >
            Calcular
          </button>
          <button
            onClick={limpiar}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded"
          >
            Limpiar
          </button>
        </div>

        {resultado && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold">Resultado:</h3>
            <p className="text-2xl font-bold mt-2">
              {num1} + {num2} = {resultado}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}