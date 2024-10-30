// pages/_app.js
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { AppProvider } from '../context/AppContext'; // Asegúrate de que esta ruta sea correcta
import '../styles/globals.css'; // Asegúrate de que tienes el archivo CSS global

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </SessionProvider>
  );
}

export default MyApp;


