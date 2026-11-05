import { Link } from "react-router-dom";
import { openCookieSettings } from "@/lib/analytics";
import { Phone, Mail, MapPin, Linkedin, Instagram, MessageCircle, Facebook } from "lucide-react";
import logoBranca from "@/assets/logo-branca.png";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "pt", flag: "br" },
  { code: "en", flag: "us" },
  { code: "es", flag: "es" },
  { code: "zh", flag: "cn" },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logoBranca} alt="Done Solutions" className="h-16 w-auto" />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/donesolutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/done_solutions_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/donesolucoes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5511991361687" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.linkAbout")}</a></li>
              <li><a href="#servicos" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.linkServices")}</a></li>
              <li><a href="#operacao" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.linkOperation")}</a></li>
              <li><a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors">{t("footer.linkContact")}</a></li>
            </ul>
          </div>

          {/* Contact & Offices */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t("footer.office")}</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex items-center gap-2 text-primary-foreground mb-1">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-semibold">São Paulo</span>
                </div>
                <p className="text-primary-foreground/70 ml-6">Rua Salem Bechara, 140 – Sala 908</p>
                <p className="text-primary-foreground/70 ml-6">Centro, Osasco – SP</p>
              </div>
              <div className="pt-2">
                <a href="tel:+551145565442" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(11) 4556-5442</span>
                </a>
                <a href="https://wa.me/5511991361687" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mt-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>(11) 99136-1687</span>
                </a>
              </div>
              <div>
                <a href="mailto:contato@donesolucoes.com.br" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contato@donesolucoes.com.br</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright + links */}
            <div className="text-center sm:text-left">
              <p className="text-primary-foreground/50 text-sm">
                {t("footer.rights", { year: currentYear })}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-1 mt-2 text-sm">
                <Link to="/privacidade" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t("footer.privacy")}
                </Link>
                <button type="button" onClick={openCookieSettings} className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t("footer.cookies")}
                </button>
              </div>
            </div>

            {/* Language flags */}
            <div className="flex items-center gap-1.5">
              {LANGS.map((lang) => {
                const isActive = i18n.language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    aria-label={lang.code.toUpperCase()}
                    className={`w-7 h-7 rounded-full overflow-hidden border transition-all duration-200 ${
                      isActive
                        ? "border-accent/70 opacity-100"
                        : "border-primary-foreground/15 opacity-40 hover:opacity-70 hover:border-primary-foreground/30"
                    }`}
                  >
                    <span
                      className={`fi fi-${lang.flag} fis`}
                      style={{ width: "100%", height: "100%", display: "block", backgroundSize: "cover" }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
