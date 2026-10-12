import { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import AiTools from '../sections/AiTools';
import BeyondWork from '../sections/BeyondWork';
import ResumeSection from '../sections/ResumeSection';
import Contact from '../sections/Contact';

export default function Home() {
  // Honour an initial #hash (deep link) once sections are mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AiTools />
      <BeyondWork />
      <ResumeSection />
      <Contact />
    </>
  );
}
