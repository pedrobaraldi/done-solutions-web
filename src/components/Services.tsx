import { motion } from "framer-motion";
import { ChevronRight, FileCheck, Ship, Plane } from "lucide-react";
import aboutWarehouse from "@/assets/about-warehouse.jpg";
import aboutContainers from "@/assets/about-containers.jpg";
import aboutAirfreight from "@/assets/about-airfreight.jpg";

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
    <section id="servicos" className="py-14 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-highlight text-highlight-foreground font-display font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-r-full text-base md:text-lg lg:text-xl uppercase tracking-wide mb-6 lg:mb-8 -ml-4 md:-ml-8">
            Assessoria e Consultoria em Comércio Internacional
          </div>

          {/* Visual intro */}
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 mb-8 lg:mb-10">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-2.5 lg:gap-y-3 content-start">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 lg:gap-3"
                >
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-highlight flex-shrink-0 mt-1" />
                  <p className="text-foreground text-sm md:text-base lg:text-[17px] leading-snug">
                    {service}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative min-h-[220px] lg:min-h-full rounded-2xl overflow-hidden"
            >
              <img
                src={aboutWarehouse}
                alt="Operação logística e consultoria em comércio exterior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <p className="font-display font-bold text-primary-foreground text-lg lg:text-xl mb-1">
                  Soluções sob medida
                </p>
                <p className="text-primary-foreground/85 text-sm lg:text-base leading-relaxed">
                  Planejamento operacional, tributário e aduaneiro com acompanhamento em cada etapa.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Focus chips */}
          <div className="grid sm:grid-cols-3 gap-3 lg:gap-4 mb-8 lg:mb-10">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-card/80 border border-border rounded-xl px-4 py-3.5 lg:px-5 lg:py-4"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                </div>
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
              className="bg-card rounded-xl overflow-hidden shadow-card border border-border"
            >
              <div className="relative h-36 lg:h-44 overflow-hidden">
                <img
                  src={aboutContainers}
                  alt="Desembaraço aduaneiro em porto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <h3 className="absolute bottom-3 left-5 lg:left-6 font-display font-bold text-lg lg:text-xl text-primary-foreground">
                  Desembaraço Aduaneiro
                </h3>
              </div>
              <ul className="space-y-1.5 lg:space-y-2.5 px-5 py-5 md:px-6 md:py-6 lg:px-8 lg:py-7">
                {desembaracoItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground text-sm lg:text-base leading-snug lg:leading-relaxed flex gap-2"
                  >
                    <span className="text-highlight mt-1.5 flex-shrink-0">•</span>
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
              className="bg-card rounded-xl overflow-hidden shadow-card border border-border"
            >
              <div className="relative h-36 lg:h-44 overflow-hidden">
                <img
                  src={aboutAirfreight}
                  alt="Operações de exportação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <h3 className="absolute bottom-3 left-5 lg:left-6 font-display font-bold text-lg lg:text-xl text-primary-foreground">
                  Exportação
                </h3>
              </div>
              <ul className="space-y-1.5 lg:space-y-2.5 px-5 py-5 md:px-6 md:py-6 lg:px-8 lg:py-7">
                {exportacaoItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground text-sm lg:text-base leading-snug lg:leading-relaxed flex gap-2"
                  >
                    <span className="text-highlight mt-1.5 flex-shrink-0">•</span>
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
