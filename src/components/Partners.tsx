import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building2, ShieldCheck, Scale } from "lucide-react";
import aboutContainers from "@/assets/about-containers.jpg";

// Client logo imports
import staphytLogo from "@/assets/clients/staphyt.png";
import dazanLogo from "@/assets/clients/dazan.png";
import corrosionxLogo from "@/assets/clients/corrosionx.png";
import lapiendriusLogo from "@/assets/clients/lapiendrius.png";
import lessenceLogo from "@/assets/clients/lessence.png";
import progarLogo from "@/assets/clients/progar.png";
import usecorLogo from "@/assets/clients/usecor.png";
import alvoradaLogo from "@/assets/clients/alvorada.png";
import dagramasLogo from "@/assets/clients/dagramas.png";
import aquaLogo from "@/assets/clients/aqua.png";
import algaEnergyLogo from "@/assets/clients/alga-energy.png";
import korinLogo from "@/assets/clients/korin.png";
import fortracLogo from "@/assets/clients/fortrac.png";
import helenaLogo from "@/assets/clients/helena.png";
import nutrisafraLogo from "@/assets/clients/nutrisafra.png";
import grupoVignaBrasilLogo from "@/assets/clients/grupo-vigna-brasil.png";
import soloSagradoLogo from "@/assets/clients/solo-sagrado.png";
import oxiquimicaLogo from "@/assets/clients/oxiquimica.png";
import agroAmazoniaLogo from "@/assets/clients/agro-amazonia.png";
import nutrienLogo from "@/assets/clients/nutrien.png";
import agrivalleLogo from "@/assets/clients/agrivalle.png";
import agriConnectionLogo from "@/assets/clients/agri-connection.png";
import sciAgroLogo from "@/assets/clients/sci-agro.png";
import braLogo from "@/assets/clients/bra.png";
import indofilLogo from "@/assets/clients/indofil.png";
import mezferLogo from "@/assets/clients/mezfer.png";
import basfLogo from "@/assets/clients/basf.png";
import arghoLogo from "@/assets/clients/argho.png";
import aspebioLogo from "@/assets/clients/aspebio.png";
import yononLogo from "@/assets/clients/yonon.png";
import agritekLogo from "@/assets/clients/agritek.png";
import agroLimudaLogo from "@/assets/clients/agro-limuda.png";
import agroquimaLogo from "@/assets/clients/agroquima.png";
import globachemLogo from "@/assets/clients/globachem.png";
import inovagriLogo from "@/assets/clients/inovagri.png";
import jubailiLogo from "@/assets/clients/jubaili.png";
import nativaBioInsumosLogo from "@/assets/clients/nativa-bio-insumos.png";
import novachemLogo from "@/assets/clients/novachem.png";
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
  { name: "Usecor", logo: usecorLogo },
  { name: "Agrícola Alvorada", logo: alvoradaLogo },
  { name: "Dagramas", logo: dagramasLogo },
  { name: "Aqua", logo: aquaLogo },
  { name: "Alga Energy", logo: algaEnergyLogo },
  { name: "Korin", logo: korinLogo },
  { name: "Fortrac", logo: fortracLogo },
  { name: "Helena", logo: helenaLogo },
  { name: "Nutrisafra", logo: nutrisafraLogo },
  { name: "Grupo Vigna Brasil", logo: grupoVignaBrasilLogo },
  { name: "Solo Sagrado", logo: soloSagradoLogo },
  { name: "Oxiquímica", logo: oxiquimicaLogo },
  { name: "Agro Amazônia", logo: agroAmazoniaLogo },
  { name: "Nutrien", logo: nutrienLogo },
  { name: "Agrivalle", logo: agrivalleLogo },
  { name: "Agri Connection", logo: agriConnectionLogo },
  { name: "Sci-Agro", logo: sciAgroLogo },
  { name: "BRA Agroquímica", logo: braLogo },
  { name: "Indofil", logo: indofilLogo },
  { name: "Mezfer Brasil", logo: mezferLogo },
  { name: "BASF", logo: basfLogo },
  { name: "Argho Agrosciences", logo: arghoLogo },
  { name: "Aspebio", logo: aspebioLogo },
  { name: "Yonon", logo: yononLogo },
  { name: "Concept Agritek", logo: agritekLogo },
  { name: "Limuda", logo: agroLimudaLogo },
  { name: "Agroquima", logo: agroquimaLogo },
  { name: "Globachem do Brasil", logo: globachemLogo },
  { name: "Inovagri", logo: inovagriLogo },
  { name: "Jubaili", logo: jubailiLogo },
  { name: "Nativa Bio Insumos", logo: nativaBioInsumosLogo },
  { name: "NovaChem", logo: novachemLogo },
  { name: "Parceragro", logo: parceagroLogo },
  { name: "Nanofert", logo: nanofertLogo },
];

const AGENCIES_PER_PAGE_MOBILE = 3;
const AGENCIES_PER_PAGE_DESKTOP = 5;
const CLIENTS_PER_PAGE_MOBILE = 4;
const CLIENTS_PER_PAGE_DESKTOP = 6;

