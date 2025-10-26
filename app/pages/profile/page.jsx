'use client';
import { useState } from "react";
import { About } from "../../../components/About.jsx";
import { Experiences } from "../../../components/Experiences.jsx";
import { Recommended } from "../../../components/Recommended.jsx";

const tabs = [
  { name: "About Me" },
  { name: "Experiences" },
  { name: "Recommended" },
];

export default function ProfileCard() {
  const [activeTab, setActiveTab] = useState(0);

  const cardBody = [<About />, <Experiences />, <Recommended />];

  return (
    <div className="w-full bg-[#1E1F24] rounded-2xl shadow-lg p-4 sm:p-6 mx-auto m-2 font-sans text-gray-300">

      <div className="relative flex items-center bg-[#2A2B31] rounded-full p-1.5 shadow-inner">
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(idx)}
            className={`relative flex-1 py-2.5 text-sm sm:text-base font-medium transition-all duration-300 rounded-full z-10 cursor-pointer
              ${activeTab === idx
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
              }`}
          >
            {tab.name}
            {activeTab === idx && (
              <span className="absolute inset-0 rounded-full bg-[#0D0F14] shadow-md transition-all duration-300 -z-10"></span>
            )}
          </button>
        ))}
      </div>

      {/* Card Body */}
      <div
        className="h-[180px] mt-5 overflow-y-auto text-gray-300 leading-relaxed custom-scrollbar"
      >
        {cardBody[activeTab]}
      </div>
    </div>
  );
}
