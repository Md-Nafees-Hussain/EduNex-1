'use client';

export default function NewsletterSection() {
  return (
    <section className="bg-purple-50 py-16 text-center px-6">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Stay in the loop</h3>
        <p className="text-gray-600 mb-6 text-sm">
          Get product updates, exclusive invites, and feature releases directly to your inbox.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
