import { MotionConfig } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Operations from "@/components/Operations";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Operations />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      </div>
    </MotionConfig>
  );
};

export default Index;
