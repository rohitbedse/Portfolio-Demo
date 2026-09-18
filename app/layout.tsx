import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Bedse | ML & GenAI Engineer",
  description: "Portfolio of Rohit Bedse, an ML and GenAI engineer specializing in predictive modeling and NLP.",
  keywords: ["Machine Learning", "GenAI", "Data Science", "NLP", "Rohit Bedse"],
  openGraph: {
    title: "Rohit Bedse | ML & GenAI Engineer",
    description: "Turning data into actionable insights through Machine Learning and GenAI.",
    url: "https://rohitbedse.github.io/",
    siteName: "Rohit Bedse Portfolio",
    images: [
      {
        url: "/assets/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Rohit Bedse Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
