import { getDatabase, push, ref, serverTimestamp } from "firebase/database";
import { firebaseApp, isFirebaseConfigured } from "./firebase";

export type ContactMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Os limites daqui devem acompanhar as regras em database.rules.json.
export const saveContactMessage = (data: ContactMessage) => {
  if (!isFirebaseConfigured) {
    return Promise.reject(new Error("Firebase não configurado: defina as variáveis VITE_FIREBASE_* no .env."));
  }

  return push(ref(getDatabase(firebaseApp), "messages"), {
    name: data.name.trim().slice(0, 100),
    email: data.email.trim().slice(0, 254),
    phone: data.phone.trim().slice(0, 30),
    message: data.message.trim().slice(0, 2000),
    createdAt: serverTimestamp(),
  });
};
