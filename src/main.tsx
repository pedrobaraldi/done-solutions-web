import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initAnalytics } from "./lib/analytics";
import { installTranslateGuard } from "./lib/translate-guard";
import "./i18n";
import "./styles/flags.css";
import "./index.css";

// Evita que o tradutor automático do navegador derrube a página.
installTranslateGuard();

// Retoma o Microsoft Clarity só se o visitante já tiver aceitado os cookies.
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
