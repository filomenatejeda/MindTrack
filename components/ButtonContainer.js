// components/ButtonContainer.js
import React from 'react';

const ButtonContainer = () => {
  return (
    <div className="flex space-x-4">
      <button
        className="relative bg-cover bg-center w-60 h-60 rounded shadow-lg"
        style={{
          backgroundImage: 'url(https://cbd.fakultisupplements.com/wp-content/uploads/2024/08/tecnicas-de-relajacion-para-la-ansiedad.jpg)',
          filter: 'brightness(0.5)',
        }}
      >
        <span className="flex items-center justify-center text-lg font-semibold text-black">
          Ejercicios y Técnicas de Relajación
        </span>
      </button>

      <button
        className="relative bg-cover bg-center w-60 h-60 rounded shadow-lg"
        style={{
          backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4E12AQFChmeMPlMnAw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662419589773?e=2147483647&v=beta&t=uHVdqO5Vqw8HmGTJylLkCaLiZ6QcYCYCwuKjuissum8)',
          filter: 'brightness(0.5)',
        }}
      >
        <span className="flex items-center justify-center text-lg font-semibold text-black">
          Hábitos Saludables
        </span>
      </button>
      <button
        className="relative bg-cover bg-center w-60 h-60 rounded shadow-lg"
        style={{
          backgroundImage: 'url(https://img.huffingtonpost.es/files/image_1200_720/uploads/2022/12/09/6392a18e36ecf.jpeg)',
          filter: 'brightness(0.5)',
        }}
      >
        <span className="flex items-center justify-center text-lg font-semibold text-black">
          Profesionales
        </span>
      </button>
      <button
        className="relative bg-cover bg-center w-60 h-60 rounded shadow-lg"
        style={{
          backgroundImage: 'url(https://observatorio.tec.mx/wp-content/uploads/2023/09/Recursos-educativos-digitales-un-as-bajo-la-manga.jpg)',
          filter: 'brightness(0.5)',
        }}
      >
        <span className="flex items-center justify-center text-lg font-semibold text-black">
          Recursos Educativos
        </span>
      </button>

      {/* Agrega más botones según sea necesario */}
    </div>
  );
};

export default ButtonContainer;

