import { FaLeaf, FaShippingFast, FaHeadset } from 'react-icons/fa'; // Import the icons you want to use

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-5">About us</h2>
      <p className="text-gray-600 mb-10 text-sm sm:text-base">
        Order now and appreciate the beauty of nature
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <FaLeaf className="text-4xl text-teal-500 mb-4" /> {/* Icon for Large Assortment */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Large Assortment</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            We offer many different types of products with fewer variations in each category.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <FaShippingFast className="text-4xl text-teal-500 mb-4" /> {/* Icon for Fast & Free Shipping */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Fast & Free Shipping</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            4-day or less delivery time, free shipping, and an expedited delivery option.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <FaHeadset className="text-4xl text-teal-500 mb-4" /> {/* Icon for 24/7 Support */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">24/7 Support</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Answers to any business-related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
