"use client"

const HeroSection = () => {
  return (
    <section className="bg-[#d7ecee] py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side: Text and Stats */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
            Buy your dream plants
          </h1>
          <div className="flex justify-center md:justify-start space-x-8 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">50+</h2>
              <p className="text-md text-gray-600">Plant Species</p>
            </div>
            <div className="border-l-2 border-gray-300 h-8"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">100+</h2>
              <p className="text-md text-gray-600">Customers</p>
            </div>
          </div>
          <div className="relative max-w-sm mx-auto md:mx-0">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-3 pl-4 pr-12 rounded-lg shadow focus:outline-none"
            />
            <button className="absolute top-2 right-3 bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Right Side: Plant Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-black rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/2.png" // Update with the correct image path
              alt="Dream Plant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
