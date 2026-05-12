import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/MyProjects";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Marquee />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
