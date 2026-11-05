import { motion } from "framer-motion";
import { ChevronRight, FileCheck, Ship, Plane } from "lucide-react";

const mainServices = [
  "Obtenção de licenças",
  "Regime Especial de Drawback e seus Atos Concessórios",
  "Orientação para registros em órgãos reguladores",
  "Classificação tarifária e planejamento tributário",
  "Consultoria em Leis, Decretos, Portarias, Instruções Normativas e Resoluções nas operações de Comércio Internacional",
  "Habilitação de Radar e suas alterações",
  "Gerenciamento e supervisão dos processos administrativos",
];

const desembaracoItems = [
  "Análise de classificação fiscal (NCM), isenções, suspensões e reduções tributárias",
  "Conferência e orientação documental",
  "Consulta ao tratamento administrativo para elaboração e emissão de licença de importação (LI)",
  "Cotações de fretes internacionais aéreos, marítimos e rodoviários",
  "Coordenação logística de armazenamento alfandegado",
  "Estruturação de custo para análise financeira da operação total",
  "Emissão de Declaração de Entreposto Aduaneiro (DA)",
  "Emissão de Declaração de Importação (DI)",
  "Emissão de draft de notas fiscais de importação",
  "Cotações de fretes nacionais",
  "Rastreamento dos processos e follow-ups diários",
];

const exportacaoItems = [
  "Conferência e orientação documental",
  "Cumprimento dos tratamentos administrativos junto aos órgãos anuentes",
  "Emissão de Declaração Única de Exportação (DU-E)",
  "Emissão de Certificado de Origem",
  "Emissão de Certificado Fitossanitário",
  "Certificado de CNCA (Conselho Nacional de Carregadores da Angola)",
  "Estruturação de custo para análise financeira da operação total",
  "Acompanhamento do embarque e cumprimento do deadline",
  "Cotações de fretes internacionais aéreos, marítimos e rodoviários",
  "Emissão de draft de notas fiscais de exportação",
  "Rastreamento dos processos e follow-ups diários",
];

const focusAreas = [
  {
    icon: FileCheck,
    title: "Consultoria regulatória",
    description: "Licenças, Radar, Drawback e órgãos anuentes.",
  },
  {
    icon: Ship,
    title: "Importação completa",
    description: "Do planejamento tributário ao desembaraço.",
  },
  {
    icon: Plane,
    title: "Exportação ágil",
    description: "DU-E, certificados e acompanhamento de embarque.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-24 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground max-w-3xl leading-tight mb-10 lg:mb-14">
            Assessoria e Consultoria em Comércio Internacional
          </h2>

          {/* Visual intro */}
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 mb-12 lg:mb-16">
            <div className="lg:col-span-12 bg-card border border-border rounded-xl p-5 lg:p-6 grid md:grid-cols-2 gap-x-10 gap-y-2.5 content-start">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2.5"
                >
                  <ChevronRight className="w-4 h-4 text-highlight flex-shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm leading-snug">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Focus chips */}
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5 mb-12 lg:mb-16">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-4 lg:px-5 lg:py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <area.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm lg:text-base">
                    {area.title}
                  </h4>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-snug mt-0.5">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden border border-border transition-shadow duration-300 hover:shadow-card"
            >
              <div className="flex items-center gap-3 px-5 pt-6 md:px-6 lg:px-8 lg:pt-8">
                <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Ship className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg lg:text-xl text-foreground">
                  Desembaraço Aduaneiro
                </h3>
              </div>
              <ul className="space-y-2 lg:space-y-3 px-5 pt-4 pb-5 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
                {desembaracoItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground text-sm lg:text-base leading-snug lg:leading-relaxed flex gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                    <span>{item};</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden border border-border transition-shadow duration-300 hover:shadow-card"
            >
              <div className="flex items-center gap-3 px-5 pt-6 md:px-6 lg:px-8 lg:pt-8">
                <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg lg:text-xl text-foreground">
                  Exportação
                </h3>
              </div>
              <ul className="space-y-2 lg:space-y-3 px-5 pt-4 pb-5 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
                {exportacaoItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground text-sm lg:text-base leading-snug lg:leading-relaxed flex gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                    <span>{item};</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
