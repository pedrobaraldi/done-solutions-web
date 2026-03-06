import { motion } from "framer-motion";
import { Award, Users, Globe, Handshake } from "lucide-react";

const stats = [
  { icon: Award, value: "500+", label: "Clientes Atendidos" },
  { icon: Users, value: "50+", label: "Países Atendidos" },
  { icon: Globe, value: "1000+", label: "Operações Realizadas" },
  { icon: Handshake, value: "100%", label: "Comprometimento" },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background -mt-1">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
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
                Somos uma empresa de assessoria e consultoria em Comércio Exterior. A <strong className="text-foreground">Done Solutions</strong> possui eficiência, completa e qualificada estrutura em comércio internacional, com amplo conhecimento operacional, logístico, tributário e aduaneiro.
              </p>
              <p>
                Sempre fazendo a diferença no mercado do COMEX, com <strong className="text-foreground">honestidade, transparência</strong> e consolidando clientes ao redor do mundo com nossa excelência em atendimento por pessoas e para pessoas.
              </p>
              <p>
                Estamos preparados para planejar, orientar e detalhar soluções em operações diretas de <strong className="text-foreground">importação, exportação</strong> e operações para terceiros.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display font-bold text-3xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;