import React from "react";

const images = [
  "/Images/gal1.jpg",
  "/Images/gal2.jpg",
  "/Images/gal3.png",
  "/Images/gal4.jpg",
  "/Images/gal5.webp",
  "/Images/gal6.webp",
];

const Gallery = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl text-center font-bold text-white mb-4">
            Gallery
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
