import { motion } from "framer-motion";
import { ChevronRight, FileCheck, Ship, Plane } from "lucide-react";
import { useTranslation } from "react-i18next";

const FOCUS_ICONS = [FileCheck, Ship, Plane];

const Services = () => {
  const { t } = useTranslation();
  const mainServices = t("services.mainServices", { returnObjects: true }) as string[];
  const focusAreas = t("services.focusAreas", { returnObjects: true }) as { title: string; description: string }[];
  const desembaracoItems = t("services.desembaraco.items", { returnObjects: true }) as string[];
  const exportItems = t("services.export.items", { returnObjects: true }) as string[];

  return (
    <section id="servicos" className="py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground max-w-3xl leading-tight mb-10 lg:mb-14">
            {t("services.heading")}
          </h2>

          {/* Main services list */}
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
                  <p className="text-foreground text-sm leading-snug">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Focus chips */}
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5 mb-12 lg:mb-16">
            {focusAreas.map((area, index) => {
              const Icon = FOCUS_ICONS[index];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-4 lg:px-5 lg:py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm lg:text-base">
                      {area.title}
                    </h4>
                    <p className="text-muted-foreground text-xs lg:text-sm leading-snug mt-0.5">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-8">
            {/* Customs Clearance */}
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
                  {t("services.desembaraco.title")}
                </h3>
              </div>
              <ul className="space-y-2 lg:space-y-3 px-5 pt-4 pb-5 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
                {desembaracoItems.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-sm lg:text-base leading-snug lg:leading-relaxed flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                    <span>{item};</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Export */}
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
                  {t("services.export.title")}
                </h3>
              </div>
              <ul className="space-y-2 lg:space-y-3 px-5 pt-4 pb-5 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
                {exportItems.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-sm lg:text-base leading-snug lg:leading-relaxed flex gap-2">
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
