"use client";
import React, { useState } from "react";

const Galeri = () => {
  // İlk slider için state
  const [currentSlide, setCurrentSlide] = useState(0);

  // İkinci slider için state
  const [currentSlide2, setCurrentSlide2] = useState(0);

  // İlk slider için ileri ve geri buton fonksiyonları
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imageData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageData.length - 1 : prevSlide - 1
    );
  };

  // İkinci slider için ileri ve geri buton fonksiyonları
  const nextSlide2 = () => {
    setCurrentSlide2((prevSlide) =>
      prevSlide === videoData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prevSlide) =>
      prevSlide === 0 ? videoData.length - 1 : prevSlide - 1
    );
  };

  // Slider içerikleri
  const imageData = [
    { type: "image", source: "alici.jpeg" },
    { type: "image", source: "gonderici.jpeg" },
    { type: "image", source: "sumo.png" },
  ];

  const videoData = [{ type: "video", source: "video1.mp4" }];

  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-50"
      id="galeri">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Galeri
      </h1>

      {/* İlk Slider */}
      <div
        className="flex flex-col md:flex-row gap-10 px-10 slider"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/* Slider with images */}
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Resimler
        </h1>
        <div className="w-full md:w-1/2 relative">
          {imageData.map((item, index) => (
            <img
              key={index}
              src={item.source}
              alt={`Resim ${index + 1}`}
              className={`w-full h-full object-cover rounded-lg ${
                index === currentSlide ? "block" : "hidden"
              }`}
              style={{ width: "100%", height: "400px" }}
            />
          ))}
          {/* İleri ve geri butonları */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
             <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* İkinci Slider */}
      <div
        className="flex flex-col md:flex-row gap-10 px-10 slider mt-20"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/* Slider with videos */}
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Videolar
        </h1>
        <div className="w-full md:w-1/2 relative">
          {videoData.map((item, index) => (
            <video
              key={index}
              style={{height:"500px"}}
              controls
              className={`w-full h-full object-cover rounded-lg ${
                index === currentSlide2 ? "block" : "hidden"
              }`}>
              <source src={item.source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
          {/* İleri ve geri butonları */}
          <button
            onClick={prevSlide2}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide2}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
             <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
