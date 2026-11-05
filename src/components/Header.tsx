import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "pt", flag: "br", label: "Português" },
  { code: "en", flag: "us", label: "English" },
  { code: "es", flag: "es", label: "Español" },
  { code: "zh", flag: "cn", label: "中文" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0];
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const navItems = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.services"), href: "#servicos" },
    { label: t("nav.operation"), href: "#operacao" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
    setIsOpen(false);
  };

  return (
    <header
      className={`bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled ? "border-border shadow-md" : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Done Solutions" className={`w-auto transition-all duration-300 ${scrolled ? "h-10 md:h-11" : "h-12 md:h-14"}`} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display font-medium text-sm text-foreground hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}

            {/* Language switcher — desktop dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-sm font-display font-medium text-foreground hover:bg-secondary transition-colors"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <span className={`fi fi-${activeLang.flag} rounded-sm`} style={{ width: 20, height: 15, display: "inline-block" }} />
                <span>{activeLang.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-1 w-40 rounded-xl border border-border bg-card shadow-lg py-1 z-50 animate-fade-in">
                  {LANGS.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLang(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-display transition-colors hover:bg-secondary ${
                        i18n.language === lang.code ? "text-accent font-semibold" : "text-foreground"
                      }`}
                    >
                      <span className={`fi fi-${lang.flag} rounded-sm flex-shrink-0`} style={{ width: 20, height: 15, display: "inline-block" }} />
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#contato">
              <Button variant="gold" size="default">
                {t("nav.contact")}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display font-medium text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Language switcher mobile */}
              <div className="flex flex-col gap-1 border border-border rounded-xl overflow-hidden">
                {LANGS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm font-display transition-colors ${
                      i18n.language === lang.code
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className={`fi fi-${lang.flag} rounded-sm flex-shrink-0`} style={{ width: 20, height: 15, display: "inline-block" }} />
                    {lang.label}
                  </button>
                ))}
              </div>

              <a href="#contato" onClick={() => setIsOpen(false)}>
                <Button variant="gold" size="lg" className="w-full mt-2">
                  {t("nav.contact")}
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-accent"
      />
    </header>
  );
};

export default Header;
