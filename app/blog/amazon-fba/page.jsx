import { AmazonFBABlog } from '@/components/AmazonFBABlog';

export default function AmazonFBAPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-16">
        <AmazonFBABlog isFullPage={true} />
      </div>
    </main>
  );
} 