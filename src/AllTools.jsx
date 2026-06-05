import React, { useEffect, useRef } from "react";
import { images, support, tools } from "./assets/assets";

const AllTools = () => {
  return (
    <>
      <div className="flex flex-col gap-16 items-center justify-center p-6 md:p-16 bg-dark-custom text-white min-h-screen">
       
        <div className="flex flex-col gap-5 items-center justify-center text-center w-full">
          <h2 className="text-3xl md:text-5xl font-bold">
            All the tools you need
          </h2>
          <p className="text-sm md:text-base max-w-2xl text-gray-300 leading-relaxed">
            The Kali Linux penetration testing platform contains a vast array of
            tools and utilities. From information gathering to final reporting,
            Kali Linux enables security and IT professionals to assess the
            security of their systems.
          </p>
          <p className="text-lg md:text-xl font-extrabold">
            Find out all about{" "}
            <span className="text-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
              Kali's Tools
            </span>
          </p>

          {/* Carousel Wrapper */}
          <div className="w-full max-w-6xl h-32 flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-6 items-center justify-center">
            {tools.map((tool, index) => (
              <img
                key={index}
                src={tool}
                alt={`tool-${index}`}
                className="w-12 sm:w-16 md:w-20 h-auto shrink-0 object-contain "
              />
            ))}
          </div>
        </div>

        
        <div className="flex flex-col gap-12 items-center w-full max-w-6xl ">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">
            Kali Everywhere
          </h2>

          {/* Top Featured Columns (Undercover, NetHunter, Win-KeX) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full">
            {/* Undercover Mode */}
            <div className="flex flex-col items-center text-center  p-6 rounded-2xl transition-all">
              <img
                src={images.desktop}
                alt="Undercover Mode"
                className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-800"
              />
              <h3 className="text-lg font-bold mb-2">Undercover Mode</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Using Kali in an environment where you don't want to draw
                attention to yourself?{" "}
                <span className="text-blue-400 cursor-pointer">
                  Kali Undercover
                </span>{" "}
                is the perfect way to not stand out in a crowd.
              </p>
            </div>

            {/* Kali NetHunter */}
            <div className="flex flex-col h-fit items-center text-center  p-6 rounded-2xl transition-all order-first md:order-0 ">
              <img
                src={images.nethunder}
                alt="Kali NetHunter"
                className=" object-contain "
              />
              <h3 className="text-lg font-bold mt-2">Kali NetHunter</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs mt-2">
                A mobile penetration testing platform for Android devices, based
                on Kali Linux.{" "}
                <span className="text-blue-400 cursor-pointer">
                  Kali NetHunter
                </span>{" "}
                is made up of an App, App Store, Kali Container and KeX.
              </p>
            </div>

            {/* Win-KeX */}
            <div className="flex flex-col items-center text-center  p-6 rounded-2xl borderhover:border-gray-700 transition-all">
              <img
                src={images.win}
                alt="Win-KeX"
                className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-800"

              />
              <h3 className="text-lg font-bold mb-2">Win-KeX</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                <span className="text-blue-400 cursor-pointer">Win-KeX</span>{" "}
                provides a full Kali Desktop Experience for Windows WSL.
                Applications started via Kali's panel will share the desktop
                with Microsoft Windows applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTools;
