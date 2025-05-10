'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { TextAnimate } from './magicui/text-animate';
import { BorderBeam } from './magicui/border-beam';
import Link from 'next/link';

export function AmazonFBABlog({ isFullPage = false }) {
  const [isExpanded, setIsExpanded] = useState(isFullPage);

  const handleReadMore = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <Card className="overflow-hidden">
      <BorderBeam className="p-6">
        <div className="space-y-6">
          <TextAnimate
            text="🛍️ Amazon FBA: Private Label vs. Wholesale"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          />
          
          <p className="text-lg text-gray-700">
            Amazon FBA offers two powerful models: <strong>Private Label</strong> and <strong>Wholesale</strong>. 
            At <span className="font-semibold">Itech Universal FZE</span>, we help you choose the right path based on your business goals.
          </p>

          {!isExpanded ? (
            <div className="flex justify-center">
              {isFullPage ? (
                <Button 
                  onClick={handleReadMore}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Read More
                </Button>
              ) : (
                <Link href="/blog/amazon-fba">
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Read More
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {/* Private Label Section */}
              <div>
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
              <div>
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
              <div className="overflow-x-auto">
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
                <h4 className="text-xl font-semibold text-indigo-700 mb-2">Need Help Deciding?</h4>
                <p className="text-gray-700 mb-4">
                  Whether you're launching your own brand or scaling with wholesale, <strong>Itech Universal</strong> offers:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Sourcing (UAE & Europe)</li>
                  <li>Branding & packaging</li>
                  <li>Wholesale product supply</li>
                  <li>Full Amazon FBA setup</li>
                </ul>
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  📞 Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </BorderBeam>
    </Card>
  );
}