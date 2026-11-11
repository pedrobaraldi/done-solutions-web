import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import zh from "./locales/zh.json";

export const SUPPORTED_LANGS = ["pt", "en", "es", "zh"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

// Código usado no atributo <html lang>: ajuda o navegador a escolher fontes,
// hifenização e a não oferecer tradução automática à toa.
const HTML_LANG: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  zh: "zh-CN",
};

// Navegadores e celulares informam o idioma de jeitos diferentes:
// "pt-BR", "pt_br", "zh-Hans-CN", "zh-TW", "EN-us"... Tudo vira só o idioma base.
const normalizeLang = (code?: string | null): string => {
  if (!code) return "";
  return code.trim().toLowerCase().split(/[-_]/)[0];
};

export const isSupportedLang = (code?: string | null): code is Lang =>
  (SUPPORTED_LANGS as readonly string[]).includes(normalizeLang(code));

// Idioma atual já normalizado, para marcar o botão/bandeira certos.
export const currentLang = (): Lang => {
  const code = normalizeLang(i18n.resolvedLanguage || i18n.language);
  return isSupportedLang(code) ? (code as Lang) : "pt";
};

const applyDocumentLang = (code: string) => {
  if (typeof document === "undefined") return;
  const lang = isSupportedLang(code) ? (normalizeLang(code) as Lang) : "pt";
  const html = document.documentElement;
  html.setAttribute("lang", HTML_LANG[lang]);
  html.setAttribute("dir", "ltr");
};

i18n.on("languageChanged", applyDocumentLang);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
      zh: { translation: zh },
    },
    // Idioma não suportado (francês, alemão...) cai no inglês; chave faltando cai no português.
    fallbackLng: { pt: ["pt"], default: ["en", "pt"] },
    supportedLngs: [...SUPPORTED_LANGS],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    cleanCode: true,
    // Recursos já vêm no bundle: inicializa de forma síncrona, sem tela piscando.
    initAsync: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    detection: {
      // ?lang=en no link > escolha salva > idioma do navegador/celular
      order: ["querystring", "localStorage", "cookie", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "i18n-lang",
      lookupCookie: "i18n-lang",
      // Safari (ITP) e modo anônimo podem apagar/bloquear o localStorage; o cookie é reserva.
      caches: ["localStorage", "cookie"],
      cookieMinutes: 60 * 24 * 365,
      cookieOptions: { path: "/", sameSite: "lax" },
      convertDetectedLanguage: (lng: string) => normalizeLang(lng),
    },
  });

applyDocumentLang(i18n.resolvedLanguage || i18n.language);

export default i18n;
