import React from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import ScriptCard from "../components/ScriptCard";
import { IoSearch } from "react-icons/io5";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <section id="ad-section" className="py-4">
        <div className="container mx-auto px-4">
          <div className="aspect-[728/90] flex items-center justify-center bg-gray-300">
            <h1 className="text-2xl">Your Ad goes here</h1>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-4 px-4">
        <div className="relative">
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-black focus:border-black"
            type="search"
            placeholder="Search"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-black rounded-r-sm hover:bg-gray-900 focus:outline-none focus:ring-[0.5px] focus:ring-black focus:border-black">
            <IoSearch />
          </button>
        </div>
      </div>
      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Your Scripts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ScriptCard
            imageUrl="https://market-resized.envatousercontent.com/codecanyon.net/files/556396876/chatpion_cover.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=832cc3a3709a7f1a38a8be1adf7ab265fd48c32b39d169c5e67c19ad759a69a3"
            title="ChatPion: AI Chatbot for Social Media Marketing (SaaS)"
            price="10"
            bought={true}
            demoVideoUrl="https://www.youtube.com/embed/YRGiYySpH5Y"
          />
          <ScriptCard
            imageUrl="https://market-resized.envatousercontent.com/codecanyon.net/files/551916787/envato-banner-590x300.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=4595158b8d1d6a1fc92a8dda942d328433965f76c3f43e9dc8232c4ebaf79c16"
            title="Sonivo - Ai cloud call center SAAS system"
            price="120"
            bought={true}
            demoVideoUrl="https://www.youtube.com/embed/_WrMzFlLk7Q"
          />
          <ScriptCard
            imageUrl="https://market-resized.envatousercontent.com/codecanyon.net/files/550671643/image.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=2f72f898de7ffc5c11540e143131a0640c38de96467c545a69d2c5071da21173"
            title="vCard SaaS - Business Card Builder SaaS - Laravel VCard Saas - NFC Card"
            price="29"
            bought={true}
            demoVideoUrl="https://www.youtube.com/embed/f9wJBdFy6sQ"
          />
        </div>
      </section>
      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recently Added Scripts</h2>
          {/* <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-700">
              <SlArrowLeft />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <SlArrowRight />
            </button>
          </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ScriptCard
            imageUrl="https://market-resized.envatousercontent.com/codecanyon.net/files/556396876/chatpion_cover.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=832cc3a3709a7f1a38a8be1adf7ab265fd48c32b39d169c5e67c19ad759a69a3"
            title="ChatPion: AI Chatbot for Social Media Marketing (SaaS)"
            price="10"
            demoVideoUrl="https://www.youtube.com/embed/YRGiYySpH5Y"
          />
          <ScriptCard
            imageUrl="https://market-resized.envatousercontent.com/codecanyon.net/files/551916787/envato-banner-590x300.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=4595158b8d1d6a1fc92a8dda942d328433965f76c3f43e9dc8232c4ebaf79c16"
            title="Sonivo - Ai cloud call center SAAS system"
            price="120"
            demoVideoUrl="https://www.youtube.com/embed/_WrMzFlLk7Q"
          />
          <ScriptCard
            imageUrl="https://market-resized.envatousercontent.com/codecanyon.net/files/550671643/image.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=2f72f898de7ffc5c11540e143131a0640c38de96467c545a69d2c5071da21173"
            title="vCard SaaS - Business Card Builder SaaS - Laravel VCard Saas - NFC Card"
            price="29"
            demoVideoUrl="https://www.youtube.com/embed/f9wJBdFy6sQ"
          />
          <ScriptCard
            imageUrl="https://market-resized.envatousercontent.com/codecanyon.net/files/511359205/hero_banner-v2.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=492f676286d331136390896e4143dfdab8ea724f50c016dfe74f201f85c3362c"
            title="WhatsCRM - Chatbot, Flow Builder, API Access, WhatsApp CRM SAAS System"
            price="200"
            demoVideoUrl="https://www.youtube.com/embed/6vwNcNOTVzY"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
