"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const BlogSection = () => {
  const carouselRef = useRef(null);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const blogPosts = [
    {
      title: "Amazon FBA Private Label vs. Wholesale",
      excerpt:
        "Discover the pros and cons of different Amazon FBA business models...",
      link: "#",
    },
    {
      title: "Choosing Winning Health & Beauty Products",
      excerpt:
        "Learn how to identify profitable products in the beauty industry...",
      link: "#",
    },
    {
      title: "Scaling Your Amazon FBA Business",
      excerpt:
        "Strategies for expanding your business in the UK and UAE markets...",
      link: "#",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-white flex border border-t flex-col items-center justify-center"
    >
      {/* Blog Posts Carousel */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-6 text-center"
        >
          Latest Insights
        </motion.h2>

        <div
          ref={carouselRef}
          className="relative w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <div className="flex gap-6 px-4 md:px-0 min-w-full">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="flex-none w-[85vw] md:w-1/3 snap-center"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100
                    backdrop-blur-xl bg-gradient-to-br from-white/50 to-purple-50/30 
                    group transition-all duration-300"
                  layoutId={`card-${index}`}
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    background:
                      "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(238,210,255,0.4))",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <InteractiveHoverButton>Read More</InteractiveHoverButton>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-6 text-center"
        >
          Our Expertise
        </motion.h2>

        <div className="relative w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-6 px-4 md:px-0 min-w-full md:grid md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Amazon FBA Experts",
                description:
                  "Specializing in private label and wholesale, optimizing logistics, branding, and fulfillment.",
              },
              {
                title: "Premium Brand Selection",
                description:
                  "Partnering with trusted brands like TOM FORD, Hourglass, Drunk Elephant, and more.",
              },
              {
                title: "Market Insights",
                description:
                  "We analyze market trends to identify high-demand, profitable products.",
              },
            ].map((expertise, index) => (
              <motion.div
                key={index}
                className="flex-none w-[85vw] md:w-auto snap-center"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-md h-full border border-gray-100
                    backdrop-blur-xl bg-gradient-to-br from-white/50 to-purple-50/30 
                    group transition-all duration-300"
                  layoutId={`expertise-${index}`}
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    background:
                      "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(238,210,255,0.4))",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {expertise.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {expertise.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
