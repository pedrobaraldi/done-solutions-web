import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  acceptAnalytics,
  declineAnalytics,
  getConsent,
} from "@/lib/analytics";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (accept: boolean) => {
    if (accept) acceptAnalytics();
    else declineAnalytics();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 z-[60] md:right-auto md:max-w-md rounded-xl border border-border bg-card p-5 shadow-lg animate-fade-in"
    >
      <p className="font-display font-semibold text-foreground mb-1">Cookies e privacidade</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Usamos cookies de análise (Microsoft Clarity) para entender como o site é usado e
        melhorá-lo. Eles só são ativados se você aceitar. Saiba mais na{" "}
        <Link to="/privacidade" className="text-foreground underline underline-offset-2">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <Button variant="outline" className="sm:flex-1" onClick={() => choose(false)}>
          Recusar
        </Button>
        <Button variant="gold" className="sm:flex-1" onClick={() => choose(true)}>
          Aceitar cookies
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
