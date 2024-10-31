import { useState } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://blog.totalpass.com.mx/wp-content/uploads/2023/09/IMGS-SEPT-BLOG-D-960x540.jpg',
    'https://media.ambito.com/p/92ca7246ac731549617a696b36994250/adjuntos/239/imagenes/040/882/0040882465/salud-mental-fotojpg.jpg',
    'https://deborahterapiaemocional.com/wp-content/uploads/2022/10/thumbnail_img_nota_web_Talleres_Salud_Mental.png',
    // Agrega más imágenes según sea necesario
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-64 object-cover transition-transform duration-500" // Ajusta h-64 para el tamaño predeterminado
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
