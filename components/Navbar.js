// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">MindTrack</h1>
      <div>
        <Link href="/" className="px-4">Inicio</Link>
        <Link href="/login" className="px-4">Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

