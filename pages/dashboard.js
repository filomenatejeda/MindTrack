// pages/dashboard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-900">Bienvenido a tu Panel de Control</h1>
      <p className="mt-4 text-gray-700">
        Aquí puedes ver tu registro emocional, tus metas y mucho más.
      </p>
    </div>
  );
}
