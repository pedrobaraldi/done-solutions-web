import { motion } from "framer-motion";
import { Award, Users, Globe, Handshake, Ship, Warehouse, Plane } from "lucide-react";
import aboutContainers from "@/assets/about-containers.jpg";
import aboutWarehouse from "@/assets/about-warehouse.jpg";
import aboutAirfreight from "@/assets/about-airfreight.jpg";
import seaBackground from "@/assets/hero-shipping.jpg";

const stats = [
  { icon: Award, value: "500+", label: "Clientes Atendidos" },
  { icon: Users, value: "50+", label: "Países Atendidos" },
  { icon: Globe, value: "1000+", label: "Operações Realizadas" },
  { icon: Handshake, value: "100%", label: "Comprometimento" },
];

const highlights = [
  {
    icon: Ship,
    title: "Modal Marítimo",
    description: "Coordenação completa em portos e operações de contêiner.",
  },
  {
    icon: Warehouse,
    title: "Logística Aduaneira",
    description: "Armazenagem, documentação e follow-up em cada etapa.",
  },
  {
    icon: Plane,
    title: "Modal Aéreo",
    description: "Agilidade com suporte regulatório e rastreamento.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background -mt-1 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-highlight/10 text-highlight font-display font-semibold px-4 py-2 rounded-full text-sm uppercase tracking-widest mb-4">
              Quem Somos
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Conquistas no{" "}
              <span className="text-gradient-gold">Mercado Internacional</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos uma empresa de assessoria e consultoria em Comércio Exterior. A{" "}
                <strong className="text-foreground">Done Solutions</strong> possui eficiência,
                completa e qualificada estrutura em comércio internacional, com amplo conhecimento
                operacional, logístico, tributário e aduaneiro.
              </p>
              <p>
                Sempre fazendo a diferença no mercado do COMEX, com{" "}
                <strong className="text-foreground">honestidade, transparência</strong> e
                consolidando clientes ao redor do mundo com nossa excelência em atendimento por
                pessoas e para pessoas.
              </p>
              <p>
                Estamos preparados para planejar, orientar e detalhar soluções em operações diretas
                de <strong className="text-foreground">importação, exportação</strong> e operações
                para terceiros.
              </p>
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 grid-rows-2 gap-3 h-[340px] sm:h-[400px] lg:h-[440px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-7 row-span-2 relative overflow-hidden rounded-2xl"
            >
              <img
                src={aboutContainers}
                alt="Porto com navios e contêineres"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-5 relative overflow-hidden rounded-2xl"
            >
              <img
                src={aboutWarehouse}
                alt="Armazém logístico"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-5 relative overflow-hidden rounded-2xl"
            >
              <img
                src={aboutAirfreight}
                alt="Operação de frete aéreo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-5 md:p-6 shadow-card border border-border text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div className="font-display font-bold text-2xl md:text-3xl text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Visual bridge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <motion.img
              src={seaBackground}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
          </div>

          <div className="relative z-10 px-6 py-10 md:px-12 md:py-14">
            <div className="max-w-xl mb-8 md:mb-10">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-3">
                Estrutura completa em cada etapa
              </h3>
              <p className="text-primary-foreground/85 leading-relaxed">
                Do porto ao armazém, do frete aéreo à documentação — presença operacional em toda a
                cadeia do comércio exterior.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-primary-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
