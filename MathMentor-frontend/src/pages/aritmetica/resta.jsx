import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo_mathmentor.png';
import VolverAtras from '/src/components/VolverAtras';

export default function Resta() {
  const [activeTab, setActiveTab] = useState('teoria'); // 'teoria', 'practica', 'calculadora'

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <VolverAtras />

      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />

      <h1 className="text-4xl font-bold text-[#ef4444] mb-4">Resta</h1>
      
      {/* Pestañas */}
      <div className="flex border-b border-gray-200 mb-8 w-full max-w-4xl">
        <button
          onClick={() => setActiveTab('teoria')}
          className={`py-2 px-4 font-medium ${activeTab === 'teoria' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
        >
          Teoría
        </button>
        <button
          onClick={() => setActiveTab('practica')}
          className={`py-2 px-4 font-medium ${activeTab === 'practica' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
        >
          Practicar
        </button>
        <button
          onClick={() => setActiveTab('calculadora')}
          className={`py-2 px-4 font-medium ${activeTab === 'calculadora' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
        >
          Calculadora
        </button>
      </div>

      {/* Contenido de las pestañas */}
      <div className="w-full max-w-4xl">
        {activeTab === 'teoria' && <TeoriaResta />}
        {activeTab === 'practica' && <PracticaResta />}
        {activeTab === 'calculadora' && <CalculadoraResta />}
      </div>
    </div>
  );
}

// Componente de Teoría
function TeoriaResta() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Teoría de Restas</h2>
      <div className="space-y-4">
        <p>La resta es una operación que quita una cantidad de otra para encontrar la diferencia.</p>
        <p className="font-bold text-lg">Ejemplo: 5 - 3 = 2</p>
        <p>Partes de la resta:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-semibold">Minuendo:</span> El número al que se le resta (5)</li>
          <li><span className="font-semibold">Sustraendo:</span> El número que se resta (3)</li>
          <li><span className="font-semibold">Diferencia:</span> El resultado (2)</li>
        </ul>
        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">¿Cómo restar?</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Escribe el minuendo arriba y el sustraendo abajo</li>
            <li>Resta columna por columna empezando por la derecha</li>
            <li>Si el dígito del minuendo es menor, toma prestado de la siguiente columna</li>
          </ol>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">¡Importante!</h3>
          <p>El minuendo debe ser mayor o igual que el sustraendo para obtener resultados positivos.</p>
        </div>
      </div>
    </div>
  );
}

// Componente de Práctica
function PracticaResta() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [respuesta, setRespuesta] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const generarEjercicio = () => {
    const a = Math.floor(Math.random() * 10) + 5; // Asegura que a sea mayor
    const b = Math.floor(Math.random() * 5); // Asegura que b sea menor que a
    setNum1(a);
    setNum2(b);
    setRespuesta('');
    setResultado(null);
    setMensaje('');
  };

  const verificarRespuesta = () => {
    const correcto = num1 - num2;
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
      <h2 className="text-2xl font-semibold mb-4">Practicar Restas</h2>
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-3xl font-bold mb-4">
            {num1} - {num2} = ?
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
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
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
function CalculadoraResta() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    if (num1 && num2) {
      setResultado(parseFloat(num1) - parseFloat(num2));
    }
  };

  const limpiar = () => {
    setNum1('');
    setNum2('');
    setResultado('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Calculadora de Restas</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 flex-1"
            placeholder="Minuendo"
          />
          <span className="text-2xl">-</span>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 flex-1"
            placeholder="Sustraendo"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={calcular}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
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
          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold">Resultado:</h3>
            <p className="text-2xl font-bold mt-2">
              {num1} - {num2} = {resultado}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}