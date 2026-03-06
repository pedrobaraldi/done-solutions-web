import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const AGENCIES_PER_PAGE_MOBILE = 2;
const AGENCIES_PER_PAGE_DESKTOP = 3;
const CLIENTS_PER_PAGE_MOBILE = 2;
const CLIENTS_PER_PAGE_DESKTOP = 4;

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Atuação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl text-highlight mb-10">
            ATUAÇÃO
          </h2>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevAgencyPage}
              className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-6 z-10 w-8 h-8 md:w-10 md:h-10 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </button>
            
            <button
              onClick={nextAgencyPage}
              className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-6 z-10 w-8 h-8 md:w-10 md:h-10 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </button>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 px-8 md:px-16">
              {visibleAgencies.map((agency, index) => (
                <motion.div
                  key={`${agency.name}-${agencyPage}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-4 md:p-8 flex flex-col items-center justify-center min-h-[120px] md:min-h-[220px]"
                >
                  {agency.logo ? (
                    <img 
                      src={agency.logo} 
                      alt={`Logo ${agency.name}`}
                      className="max-h-24 md:max-h-44 w-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                      <span className="font-display font-bold text-sm text-muted-foreground text-center px-2">
                        {agency.name}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalAgencyPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setAgencyPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <h2 className="font-display font-bold text-3xl text-highlight mb-6">
            CLIENTES
          </h2>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevClientPage}
              className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-6 z-10 w-8 h-8 md:w-10 md:h-10 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </button>
            
            <button
              onClick={nextClientPage}
              className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-6 z-10 w-8 h-8 md:w-10 md:h-10 bg-card rounded-full shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-8 md:px-12">
              {visibleClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${clientPage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card rounded-xl p-3 md:p-4 shadow-card border border-border flex items-center justify-center aspect-[3/2] hover:shadow-lg transition-shadow"
                >
                  {client.logo ? (
                    <img
                      src={client.logo} 
                      alt={`Logo ${client.name}`}
                      className="max-h-28 max-w-[90%] object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                      <span className="font-display font-semibold text-sm text-muted-foreground text-center px-2">
                        {client.name}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalClientPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setClientPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
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