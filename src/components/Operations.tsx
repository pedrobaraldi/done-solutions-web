import { motion } from "framer-motion";
import { useState } from "react";
import { Anchor, Plane, MapPin } from "lucide-react";
import polvoOperacaoImage from "@/assets/polvo-operacao.png";

const tabs = [
  {
    id: "portos",
    label: "Portos",
    icon: Anchor,
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
  const activeData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="operacao" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center md:justify-start"
        >
          <img 
            src={polvoOperacaoImage} 
            alt="Operação Done Solutions" 
            className="w-48 md:w-56 lg:w-64 h-auto object-contain"
          />
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-lg font-display font-semibold text-left transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-accent/20 border border-border"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {activeData?.locations.map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-highlight" />
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