import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Anchor, Plane, MapPin } from "lucide-react";
import polvoOperacaoImage from "@/assets/polvo-operacao.png";
import aboutContainers from "@/assets/about-containers.jpg";
import aboutAirfreight from "@/assets/about-airfreight.jpg";
import aboutWarehouse from "@/assets/about-warehouse.jpg";

const tabs = [
  {
    id: "portos",
    label: "Portos",
    icon: Anchor,
    image: aboutContainers,
    imageAlt: "Operações portuárias com navios e contêineres",
    summary: "Cobertura nacional nos principais portos para importação e exportação marítima.",
    countLabel: "12 portos",
    locations: [
      "Imbituba – SC",
      "Itajaí – SC",
      "Itaqui – MA",
      "Manaus – AM",
      "Paranaguá – PR",
      "Rio de Janeiro – RJ",
      "Rio Grande – RS",
      "Salvador – BA",
      "Santos – SP",
      "São Francisco do Sul – SC",
      "Suape – PE",
      "Vila do Conde – PA",
    ],
  },
  {
    id: "aeroportos",
    label: "Aeroportos",
    icon: Plane,
    image: aboutAirfreight,
    imageAlt: "Operações de frete aéreo",
    summary: "Agilidade em cargas aéreas com suporte documental e follow-up diário.",
    countLabel: "8 aeroportos",
    locations: [
      "Guarulhos – SP",
      "Viracopos – SP",
      "Galeão – RJ",
      "Confins – MG",
      "Curitiba – PR",
      "Porto Alegre – RS",
      "Manaus – AM",
      "Recife – PE",
    ],
  },
  {
    id: "fronteiras",
    label: "Fronteiras",
    icon: MapPin,
    image: aboutWarehouse,
    imageAlt: "Operações em fronteiras e logística terrestre",
    summary: "Atuação nas principais passagens fronteiriças do Brasil.",
    countLabel: "6 fronteiras",
    locations: [
      "Foz do Iguaçu – PR",
      "Uruguaiana – RS",
      "Santana do Livramento – RS",
      "Corumbá – MS",
      "Ponta Porã – MS",
      "Chuí – RS",
    ],
  },
];

const Operations = () => {
  const [activeTab, setActiveTab] = useState("portos");
  const activeData = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section id="operacao" className="py-14 md:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 lg:gap-6 mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-end gap-4"
          >
            <img
              src={polvoOperacaoImage}
              alt="Operação Done Solutions"
              className="w-40 md:w-52 lg:w-64 h-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 lg:gap-3"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-lg font-display font-semibold text-sm lg:text-base transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-accent/20 border border-border"
                }`}
              >
                <tab.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-image`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-4 relative min-h-[220px] lg:min-h-[360px] rounded-2xl overflow-hidden"
            >
              <img
                src={activeData.image}
                alt={activeData.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <div className="inline-flex items-center gap-2 bg-gradient-gold text-primary font-display font-bold text-xs lg:text-sm px-3 py-1.5 rounded-md mb-3">
                  <activeData.icon className="w-3.5 h-3.5" />
                  {activeData.countLabel}
                </div>
                <h3 className="font-display font-bold text-xl lg:text-2xl text-primary-foreground mb-2">
                  {activeData.label}
                </h3>
                <p className="text-primary-foreground/85 text-sm lg:text-base leading-relaxed">
                  {activeData.summary}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`${activeTab}-list`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-8 bg-card rounded-2xl px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-8 shadow-card border border-border"
          >
            <div className="flex items-center justify-between gap-3 mb-4 lg:mb-5 pb-3 border-b border-border">
              <p className="font-display font-semibold text-foreground text-sm lg:text-base">
                Locais de operação
              </p>
              <span className="text-muted-foreground text-xs lg:text-sm">
                {activeData.locations.length} pontos ativos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
              {activeData.locations.map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/60 px-3 py-2.5 lg:py-3 text-foreground text-sm lg:text-[15px]"
                >
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-highlight flex-shrink-0" />
                  {location}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
