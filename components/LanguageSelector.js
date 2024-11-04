import { useState } from 'react';
import { useLanguage } from '/context/LanguageContext';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { changeLanguage } = useLanguage(); 
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Cambia el estado del menú

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="focus:outline-none flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-green-700 hover:text-green-900"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8 4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8zm2.46-9.58l-1.41-1.41 2.13-2.13-2.13-2.13 1.41-1.41 2.12 2.13 2.13-2.13 1.41 1.41-2.13 2.13 2.13 2.13-1.41 1.41-2.12-2.13zm-7.46.34c-1.39 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.11-2.5-2.5-2.5zm2.5 6h-5c-.83 0-1.5.67-1.5 1.5v1h8v-1c0-.83-.67-1.5-1.5-1.5z"/>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-lg shadow-md py-2 w-24">
          <button 
            onClick={() => {
              changeLanguage('es');
              setIsMenuOpen(false); 
            }} 
            className="block w-full text-left px-4 py-2 text-green-700 hover:bg-emerald-100"
          >
            Español
          </button>
          <button 
            onClick={() => {
              changeLanguage('en');
              setIsMenuOpen(false); 
            }} 
            className="block w-full text-left px-4 py-2 text-green-700 hover:bg-emerald-100"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
