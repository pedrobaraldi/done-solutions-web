import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { OPEN_COOKIE_SETTINGS_EVENT, acceptAnalytics, declineAnalytics, getConsent } from "@/lib/analytics";
import { useTranslation } from "react-i18next";

const CookieBanner = () => {
  const { t } = useTranslation();
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
      aria-label={t("cookie.title")}
      className="fixed bottom-4 left-4 right-4 z-[60] md:right-auto md:max-w-md rounded-xl border border-border bg-card p-5 shadow-lg animate-fade-in"
    >
      <p className="font-display font-semibold text-foreground mb-1">{t("cookie.title")}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {t("cookie.description")}{" "}
        <Link to="/privacidade" className="text-foreground underline underline-offset-2">
          {t("cookie.privacyLink")}
        </Link>
        .
      </p>
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <Button variant="outline" className="sm:flex-1" onClick={() => choose(false)}>
          {t("cookie.decline")}
        </Button>
        <Button variant="gold" className="sm:flex-1" onClick={() => choose(true)}>
          {t("cookie.accept")}
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
