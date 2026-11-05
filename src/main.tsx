import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initAnalytics } from "./lib/analytics";
import "./index.css";

// Retoma o Microsoft Clarity só se o visitante já tiver aceitado os cookies.
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
