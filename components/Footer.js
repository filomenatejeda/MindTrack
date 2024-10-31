// components/Footer.js
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="p-4 bg-emerald-200 text-center border-t border-emerald-300"> {/* Fondo verde esmeralda y borde */}
      <p className="text-gray-800">&copy; {t('footer')}</p> {/* Texto gris oscuro para mayor contraste */}
    </footer>
  );
}

