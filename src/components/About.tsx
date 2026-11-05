import { motion } from "framer-motion";
import { Ship, Warehouse, Plane } from "lucide-react";
import aboutContainers from "@/assets/about-containers.jpg";
import aboutWarehouse from "@/assets/about-warehouse.jpg";
import aboutAirfreight from "@/assets/about-airfreight.jpg";
import { useTranslation } from "react-i18next";

const ICONS = [Ship, Warehouse, Plane];

const About = () => {
  const { t } = useTranslation();
  const highlights = t("about.highlights", { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="sobre" className="py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-highlight font-display font-semibold text-sm mb-3">
              {t("about.label")}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              {t("about.heading")}{" "}
              <span className="text-gradient-gold">{t("about.headingHighlight")}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("about.p1").replace(/<strong>/g, '<strong class="text-foreground">') }} />
              <p dangerouslySetInnerHTML={{ __html: t("about.p2").replace(/<strong>/g, '<strong class="text-foreground">') }} />
              <p dangerouslySetInnerHTML={{ __html: t("about.p3").replace(/<strong>/g, '<strong class="text-foreground">') }} />
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
                alt={t("about.imgAlt1")}
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
                alt={t("about.imgAlt2")}
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
                alt={t("about.imgAlt3")}
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
                {t("about.bridge.heading")}
              </h3>
              <p className="text-primary-foreground/85 leading-relaxed">
                {t("about.bridge.description")}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {highlights.map((item, index) => {
                const Icon = ICONS[index];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-6 h-6 text-accent mb-3" />
                    <h4 className="font-display font-semibold text-primary-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary-foreground/75 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
