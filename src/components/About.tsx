import { motion } from "framer-motion";
import { Ship, Warehouse, Plane } from "lucide-react";
import aboutContainers from "@/assets/about-containers.jpg";
import aboutWarehouse from "@/assets/about-warehouse.jpg";
import aboutAirfreight from "@/assets/about-airfreight.jpg";

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
    <section id="sobre" className="py-24 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-highlight font-display font-semibold text-sm mb-3">
              Quem Somos
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
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

        {/* Visual bridge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-primary"
        >

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
                  <item.icon className="w-6 h-6 text-accent mb-3" />
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
