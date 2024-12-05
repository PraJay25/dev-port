import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://via.placeholder.com/800x600?text=Image1",
    "https://via.placeholder.com/800x600?text=Image2",
    "https://via.placeholder.com/800x600?text=Image3",
    "https://via.placeholder.com/800x600?text=Image4",
  ];
  // Last slide with professional text

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set interval timing: 30 seconds for the last slide, 5 seconds for others
    const interval = setInterval(
      () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      },
      currentIndex === images.length - 1 ? 40000 : 10000
    );

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex, images.length]);

  return (
    <section className="relative w-screen overflow-hidden">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-[400px] md:h-[500px] lg:h-[600px] relative"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Special Content for the Last Slide */}
            {index === images.length - 1 && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Hello, I'm Shiv Prakash
                </h2>
                <p className="text-sm md:text-lg mt-4 max-w-2xl">
                  I am a passionate Software Development Engineer with expertise
                  in creating user-friendly, responsive, and scalable web
                  applications. I specialize in React, Next.js, and front-end
                  development.
                </p>
                <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
                  Learn More About Me
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-blue-500 scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            } transition-transform transform hover:scale-110`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
