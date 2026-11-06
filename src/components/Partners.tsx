import { motion } from "framer-motion";
import { Building2, ShieldCheck, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

// Client logo imports
import staphytLogo from "@/assets/clients/staphyt.png";
import dazanLogo from "@/assets/clients/dazan.png";
import corrosionxLogo from "@/assets/clients/corrosionx.png";
import lapiendriusLogo from "@/assets/clients/lapiendrius.png";
import lessenceLogo from "@/assets/clients/lessence.png";
import progarLogo from "@/assets/clients/progar.png";
import alvoradaLogo from "@/assets/clients/alvorada.png";
import dagramasLogo from "@/assets/clients/dagramas.png";
import korinLogo from "@/assets/clients/korin.png";
import helenaLogo from "@/assets/clients/helena.png";
import nutrisafraLogo from "@/assets/clients/nutrisafra.png";
import grupoVignaBrasilLogo from "@/assets/clients/grupo-vigna-brasil.png";
import oxiquimicaLogo from "@/assets/clients/oxiquimica.png";
import agroAmazoniaLogo from "@/assets/clients/agro-amazonia.png";
import agrivalleLogo from "@/assets/clients/agrivalle.png";
import agriConnectionLogo from "@/assets/clients/agri-connection.png";
import sciAgroLogo from "@/assets/clients/sci-agro.png";
import braLogo from "@/assets/clients/bra.png";
import indofilLogo from "@/assets/clients/indofil.png";
import mezferLogo from "@/assets/clients/mezfer.png";
import aspebioLogo from "@/assets/clients/aspebio.png";
import yononLogo from "@/assets/clients/yonon.png";
import agritekLogo from "@/assets/clients/agritek.png";
import agroLimudaLogo from "@/assets/clients/agro-limuda.png";
import agroquimaLogo from "@/assets/clients/agroquima.png";
import globachemLogo from "@/assets/clients/globachem.png";
import inovagriLogo from "@/assets/clients/inovagri.png";
import jubailiLogo from "@/assets/clients/jubaili.png";
import parceagroLogo from "@/assets/clients/parceagro.png";
import nanofertLogo from "@/assets/clients/nanofert.png";

// Agency logo imports
import receitaFederalLogo from "@/assets/agencies/receita-federal.jpg";
import mapaLogo from "@/assets/agencies/mapa.jpg";
import ibamaLogo from "@/assets/agencies/ibama.jpg";
import dfpcLogo from "@/assets/agencies/dfpc.jpg";
import anvisaLogo from "@/assets/agencies/anvisa.jpg";
import decexLogo from "@/assets/agencies/decex.jpg";
import policiaFederalLogo from "@/assets/agencies/policia-federal.jpg";
import anpLogo from "@/assets/agencies/anp.jpg";
import inmetroLogo from "@/assets/agencies/inmetro.jpg";

// Agency logos with actual images
const agencies = [
  { name: "DECEX", logo: decexLogo },
  { name: "ANVISA", logo: anvisaLogo },
  { name: "DFPC", logo: dfpcLogo },
  { name: "IBAMA", logo: ibamaLogo },
  { name: "MAPA", logo: mapaLogo },
  { name: "INMETRO", logo: inmetroLogo },
  { name: "ANP", logo: anpLogo },
  { name: "RECEITA FEDERAL", logo: receitaFederalLogo },
  { name: "POLÍCIA FEDERAL", logo: policiaFederalLogo },
];

// Client logos with 600x400 dimension images
const clients = [
  { name: "Staphyt", logo: staphytLogo },
  { name: "Dazan", logo: dazanLogo },
  { name: "CorrosionX", logo: corrosionxLogo },
  { name: "Lapiendrius", logo: lapiendriusLogo },
  { name: "L'essence", logo: lessenceLogo },
  { name: "Pro.Gar", logo: progarLogo },
  { name: "Agrícola Alvorada", logo: alvoradaLogo },
  { name: "Dagramas", logo: dagramasLogo },
  { name: "Korin", logo: korinLogo },
  { name: "Helena", logo: helenaLogo },
  { name: "Nutrisafra", logo: nutrisafraLogo },
  { name: "Grupo Vigna Brasil", logo: grupoVignaBrasilLogo },
  { name: "Oxiquímica", logo: oxiquimicaLogo },
  { name: "Agro Amazônia", logo: agroAmazoniaLogo },
  { name: "Agrivalle", logo: agrivalleLogo },
  { name: "Agri Connection", logo: agriConnectionLogo },
  { name: "Sci-Agro", logo: sciAgroLogo },
  { name: "BRA Agroquímica", logo: braLogo },
  { name: "Indofil", logo: indofilLogo },
  { name: "Mezfer Brasil", logo: mezferLogo },
  { name: "Aspebio", logo: aspebioLogo },
  { name: "Yonon", logo: yononLogo },
  { name: "Concept Agritek", logo: agritekLogo },
  { name: "Limuda", logo: agroLimudaLogo },
  { name: "Agroquima", logo: agroquimaLogo },
  { name: "Globachem do Brasil", logo: globachemLogo },
  { name: "Inovagri", logo: inovagriLogo },
  { name: "Jubaili", logo: jubailiLogo },
  { name: "Parceragro", logo: parceagroLogo },
  { name: "Nanofert", logo: nanofertLogo },
  { name: "Tecnomyl" },
  { name: "SAS (Sustainable Agro Solutions)" },
  { name: "NUFARM" },
  { name: "Syntech" },
  { name: "INDORAMA" },
  { name: "Gaia" },
  { name: "Agrosolutions" },
  { name: "LEMMA" },
];

type Logo = { name: string; logo?: string };

type LogoMarqueeProps = {
  items: Logo[];
  label: string;
  variant: "agency" | "client";
  secondsPerItem: number;
  reverse?: boolean;
};

// Faixa contínua: a lista é repetida duas vezes e a animação anda metade do caminho,
// então o fim emenda no começo e nunca sobra espaço vazio.
const LogoMarquee = ({ items, label, variant, secondsPerItem, reverse = false }: LogoMarqueeProps) => {
  const isAgency = variant === "agency";

  return (
    <div className="marquee overflow-hidden" role="region" aria-label={label}>
      <div
        className="marquee-track flex w-max py-1"
        style={{
          animationDuration: `${items.length * secondsPerItem}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((item, index) => {
          const isCopy = index >= items.length;
          return (
            <div
              key={`${item.name}-${index}`}
              aria-hidden={isCopy || undefined}
              className={`shrink-0 mr-3 md:mr-4 lg:mr-5 rounded-xl border flex items-center justify-center transition-shadow hover:shadow-md ${
                isAgency
                  ? "bg-white border-border/60 p-3 md:p-5 w-32 h-24 md:w-44 md:h-32 lg:w-56 lg:h-40"
                  : "bg-card border-border p-3 md:p-4 w-32 md:w-40 lg:w-48 aspect-[3/2]"
              }`}
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={isCopy ? "" : `Logo ${item.name}`}
                  loading="lazy"
                  className={`w-full object-contain ${
                    isAgency ? "max-h-14 md:max-h-24 lg:max-h-32" : "max-h-14 md:max-h-16 lg:max-h-20"
                  }`}
                />
              ) : (
                <span className="font-display font-semibold text-xs md:text-sm text-muted-foreground text-center px-1">
                  {item.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CARD_ICONS = [Building2, ShieldCheck, Scale];

const Partners = () => {
  const { t } = useTranslation();
  const cards = t("partners.atuacao.cards", { returnObjects: true }) as { title: string; text: string }[];

  return (
    <section className="py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Atuação */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 lg:mb-14"
        >
          <div className="relative rounded-2xl overflow-hidden mb-6 lg:mb-8 bg-primary">
            <div className="relative z-10 px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-2 lg:mb-3">
                {t("partners.atuacao.title")}
              </h2>
              <p className="text-primary-foreground/90 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-5 lg:mb-6">
                {t("partners.atuacao.description")}
              </p>
              <div className="grid sm:grid-cols-3 gap-3 lg:gap-4">
                {cards.map((item, index) => {
                  const CardIcon = CARD_ICONS[index];
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 px-3.5 py-3 lg:px-4 lg:py-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                        <CardIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-primary-foreground text-sm lg:text-base">
                          {item.title}
                        </p>
                        <p className="text-primary-foreground/75 text-xs lg:text-sm leading-snug mt-0.5">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <LogoMarquee items={agencies} label={t("partners.agenciesLabel")} variant="agency" secondsPerItem={5} reverse />
        </motion.div>

        {/* Clientes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-highlight mb-5 lg:mb-8">
            {t("partners.clientsTitle")}
          </h2>

          <LogoMarquee items={clients} label={t("partners.clientsLabel")} variant="client" secondsPerItem={3} reverse />
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;