import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Read Firebase config from Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

// Check if valid Firebase configuration is provided
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== "your-api-key" &&
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== "your-project-id"
);

let app = null;
let auth = null;
let db = null;

if (isFirebaseConfigured) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    console.log("Firebase initialized successfully with cloud backend.");
  } catch (error) {
    console.warn("Firebase initialization error, fallback mode activated:", error);
  }
} else {
  console.info(
    "Aura Salon Notice: Firebase environment variables not detected. Running in seamless Local Demo Mode. Add .env credentials to connect live Firestore."
  );
}

export { app, auth, db };
