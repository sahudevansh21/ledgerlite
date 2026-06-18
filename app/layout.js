import './globals.css';

export const metadata = {
  title: 'LedgerLite – Unified Bookkeeping Dashboard',
  description: 'Consolidate invoices, expenses and tax deadlines in one place.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}