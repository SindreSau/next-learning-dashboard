import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  console.log("Using DATABASE_URL", process.env.NEXT_PUBLIC_DATABASE_URL);

  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-gray-100 text-gray-900 antialiased`}
      >
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 sm:px-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </header>
        <main className="container mx-auto flex-grow px-4 py-8 sm:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
