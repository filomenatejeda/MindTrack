// components/Footer.js
import { useTranslation } from 'react-i18next';

export default function Footer() {

  const { t } = useTranslation(); 

    return (
      <footer className="p-4 bg-gray-200 text-center">
        <p>&copy; {t('footer')} </p>
      </footer>
    );
  }