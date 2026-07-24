import StarsBackground from "./components/StarsBackground";
import CursorDot from "./components/CursorDot";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ImageModalProvider } from "./components/ImageModalContext";

export default function App() {
  return (
    <ImageModalProvider>
      <StarsBackground />
      <CursorDot />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Internships />
        <Contact />
      </main>
      <Footer />
    </ImageModalProvider>
  );
}
