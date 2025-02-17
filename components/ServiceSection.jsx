const ServicesSection = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Amazon FBA Experts</h3>
            <p className="text-gray-600">
              Specializing in private label and wholesale, optimizing logistics,
              branding, and fulfillment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">
              Premium Brand Selection
            </h3>
            <p className="text-gray-600">
              Partnering with trusted brands like TOM FORD, Hourglass, Drunk
              Elephant, and more.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
            <p className="text-gray-600">
              We analyze market trends to identify high-demand, profitable
              products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
