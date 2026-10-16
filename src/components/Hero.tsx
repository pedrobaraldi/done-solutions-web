import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-shipping.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Navio cargueiro no oceano ao pôr do sol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/80 to-primary/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-gold px-5 md:px-6 py-2.5 md:py-2 rounded-full font-display font-semibold text-primary text-xs md:text-sm uppercase tracking-widest leading-snug">
              Excelência em Comércio Exterior
            </span>
          </motion.div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            A Mais Completa, Eficiente e Qualificada Estrutura em{" "}
            <span className="text-gradient-gold">Comércio Internacional</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl">
              Solicitar Orçamento
            </Button>
            <Button variant="heroOutline" size="xl">
              Conhecer Serviços
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;