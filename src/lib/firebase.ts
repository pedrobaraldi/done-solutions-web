import { initializeApp } from "firebase/app";

// Todos os valores vêm do .env (veja o .env.example). Nada fica fixo no código.
// Atenção: variáveis VITE_* são embutidas no site publicado, então o Firebase nunca é
// "secreto" no navegador. Quem protege os dados são as regras do Realtime Database.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

export const firebaseApp = initializeApp(firebaseConfig);
