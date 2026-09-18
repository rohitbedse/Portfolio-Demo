import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Competencies from "@/components/Competencies";
import Journey from "@/components/Journey";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";

export default function Page() {
  return (
    <>
      <MouseSpotlight />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Competencies />
        <Journey />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
