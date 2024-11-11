import React from 'react';

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-blue-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Categories</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Find what you are looking for
        </p>

        {/* Grid for Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full h-60 flex items-center justify-center bg-gray-100">
              <img
                src="/naturalmateplant.png"
                alt="Natural Plants"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Natural Plants</h3>
            </div>
          </div>

          {/* Category Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full h-60 flex items-center justify-center bg-gray-100">
              <img
                src="/plantacccessories.png"
                alt="Plant Accessories"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Plant Accessories</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
                Explore →
              </button>
            </div>
          </div>

          {/* Category Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full h-60 flex items-center justify-center bg-gray-100">
              <img
                src="/succulentplant.png"
                alt="Artificial Plants"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Artificial Plants</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
