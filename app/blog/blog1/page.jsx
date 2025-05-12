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

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">🛍️ Amazon FBA: Private Label vs. Wholesale</h2>
          <p className="text-lg text-gray-700 mb-10">
            Amazon FBA offers two powerful models: <strong>Private Label</strong> and <strong>Wholesale</strong>. At <span className="font-semibold">Itech Universal FZE</span>, we help you choose the right path based on your business goals.
          </p>

          {/* Private Label Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🔹 What is Private Label?</h3>
            <p className="text-gray-700 mb-2">You sell products under <strong>your own brand</strong>. We help source and package these for you.</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li><strong>Build your own brand</strong></li>
              <li>Higher profit margins</li>
              <li>Full control over design & marketing</li>
            </ul>
            <p className="text-sm text-gray-500 italic">Note: Requires more time, budget, and strategy.</p>
          </div>

          {/* Wholesale Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🔹 What is Wholesale?</h3>
            <p className="text-gray-700 mb-2">You buy and resell <strong>existing branded products</strong> from manufacturers or distributors.</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Faster launch</li>
              <li>Lower upfront cost</li>
              <li>Sell trusted, popular products</li>
            </ul>
            <p className="text-sm text-gray-500 italic">Note: Less control over pricing and listings.</p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-200 text-left text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Feature</th>
                  <th className="px-4 py-2 font-semibold">Private Label</th>
                  <th className="px-4 py-2 font-semibold">Wholesale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2">Brand Ownership</td>
                  <td className="px-4 py-2">✅ Yes</td>
                  <td className="px-4 py-2">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Setup Cost</td>
                  <td className="px-4 py-2">💰 High</td>
                  <td className="px-4 py-2">💸 Moderate</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Launch Speed</td>
                  <td className="px-4 py-2">⏳ Slower</td>
                  <td className="px-4 py-2">🚀 Faster</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Profit Margins</td>
                  <td className="px-4 py-2">📈 Higher</td>
                  <td className="px-4 py-2">📉 Moderate</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Risk Level</td>
                  <td className="px-4 py-2">⚠️ Higher</td>
                  <td className="px-4 py-2">✅ Lower</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">💡 Need Help Deciding?</h4>
            <p className="text-gray-700 mb-4">
              Whether you're launching your own brand or scaling with wholesale, <strong>Itech Universal</strong> offers:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Sourcing (USA, UAE & Europe)</li>
              <li>Branding & packaging</li>
              <li>Wholesale product supply</li>
              <li>Full Amazon FBA setup</li>
            </ul>
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
