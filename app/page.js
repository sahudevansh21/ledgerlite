"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">LedgerLite</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The all‑in‑one dashboard that syncs bank feeds, consolidates client invoices & expenses, and builds ready‑to‑file tax summaries.
        </p>
        <Link href="/dashboard">
          <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Get Started
          </a>
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">Automatic Bank Sync</h3>
            <p className="text-gray-600">Connect any bank account and import transactions daily without manual entry.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">Unified Client View</h3>
            <p className="text-gray-600">See every client’s invoices, receipts and expenses on a single dashboard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">Tax‑Ready Summaries</h3>
            <p className="text-gray-600">Generate quarterly and annual tax reports that are ready to file with the IRS.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 px-4 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Simplify Your Bookkeeping Today</h2>
        <Link href="/dashboard">
          <a className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Go to Dashboard
          </a>
        </Link>
      </section>
    </main>
  );
}
