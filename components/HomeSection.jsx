'use client';

import { useRouter } from "next/navigation";

// import DotPattern from './magicui/dot-pattern'; // Uncomment and adjust the import if needed

const HomeSection = () => {
  // const scrollToAbout = () => {
  //   const aboutSection = document.getElementById('about');
  //   aboutSection?.scrollIntoView({ behavior: 'smooth' });
  // };

     const router = useRouter();
     const redirectToReadMore = () =>{
      router.push("/read-more")
     }


  return (
    <section
      id="home"
      className="min-h-screen z-10 bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative text-center inline-block w-full">
          {/* Dots as background */}
          {/* <DotPattern className="absolute inset-0 z-0" /> */}
          <h1 className="relative z-10 text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Amazon FBA Partner
          </h1>
          <p className="relative z-10 text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Specializing in health & beauty products and massage accessories,
            serving USA, UK and UAE markets
          </p>
          <button
            onClick={redirectToReadMore}
            className="relative z-10 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;