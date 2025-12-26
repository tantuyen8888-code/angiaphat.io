import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
