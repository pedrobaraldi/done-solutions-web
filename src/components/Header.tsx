import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

const SECTION_IDS = ["sobre", "servicos", "operacao"];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0];

  const navItems = [
    { label: t("nav.about"), href: "#sobre", id: "sobre" },
    { label: t("nav.services"), href: "#servicos", id: "servicos" },
    { label: t("nav.operation"), href: "#operacao", id: "operacao" },
  ];

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close lang dropdown on outside click
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
            <img
              src={logo}
              alt="Done Solutions"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-10 md:h-11" : "h-12 md:h-14"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative group flex items-center px-4 py-2 rounded-lg font-display font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                  {/* Animated gold underline for active item */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Language switcher — desktop dropdown */}
            <div ref={langRef} className="relative ml-3">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-display font-medium transition-all duration-200 ${
                  langOpen
                    ? "border-accent/50 bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/40 hover:bg-secondary hover:text-foreground"
                }`}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <span
                  className={`fi fi-${activeLang.flag} rounded-sm flex-shrink-0`}
                  style={{ width: 20, height: 15, display: "inline-block" }}
                />
                <span>{activeLang.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-card shadow-lg overflow-hidden z-50"
                >
                  {LANGS.map((lang) => {
                    const isSelected = i18n.language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => changeLang(lang.code)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-display transition-colors ${
                          isSelected
                            ? "bg-accent/10 text-accent font-semibold"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span
                          className={`fi fi-${lang.flag} rounded-sm flex-shrink-0`}
                          style={{ width: 20, height: 15, display: "inline-block" }}
                        />
                        <span className="flex-1 text-left">{lang.label}</span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </div>

            <a href="#contato" className="ml-3">
              <Button variant="gold" size="default">
                {t("nav.contact")}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden pt-3 pb-2"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-display font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-accent/10 text-accent border-l-2 border-accent"
                        : "text-foreground hover:bg-secondary hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Language switcher mobile */}
              <div className="mt-2 rounded-xl border border-border overflow-hidden">
                {LANGS.map((lang) => {
                  const isSelected = i18n.language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => changeLang(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-display transition-colors border-b border-border/40 last:border-b-0 ${
                        isSelected
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span
                        className={`fi fi-${lang.flag} rounded-sm flex-shrink-0`}
                        style={{ width: 20, height: 15, display: "inline-block" }}
                      />
                      <span className="flex-1 text-left">{lang.label}</span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              <a href="#contato" onClick={() => setIsOpen(false)} className="mt-2">
                <Button variant="gold" size="lg" className="w-full">
                  {t("nav.contact")}
                </Button>
              </a>
            </div>
          </motion.nav>
        )}
      </div>

    </header>
  );
};

export default Header;
