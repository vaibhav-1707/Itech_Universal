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

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">🧴 Choosing Winning Health & Beauty Products</h2>
          <p className="text-lg text-gray-700 mb-10">
            Succeeding in the Amazon FBA Health & Beauty niche requires data-driven decisions and niche understanding. Here's how <strong>Itech Universal FZE</strong> helps you spot products that will fly off the shelves.
          </p>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🔍 Identify Emerging Trends</h3>
            <p className="text-gray-700 mb-2">Use tools like <strong>Google Trends</strong>, <strong>Helium 10</strong>, <strong>Keepa</strong>, and <strong>Trend Hunter</strong> to catch rising interest in product categories like K-beauty, clean skincare, or functional cosmetics.</p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">💬 Read Customer Pain Points</h3>
            <p className="text-gray-700 mb-2">Analyze reviews on competing products to find gaps. For example, customers may complain about poor packaging, lack of results, or strong fragrances—these are opportunities for your brand to stand out.</p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">📊 Validate with Metrics</h3>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Monthly search volume over 3,000 (using tools like Jungle Scout, Keepa etc.)</li>
              <li>Less than 1000 reviews on top competitors</li>
              <li>Profit margin above 30%</li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">📦 Sourcing & Branding Matters</h3>
            <p className="text-gray-700 mb-2">We help source high-quality products from trusted manufacturers in UAE, Korea, Japan, USA and Europe. With clean packaging, eco-friendly ingredients, and customer-centric messaging, your products will gain traction fast.</p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">🚀 Ready to Launch a Best-Seller?</h4>
            <p className="text-gray-700 mb-4">
              Itech Universal provides full support:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Product research & validation</li>
              <li>Sourcing from verified suppliers</li>
              <li>Branding and label design</li>
              <li>Amazon FBA listing and SEO</li>
            </ul>
            <Link href="/#contact" scroll={true} className="inline-block mt-2 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">
              ✉️ Contact Itech Universal
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
