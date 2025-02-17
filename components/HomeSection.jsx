
const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen z-10 bg-gray-50 flex items-center justify-center"
    >
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Amazon FBA Partner
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Specializing in health & beauty products and massage accessories,
            serving both UK and UAE markets
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors z-10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;