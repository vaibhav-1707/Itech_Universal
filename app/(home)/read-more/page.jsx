'use client';

import React, { Suspense } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import Navbar from '@/components/Navbar';

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center relative z-10 px-4 py-10">
        <section className="relative bg-white border border-gray-300 max-w-5xl w-full rounded-xl p-10 backdrop-blur-md shadow-lg">
          <Suspense fallback={<div className="absolute inset-0 z-[-1]" />}>
            <BorderBeam size={800} className="absolute inset-0 z-[-1]" />
          </Suspense>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">📖 Read More About Us</h2>

          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">Itech Universal FZE</span> is a UAE-registered e-commerce company operating under the 
            <span className="font-medium"> Sharjah Publishing City Free Zone</span> license. Since <strong>2021</strong>, we’ve focused on the 
            global sourcing and retail distribution of high-demand skincare and beauty products, delivering to customers in the 
            <strong> United States</strong>, <strong>United Kingdom</strong>, and <strong>United Arab Emirates</strong>.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Our business is built around the <strong>Amazon FBA model</strong>, leveraging fulfillment centers in the US and UK to ensure 
            fast, reliable delivery. We also cater to the UAE market through direct-to-consumer platforms. From product import and 
            brand verification to listing creation and logistics management—we handle it all.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            With a wide scope of licensed activities—including <strong>online retail, mail order sales, social media commerce</strong>, and 
            <strong> gift trading</strong>—<span className="font-semibold">Itech Universal FZE</span> is structured for scalability and long-term growth. 
            Every product we offer is carefully curated to meet <strong>international quality standards</strong> and ensure customer satisfaction.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            At <span className="font-semibold">Itech Universal FZE</span>, we’re committed to delivering <strong>trusted global brands</strong>, efficient 
            service, and a <strong>seamless customer experience</strong> across borders.
          </p>

          <div className="mt-8 bg-indigo-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">🌍 Our Core Areas</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Amazon FBA Retail Operations (US & UK)</li>
              <li>Direct-to-Consumer Delivery in UAE</li>
              <li>Brand Verification & Product Listing</li>
              <li>Social Media & Online Sales Platforms</li>
              <li>Global Sourcing & Logistics</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;