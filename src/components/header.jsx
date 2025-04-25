import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/">MathMentor</Link>
        </h1>
        <ul className="flex space-x-4">
          <li><Link to="/aritmetica" className="hover:underline">Aritmética</Link></li>
          <li><Link to="/geometria" className="hover:underline">Geometría</Link></li>
        </ul>
      </nav>
    </header>
  );
}
