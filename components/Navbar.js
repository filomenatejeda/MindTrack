import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MindTrack</h1>
        <div className="flex space-x-4">
          <a href="#emotion-log" className="hover:text-blue-300">Registro de Emociones</a>
          <a href="#relaxation" className="hover:text-blue-300">Relajación</a>
          <a href="#habits" className="hover:text-blue-300">Hábitos</a>
          <a href="#professionals" className="hover:text-blue-300">Profesionales</a>
          <a href="#resources" className="hover:text-blue-300">Recursos</a>
          <Link href="/login" className="bg-blue-500 text-white px-3 py-1 rounded">
          Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}


