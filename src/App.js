import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Projects from "./components/Project";
import Skills from "./components/Skills";

export default function App() {

  return (
    <div className="font-poppins leading-[1.6] text-textPrimary bg-bgPrimary transition-skin min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
