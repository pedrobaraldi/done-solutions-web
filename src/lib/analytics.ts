import Clarity from "@microsoft/clarity";

const STORAGE_KEY = "cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export type ConsentChoice = "accepted" | "declined";

const clarityProjectId: string | undefined = import.meta.env.VITE_CLARITY_PROJECT_ID;

let started = false;

export const getConsent = (): ConsentChoice | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
};

const saveConsent = (choice: ConsentChoice) => {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Sem armazenamento disponível: a escolha vale só nesta visita.
  }
};

// O Clarity só é iniciado em produção e depois do consentimento.
const startClarity = () => {
  if (started || !import.meta.env.PROD || !clarityProjectId) return;
  Clarity.init(clarityProjectId);
  Clarity.consentV2({ ad_Storage: "denied", analytics_Storage: "granted" });
  started = true;
};

export const initAnalytics = () => {
  if (getConsent() === "accepted") startClarity();
};

export const acceptAnalytics = () => {
  saveConsent("accepted");
  startClarity();
};

export const declineAnalytics = () => {
  saveConsent("declined");
  if (started) Clarity.consent(false);
};

export const openCookieSettings = () => {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
};
