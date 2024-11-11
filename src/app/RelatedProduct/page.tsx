import React from 'react';

const BestSellingPlants = () => {
  const products = [
    { id: 1, name: 'Natural Plants', price: '$ 1,400.00', image: '/naturalplant1.png' },
    { id: 2, name: 'Artificial Plants', price: '$ 900.00', image: '/hangingplant.png' },
    { id: 3, name: 'Artificial Plants', price: '$ 3,500.00', image: '/artificialplant.png' },
    { id: 4, name: 'Cactus Plant', price: '$ 2,000.00', image: '/naturalplant1.png' },
    { id: 5, name: 'Hanging Plant', price: '$ 1,800.00', image: '/hangingplant.png' },
    { id: 6, name: 'Succulent Plant', price: '$ 1,200.00', image: '/artificialplant.png' },
  ];

  return (
    <section className="py-12 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Best Selling Plants</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Easiest way to a healthy life by buying your favorite plants
          </p>
          <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
            See More →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full h-60 flex items-center justify-center bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800">{product.name}</h3>
                <p className="text-teal-500 font-bold text-sm sm:text-base">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingPlants;
