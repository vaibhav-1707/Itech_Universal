import { AmazonFBABlog } from './AmazonFBABlog';

export function LatestInsights() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Latest Insights</h2>
        <div className="grid gap-8">
          <AmazonFBABlog isFullPage={false} />
          {/* Add more blog components here */}
        </div>
      </div>
    </section>
  );
} 