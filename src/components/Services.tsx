import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-block bg-highlight text-highlight-foreground font-display font-bold px-8 py-4 rounded-r-full text-lg uppercase tracking-wide mb-8 -ml-4 md:-ml-8">
            Assessoria e Consultoria em Comércio Internacional
          </div>

          {/* Main Services List */}
          <div className="space-y-3 mb-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <ChevronRight className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{service}</p>
              </motion.div>
            ))}
          </div>

          {/* Two Column Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Desembaraço Aduaneiro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                Desembaraço Aduaneiro
              </h3>
              <ul className="space-y-3">
                {desembaracoItems.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                    {item};
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Exportação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                Exportação
              </h3>
              <ul className="space-y-3">
                {exportacaoItems.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                    {item};
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