// pages/_app.js
import { LanguageProvider } from '../context/LanguageContext'; // Importa tu contexto de idioma
import { I18nextProvider } from 'react-i18next'; // Importa el proveedor de i18next
import i18next from '../utils/i18n'; // Importa la configuración de i18next
import { AuthProvider } from '../context/AuthContext'; // Importa tu contexto de autenticación
// import '../styles/globals.css'; // Importa tus estilos globales (opcional)
import {EmojiProvider } from '../context/EmojiContext'
import "../styles/mobile.css";
import "../styles/tablet.css";
import "../styles/desktop.css";


function MyApp({ Component, pageProps }) {
  return (
     <I18nextProvider i18n={i18next}>
      <LanguageProvider>
        <AuthProvider>
          <EmojiProvider>
           
              <Component {...pageProps} />
           
          </EmojiProvider>
        </AuthProvider>
      </LanguageProvider>
    </I18nextProvider>
   
  );
}

export default MyApp;


