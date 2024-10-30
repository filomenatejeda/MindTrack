// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">MindTrack</div>
      <div className="flex space-x-4">
        <Link href="/" className="text-white">
          Inicio
        </Link>
        <Link href="/log/login" className="text-white">
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
}

