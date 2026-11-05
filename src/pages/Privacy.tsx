import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { openCookieSettings } from "@/lib/analytics";

const CONTACT_EMAIL = "contato@donesolucoes.com.br";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Privacy = () => {
  useEffect(() => {
    document.title = "Política de Privacidade | Done Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Done Solutions" className="h-12 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-display font-medium text-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-14 md:py-20 max-w-3xl">
        <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Última atualização: 05/11/2026</p>

        <Section title="Quem somos">
          <p>
            A Done Solutions presta assessoria e consultoria em Comércio Exterior e é a
            responsável pelo tratamento dos dados pessoais coletados neste site, nos termos da Lei
            Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).
          </p>
          <p>
            Endereço: Rua Salem Bechara, 140 – Sala 908, Centro, Osasco – SP. Para qualquer
            assunto sobre privacidade, escreva para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="Quais dados coletamos">
          <p>
            <strong className="text-foreground">Formulário de contato:</strong> nome, e-mail,
            telefone e o conteúdo da mensagem que você enviar.
          </p>
          <p>
            <strong className="text-foreground">Dados de navegação (somente com seu aceite):</strong>{" "}
            páginas visitadas, cliques, rolagem, tipo de dispositivo, navegador, resolução de tela,
            localização aproximada e gravações da sua interação com o site, coletados pelo
            Microsoft Clarity.
          </p>
        </Section>

        <Section title="Para que usamos e com qual base legal">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Responder ao seu contato e elaborar propostas: procedimentos preliminares a um
              possível contrato, a pedido do titular (art. 7º, V, da LGPD).
            </li>
            <li>
              Entender e melhorar o uso do site com o Microsoft Clarity: seu consentimento (art.
              7º, I). Você pode recusá-lo ou retirá-lo a qualquer momento.
            </li>
          </ul>
        </Section>

        <Section title="Cookies">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-foreground text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Cookie / serviço</th>
                  <th className="px-4 py-3 font-semibold">Finalidade</th>
                  <th className="px-4 py-3 font-semibold">Quando é ativado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3">Microsoft Clarity (_clck, _clsk)</td>
                  <td className="px-4 py-3">Análise de uso e gravação de sessões</td>
                  <td className="px-4 py-3">Somente se você aceitar</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Armazenamento local (cookie-consent)</td>
                  <td className="px-4 py-3">Guardar a sua escolha sobre cookies</td>
                  <td className="px-4 py-3">Após você escolher</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pt-2">
            <Button variant="outline" onClick={openCookieSettings}>
              Alterar minha escolha sobre cookies
            </Button>
          </div>
        </Section>

        <Section title="Com quem compartilhamos">
          <p>
            Usamos prestadores que tratam dados em nosso nome: Microsoft (Clarity), o
            Google Firebase (banco de dados onde ficam guardados o nome, o e-mail, o telefone e a
            mensagem enviados pelo formulário) e o EmailJS, que nos avisa por e-mail. Esses
            serviços podem armazenar dados em servidores fora do Brasil. Não vendemos seus dados.
          </p>
        </Section>

        <Section title="Por quanto tempo guardamos">
          <p>
            As mensagens do formulário ficam guardadas no Firebase pelo tempo necessário para atender
            ao seu pedido e cumprir obrigações legais, e só a equipe da Done Solutions tem acesso
            a elas. Os dados de navegação seguem os prazos de retenção
            do Microsoft Clarity.
          </p>
        </Section>

        <Section title="Seus direitos">
          <p>
            Pela LGPD (art. 18), você pode pedir confirmação do tratamento, acesso, correção,
            anonimização ou eliminação dos dados, portabilidade, informações sobre
            compartilhamento e a revogação do consentimento. Envie o pedido para{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
            . Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </Section>

        <Section title="Mudanças nesta política">
          <p>
            Podemos atualizar esta política. A data no topo da página mostra a versão em vigor.
          </p>
        </Section>
      </main>
    </div>
  );
};

export default Privacy;
