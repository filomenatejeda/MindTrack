// pages/layout.js
import { LanguageProvider } from '../context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18next from '../utils/i18n';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <I18nextProvider i18n={i18next}>
        <div className="min-h-screen flex flex-col">
          {/* <Navbar /> Barra de navegación */}
          <main className="flex-grow"> {/* Área principal */}
            {children}
          </main>
          {/* <Footer /> Pie de página */}
        </div>
      </I18nextProvider>
    </LanguageProvider>
  );
}

export default RootLayout;