const Partners = () => {
  const [agencyPage, setAgencyPage] = useState(0);
  const [clientPage, setClientPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const agenciesPerPage = isMobile ? AGENCIES_PER_PAGE_MOBILE : AGENCIES_PER_PAGE_DESKTOP;
  const clientsPerPage = isMobile ? CLIENTS_PER_PAGE_MOBILE : CLIENTS_PER_PAGE_DESKTOP;

  const totalAgencyPages = Math.ceil(agencies.length / agenciesPerPage);
  const totalClientPages = Math.ceil(clients.length / clientsPerPage);

  const visibleAgencies = agencies.slice(
    agencyPage * agenciesPerPage,
    (agencyPage + 1) * agenciesPerPage
  );

  const visibleClients = clients.slice(
    clientPage * clientsPerPage,
    (clientPage + 1) * clientsPerPage
  );

  const nextAgencyPage = () => {
    setAgencyPage((prev) => (prev + 1) % totalAgencyPages);
  };

  const prevAgencyPage = () => {
    setAgencyPage((prev) => (prev - 1 + totalAgencyPages) % totalAgencyPages);
  };

  const nextClientPage = () => {
    setClientPage((prev) => (prev + 1) % totalClientPages);
  };

  const prevClientPage = () => {
    setClientPage((prev) => (prev - 1 + totalClientPages) % totalClientPages);
  };

  return (
    <section className="py-12 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Atuação */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 lg:mb-14"
        >
          <div className="relative rounded-2xl overflow-hidden mb-6 lg:mb-8">
            <img
              src={aboutContainers}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/80 to-primary/55" />
            <div className="relative z-10 px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-2 lg:mb-3">
                ATUAÇÃO
              </h2>
              <p className="text-primary-foreground/85 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-5 lg:mb-6">
                Experiência junto aos principais órgãos reguladores e anuentes do comércio exterior,
                com processos alinhados às exigências legais e operacionais.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 lg:gap-4">
                {[
                  {
                    icon: Building2,
                    title: "Órgãos anuentes",
                    text: "DECEX, ANVISA, MAPA, IBAMA e mais.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Conformidade",
                    text: "Tratamentos administrativos e licenças.",
                  },
                  {
                    icon: Scale,
                    title: "Regulação",
                    text: "Acompanhamento normativo em cada operação.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 px-3.5 py-3 lg:px-4 lg:py-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
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
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={prevAgencyPage}
              className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-5 z-10 w-8 h-8 lg:w-11 lg:h-11 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-foreground" />
            </button>

            <button
              onClick={nextAgencyPage}
              className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-5 z-10 w-8 h-8 lg:w-11 lg:h-11 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-foreground" />
            </button>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 lg:gap-6 px-8 md:px-12 lg:px-16">
              {visibleAgencies.map((agency, index) => (
                <motion.div
                  key={`${agency.name}-${agencyPage}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="bg-white rounded-xl p-3 md:p-5 lg:p-8 flex items-center justify-center min-h-[80px] md:min-h-[120px] lg:min-h-[180px] border border-border/60"
                >
                  {agency.logo ? (
                    <img
                      src={agency.logo}
                      alt={`Logo ${agency.name}`}
                      className="max-h-14 md:max-h-24 lg:max-h-36 w-full object-contain"
                    />
                  ) : (
                    <span className="font-display font-bold text-xs md:text-sm text-muted-foreground text-center px-1">
                      {agency.name}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-1.5 lg:gap-2 mt-4 lg:mt-6">
              {Array.from({ length: totalAgencyPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setAgencyPage(idx)}
                  className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-colors ${
                    idx === agencyPage ? "bg-highlight" : "bg-muted"
                  }`}
                  aria-label={`Página ${idx + 1}`}
                />
              ))}
            </div>
          </div>
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
            CLIENTES
          </h2>

          <div className="relative">
            <button
              onClick={prevClientPage}
              className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-5 z-10 w-8 h-8 lg:w-11 lg:h-11 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-foreground" />
            </button>

            <button
              onClick={nextClientPage}
              className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-5 z-10 w-8 h-8 lg:w-11 lg:h-11 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-foreground" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-5 px-8 md:px-12 lg:px-16">
              {visibleClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${clientPage}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  className="bg-card rounded-xl p-3 md:p-4 lg:p-5 shadow-card border border-border flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className="max-h-16 md:max-h-20 lg:max-h-24 max-w-[92%] object-contain"
                    />
                  ) : (
                    <span className="font-display font-semibold text-xs md:text-sm text-muted-foreground text-center px-1">
                      {client.name}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-1.5 lg:gap-2 mt-4 lg:mt-6">
              {Array.from({ length: totalClientPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setClientPage(idx)}
                  className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-colors ${
                    idx === clientPage ? "bg-highlight" : "bg-muted"
                  }`}
                  aria-label={`Página ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;