// pages/layout.js
import { LanguageProvider } from '../context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18next from '../utils/i18n';
import Navbar from '../components/Navbar'; // Asegúrate de importar tu Navbar
import Footer from '../components/Footer'; // Asegúrate de importar tu Footer
// import '../styles/globals.css'; // Importa tus estilos globales (opcional)

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
    <LanguageProvider>
      <I18nextProvider i18n={i18next}>
        <div className="min-h-screen flex flex-col">
          {/* <Navbar /> Barra de navegación */}
          <main className="flex-grow"> {/* Área principal donde se renderizarán las páginas */}
            {children}
          </main>
          {/* <Footer /> Pie de página */}
        </div>
            </I18nextProvider>
        </LanguageProvider>
        </body>
    </html>
  );
}

export default RootLayout;

