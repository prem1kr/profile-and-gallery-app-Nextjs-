'use client';

import { useRef, useState } from "react";

export default function Gallery() {
  const scrollRef = useRef(null);
  const [images, setImages] = useState([
    '/image.png',
    '/image.png',
    '/image.png',
  ]);

  const scrollPrev = () => scrollRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  const scrollNext = () => scrollRef.current?.scrollBy({ left: 220, behavior: "smooth" });

  const handleAddImage = () => {
    setImages((imgs) => [...imgs, '/image.png']);
  };

  return (
    <div className="w-full bg-[#1E1F24] rounded-2xl shadow-lg p-5 sm:p-6 mx-auto m-2 font-sans text-gray-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button className="px-6 py-2.5 rounded-xl bg-[#0D0F14] text-white text-lg font-semibold shadow-inner tracking-wide">
            Gallery
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-b from-[#2C2F36] to-[#22252B]
                       text-gray-200 font-medium text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03] cursor-pointer"
          >
            + ADD IMAGE
          </button>

          <button
            onClick={scrollPrev}
            aria-label="Scroll Previous"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-b from-[#2C2F36] to-[#22252B]
                       shadow-inner text-white text-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            aria-label="Scroll Next"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-b from-[#2C2F36] to-[#22252B]
                       shadow-inner text-white text-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/*  Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 scroll-smooth no-scrollbar perspective-1000"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg bg-[#1A1C20] min-w-[180px] w-48 h-48 flex items-center justify-center
                 transform-gpu transition-transform duration-500 cursor-pointer 
                 hover:scale-[1.08] hover:rotate-x-6 hover:-rotate-y-6 hover:shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="object-cover w-full h-full rounded-2xl transition-transform duration-500"
              draggable="false"
            />
          </div>
        ))}
      </div>


    </div>
  );
}
