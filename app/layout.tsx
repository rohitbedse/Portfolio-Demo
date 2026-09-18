import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rohit Bedse — ML & GenAI Engineer",
  description:
    "Portfolio of Rohit Bedse. ML pipelines, NLP, RAG systems, and multi-agent AI. 83% accuracy on 36K+ YouTube comments with LightGBM. Currently building AI systems at VigyanShaala International.",
  keywords: [
    "Rohit Bedse",
    "Machine Learning",
    "GenAI",
    "Data Science",
    "NLP",
    "RAG",
    "LangChain",
    "LangGraph",
    "Python",
    "MLflow",
    "AWS",
  ],
  authors: [{ name: "Rohit Bedse" }],
  creator: "Rohit Bedse",
  metadataBase: new URL("https://rohitbedse.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rohit Bedse — ML & GenAI Engineer",
    description:
      "ML pipelines, NLP, RAG systems, and multi-agent AI. 83% accuracy on 36K+ YouTube comments.",
    url: "https://rohitbedse.github.io/",
    siteName: "Rohit Bedse Portfolio",
    images: [
      {
        url: "/assets/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Rohit Bedse — ML & GenAI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Bedse — ML & GenAI Engineer",
    description:
      "ML pipelines, NLP, RAG systems, and multi-agent AI. 83% accuracy on 36K+ YouTube comments.",
    images: ["/assets/images/portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rohit Bedse",
              jobTitle: "ML & GenAI Engineer",
              url: "https://rohitbedse.github.io/",
              email: "rbedse81@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.linkedin.com/in/rohit-bedse-086b86262",
                "https://github.com/rohitbedse",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-surface text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
