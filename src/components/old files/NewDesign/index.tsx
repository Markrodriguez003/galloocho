import React from 'react';
import './NewDesign.css';

export default function NewDesign() {
  return (
    <div className="new-design-page min-h-screen bg-gray-100 pb-10">
      <header className="new-design-hero bg-gray-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2 tracking-wide">New Design Collections</h1>
        <p className="text-lg text-gray-200">Discover curated collections of exclusive art drops and collaborations.</p>
      </header>
      <section className="collections-grid flex flex-wrap gap-8 justify-center mt-10 max-w-6xl mx-auto">
        {/* Example collection cards, you can map over real data here */}
        <div className="collection-card bg-white rounded-xl shadow-md overflow-hidden w-80 transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl text-center">
          <img className="w-full h-52 object-cover" src="https://cdn.1xrun.com/media/collections/1xrun-collections-hero.jpg" alt="Collection 1" />
          <h2 className="text-xl font-semibold mt-5 mb-2 text-gray-900">Featured Collection</h2>
          <p className="text-gray-600 mb-5">Limited edition prints and originals from top artists.</p>
        </div>
        <div className="collection-card bg-white rounded-xl shadow-md overflow-hidden w-80 transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl text-center">
          <img className="w-full h-52 object-cover" src="https://cdn.1xrun.com/media/collections/1xrun-collections-hero2.jpg" alt="Collection 2" />
          <h2 className="text-xl font-semibold mt-5 mb-2 text-gray-900">Collaboration Series</h2>
          <p className="text-gray-600 mb-5">Special collaborations and unique releases.</p>
        </div>
        <div className="collection-card bg-white rounded-xl shadow-md overflow-hidden w-80 transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-xl text-center">
          <img className="w-full h-52 object-cover" src="https://cdn.1xrun.com/media/collections/1xrun-collections-hero3.jpg" alt="Collection 3" />
          <h2 className="text-xl font-semibold mt-5 mb-2 text-gray-900">Artist Spotlight</h2>
          <p className="text-gray-600 mb-5">Spotlight on emerging and established artists.</p>
        </div>
      </section>
    </div>
  );
}
