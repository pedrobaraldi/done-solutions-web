import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Anchor, Plane, MapPin } from "lucide-react";
import polvoOperacaoImage from "@/assets/polvo-operacao.png";
import { useTranslation } from "react-i18next";

const TAB_IDS = ["portos", "aeroportos", "fronteiras"] as const;
const TAB_ICONS = { portos: Anchor, aeroportos: Plane, fronteiras: MapPin };

const LOCATIONS: Record<string, string[]> = {
  portos: [
    "Imbituba – SC", "Itajaí – SC", "Itaqui – MA", "Manaus – AM",
    "Paranaguá – PR", "Rio de Janeiro – RJ", "Rio Grande – RS",
    "Salvador – BA", "Santos – SP", "São Francisco do Sul – SC",
    "Suape – PE", "Vila do Conde – PA",
  ],
  aeroportos: [
    "Guarulhos – SP", "Viracopos – SP", "Galeão – RJ",
    "Confins – MG", "Curitiba – PR", "Porto Alegre – RS",
    "Manaus – AM", "Recife – PE",
  ],
  fronteiras: [
    "Foz do Iguaçu – PR", "Uruguaiana – RS", "Santana do Livramento – RS",
    "Corumbá – MS", "Ponta Porã – MS", "Chuí – RS",
  ],
};

const Operations = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<typeof TAB_IDS[number]>("portos");

  const locations = LOCATIONS[activeTab];
  const Icon = TAB_ICONS[activeTab];

  return (
    <section id="operacao" className="py-20 md:py-24 lg:py-28">
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
            {TAB_IDS.map((id) => {
              const TabIcon = TAB_ICONS[id];
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-lg font-display font-semibold text-sm lg:text-base transition-all ${
                    activeTab === id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-accent/20 border border-border"
                  }`}
                >
                  <TabIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                  {t(`operations.tabs.${id}.label`)}
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-panel`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-4 relative min-h-[200px] lg:min-h-[360px] rounded-2xl overflow-hidden bg-primary text-primary-foreground p-6 lg:p-8 flex flex-col justify-end"
            >
              <Icon
                aria-hidden="true"
                className="absolute -top-6 -right-6 w-40 h-40 lg:w-52 lg:h-52 text-primary-foreground/10"
                strokeWidth={1}
              />
              <div className="relative">
                <p className="font-display font-bold text-6xl lg:text-7xl text-accent leading-none mb-2">
                  {locations.length}
                </p>
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2">
                  {t(`operations.tabs.${activeTab}.label`)}
                </h3>
                <p className="text-primary-foreground/80 text-sm lg:text-base leading-relaxed">
                  {t(`operations.tabs.${activeTab}.summary`)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`${activeTab}-list`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-8 bg-card rounded-2xl px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-8 border border-border"
          >
            <div className="flex items-center justify-between gap-3 mb-4 lg:mb-5 pb-3 border-b border-border">
              <p className="font-display font-semibold text-foreground text-sm lg:text-base">
                {t("operations.locaisLabel")}
              </p>
              <span className="text-muted-foreground text-xs lg:text-sm">
                {t("operations.activePontos", { count: locations.length })}
              </span>
            </div>

            <div className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
              {locations.map((location, index) => (
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
