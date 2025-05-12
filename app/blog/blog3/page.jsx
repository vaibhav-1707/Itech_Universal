'use client';

import React, { Suspense } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const BlogPage = () => {
  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col">
      <Navbar/>
      <main className="flex-grow flex items-center justify-center relative z-10 px-4 py-10">
        <section className="relative bg-white border border-gray-300 max-w-5xl w-full rounded-xl p-10 backdrop-blur-md shadow-lg">
          <Suspense fallback={<div className="absolute inset-0 z-[-1]" />}>
            <BorderBeam size={800} className="absolute inset-0 z-[-1]" />
          </Suspense>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">📈 Scaling Your Amazon FBA Business</h2>
          <p className="text-lg text-gray-700 mb-10">
            Scaling your Amazon FBA business requires strategic planning and execution. Here are key strategies to help you grow efficiently.
          </p>

          {/* Expand Product Line */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🛍️ Expand Your Product Line</h3>
            <p className="text-gray-700 mb-2">Introducing new products can attract a broader customer base and increase sales. Use market research tools to identify trending products and customer needs.</p>
          </div>

          {/* Optimize Listings */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🔍 Optimize Product Listings</h3>
            <p className="text-gray-700 mb-2">Enhance your product titles, descriptions, and images to improve visibility and conversion rates. Utilize SEO best practices to rank higher in search results.</p>
          </div>

          {/* Leverage Advertising */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">💡 Leverage Advertising</h3>
            <p className="text-gray-700 mb-2">Invest in Amazon PPC campaigns to drive targeted traffic to your listings. Monitor and adjust your campaigns regularly for optimal performance.</p>
          </div>

          {/* Expand to New Markets */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🌍 Expand to New Markets</h3>
            <p className="text-gray-700 mb-2">Consider selling in international Amazon marketplaces to reach more customers. Understand the regulations and customer preferences in each region.</p>
          </div>

          {/* Utilize Fulfillment Services */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🚚 Utilize Fulfillment Services</h3>
            <p className="text-gray-700 mb-2">Leverage Amazon's Fulfillment by Amazon (FBA) to handle storage, shipping, and customer service, allowing you to focus on scaling your business.</p>
          </div>

          {/* Call to Action */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">🚀 Ready to Scale Your Business?</h4>
            <p className="text-gray-700 mb-4">
              Implement these strategies to take your Amazon FBA business to the next level. For personalized assistance, reach out to our team.
            </p>
            <Link href="/#contact" scroll={true} className="inline-block mt-2 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">
              📞 Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;