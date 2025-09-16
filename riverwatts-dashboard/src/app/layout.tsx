import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import ConditionalWrapper from "./components/ConditionalWrapper";

export const metadata: Metadata = {
  title: "RiverWatts - Hydrokinetic Power Dashboard",
  description: "Monitor and manage your hydrokinetic power generation systems with RiverWatts cloud dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {/* Skip navigation link for keyboard users */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#014174] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:underline"
        >
          Skip to main content
        </a>
        <AuthProvider>
          <ConditionalWrapper>
            <div id="main-content">
              {children}
            </div>
          </ConditionalWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}