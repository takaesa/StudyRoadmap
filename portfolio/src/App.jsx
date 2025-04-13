import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/service/Service";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/testimonials/Testimonial";
import { useSpring, useScroll, } from "motion/react";
import { motion } from "framer-motion"
import FadeInSection from "./FadeInSection";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "white",
          zIndex: '1001',
        }}
      />

      <Header />
      <main className="main">
        <FadeInSection>
          <Home></Home>
        </FadeInSection>
        <FadeInSection>
          <About></About>
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <Qualification />
        </FadeInSection>
        <FadeInSection>
          <Testimonial />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
        <FadeInSection>
          <Footer />
        </FadeInSection>
        <FadeInSection>
          <ScrollUp />
        </FadeInSection>
      </main>
    </>
  );
};

export default App;
