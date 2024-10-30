// pages/layout.js
import { LanguageProvider } from '../context/LanguageContext'; // Importa tu LanguageProvider
// import '../assets/styles/mobile.css'; // Importa tus estilos globales

function RootLayout({ children }) {
  return (
    <LanguageProvider> {/* Envuelve la aplicación con el LanguageProvider */}
      {children} {/* Renderiza los hijos (las páginas) aquí */}
    </LanguageProvider>
  );
}

export default RootLayout;
