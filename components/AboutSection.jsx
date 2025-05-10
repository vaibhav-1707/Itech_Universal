"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "./magicui/border-beam";
import { TypingAnimation } from "./magicui/typing-animation";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import of Lottie component with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse bg-gray-200 rounded-full" />
  ),
});

// Import JSON files
import globalDistribution from "@/public/GlobalDistribution.json";
import amazonPartnership from "@/public/AmazonPartnership.json";
import marketResearch from "@/public/MarketResearch.json";
import customerFocus from "@/public/CustomerSupport.json";
import { TextAnimate } from "./magicui/text-animate";
import { RetroGrid } from "./magicui/retro-grid";

const AboutSection = () => {
  const missionPoints = [
    {
      title: "Global Distribution",
      description: "Delivering premium health & beauty products worldwide",
      icon: "🌍",
      lottie: globalDistribution,
    },
    {
      title: "Amazon Partnership",
      description: "Utilizing Amazon FBA's global infrastructure",
      icon: "🤝",
      lottie: amazonPartnership,
    },
    {
      title: "Market Research",
      description: "Providing market-driven product research",
      icon: "📊",
      lottie: marketResearch,
    },
    {
      title: "Customer Focus",
      description: "Maintaining high customer satisfaction",
      icon: "😊",
      lottie: customerFocus,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Update the LottieAnimation component
  const LottieAnimation = ({ animationData, title }) => (
    <Suspense
      fallback={
        <div className="w-32 h-32 animate-pulse bg-gray-200 rounded-full" />
      }
    >
      <div
        className="w-32 h-32 flex items-center justify-center"
        role="img"
        aria-label={title}
      >
        <Lottie className="w-full h-full" animationData={animationData} />
      </div>
    </Suspense>
  );

  return (
    // Update the section background and card styles
    <section id="about" className="min-h-screen bg-white py-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-24"
        >
          <Card className="max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute inset-0 bg-transparent backdrop-blur-sm" />
                <div className="relative p-16">
                  <motion.h2
                    variants={itemVariants}
                    className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-black mb-8"
                  >
                    <TypingAnimation className="font-semibold text-5xl">
                      About Us
                    </TypingAnimation>
                  </motion.h2>
                  <motion.div
                    variants={itemVariants}
                    className="text-xl text-gray-700 leading-relaxed"
                  >
                    <TextAnimate>
                      Itech Universal FZE is a leading e-commerce company
                      operating in USA, UK and UAE. Our expertise spans
                      across private label, wholesale, and product research,
                      ensuring we stay ahead of market trends. We partner with
                      premium brands.
                    </TextAnimate>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-12 mt-20"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-black text-center mb-16"
                    >
                      Our Mission
                    </motion.h2>
                    <div className="relative">
                      {/* Animated Vertical Connection Line */}
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute left-1/2 -top-12 bottom-14 w-0.5 bg-gradient-to-b from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] -translate-x-1/2 origin-top"
                      />

                      {/* Update the mission points container and card styles */}
                      <div className="space-y-12">
                        {missionPoints.map((point, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative"
                          >
                            <div
                              className={`flex items-center gap-8 
                                ${
                                  index % 2 === 0
                                    ? "justify-start"
                                    : "justify-end"
                                }
                                max-md:justify-center w-full`}
                            >
                              {/* Connection dot - hide on mobile */}
                              <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg max-md:hidden" />

                              {/* Horizontal connector line - hide on mobile */}
                              <div
                                className={`absolute top-1/2 ${
                                  index % 2 === 0 ? "right-1/2" : "left-1/2"
                                } w-[100px] h-0.5 bg-gradient-to-r from-[#A97CF8] to-[#F38CB8] -translate-y-1/2 max-md:hidden`}
                              />

                              <div
                                className={`relative w-full max-w-xl 
                                  ${
                                    index % 2 === 0
                                      ? "mr-[120px]"
                                      : "ml-[120px]"
                                  }
                                  max-md:mx-auto max-md:px-4 max-md:w-[90%]`}
                              >
                                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                  <CardContent className="p-0">
                                    <div className="relative">
                                      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/50 to-purple-50/30 group-hover:from-purple-50/50 group-hover:to-white/30 transition-all duration-300" />
                                      <div className="relative py-12 px-8">
                                        <div
                                          className={`flex items-center justify-between gap-8
                                            ${
                                              index % 2 === 0
                                                ? "flex-row"
                                                : "flex-row-reverse"
                                            }
                                            max-md:flex-col max-md:gap-6`}
                                        >
                                          <div className="flex-1 flex flex-col items-center text-center max-md:w-full">
                                            <h3 className="text-2xl font-semibold text-black mb-3 group-hover:text-primary transition-colors duration-300">
                                              {point.title}
                                            </h3>
                                            <p className="text-lg text-gray-700 max-w-md group-hover:text-gray-900 transition-colors duration-300">
                                              {point.description}
                                            </p>
                                          </div>
                                          <div className="flex-shrink-0 max-md:w-32 transform group-hover:scale-110 transition-transform duration-300">
                                            <LottieAnimation
                                              className="w-32 h-32"
                                              animationData={point.lottie}
                                              title={point.title}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <BorderBeam
                                        size={400}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                      />
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                <BorderBeam size={1000} className="" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Points with Enhanced Animation */}
      </div>
    </section>
  );
};

export default AboutSection;
