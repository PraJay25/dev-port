import { useState } from "react";

const images = [
  {
    src: "/images/image1.png",
    text: "Minimal theme to showcase your work",
    button: "Learn More",
  },
  {
    src: "/images/image2.jpg",
    text: "Impressive experience on mobile devices",
    button: "Sample Button",
  },
  {
    src: "/images/image3.jpg",
    text: "An elegant theme for your portfolio",
    button: "View Portfolio",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative bg-milkWhite text-black overflow-hidden">
      {/* Slider Container */}
      <div
        className="relative flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {/* Image */}
            <img
              src={image.src}
              alt={image.text}
              className="w-full h-auto object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
              <div className="bg-white text-black p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-4xl font-bold hover:text-orange-500 transition duration-300">
                  {image.text}
                </h2>
              </div>
              <button className="mt-4 px-6 py-2 bg-white text-black hover:bg-black hover:text-white rounded shadow-md">
                {image.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 z-10"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 z-10"
      >
        &#10095;
      </button>
    </div>
  );
}
