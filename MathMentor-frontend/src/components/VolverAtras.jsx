import { useNavigate } from "react-router-dom";

export default function VolverAtras() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
      >
        ← Volver atrás
      </button>
    </div>
  );
}