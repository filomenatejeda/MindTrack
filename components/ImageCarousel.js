import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://blog.totalpass.com.mx/wp-content/uploads/2023/09/IMGS-SEPT-BLOG-D-960x540.jpg',
    'https://media.ambito.com/p/92ca7246ac731549617a696b36994250/adjuntos/239/imagenes/040/882/0040882465/salud-mental-fotojpg.jpg',
    'https://deborahterapiaemocional.com/wp-content/uploads/2022/10/thumbnail_img_nota_web_Talleres_Salud_Mental.png',
    'https://www.cooperativaciencia.cl/wp-content/uploads/2023/10/iStock-1479494606.jpg',
    'https://static.wixstatic.com/media/0806eb_cef4b155327544a3a2ad44f5c105689a~mv2.jpg/v1/fill/w_568,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0806eb_cef4b155327544a3a2ad44f5c105689a~mv2.jpg',
    'https://radio.uchile.cl/wp-content/uploads/2024/05/Salud-mental-1.png',
    'https://blog.tusicologo.com/wp-content/uploads/2024/01/salud-mental.png',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Use useEffect to change slide automatically
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-80 object-cover transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-teal-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;



