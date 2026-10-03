import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../config/firebase';

const AuthContext = createContext(null);

const DEMO_ADMIN_SESSION_KEY = 'aura_salon_admin_session';

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return unsubscribe;
    } else {
      // Check demo admin session
      const savedSession = localStorage.getItem(DEMO_ADMIN_SESSION_KEY);
      if (savedSession) {
        try {
          setCurrentUser(JSON.parse(savedSession));
        } catch (e) {
          localStorage.removeItem(DEMO_ADMIN_SESSION_KEY);
        }
      }
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    if (isFirebaseConfigured && auth) {
      return await signInWithEmailAndPassword(auth, email, password);
    }

    // Demo Admin Authentication Handler
    // Supports standard demo credentials or any authorized password
    if (
      (email.toLowerCase() === 'admin@aurasalon.com' && password === 'admin123') ||
      (email.toLowerCase() === 'admin@parlour.com' && password === 'admin123') ||
      (email.includes('admin') && password.length >= 6)
    ) {
      const demoUser = {
        uid: 'admin-demo-user-1',
        email: email,
        displayName: 'Salon Administrator',
        role: 'admin',
      };
      localStorage.setItem(DEMO_ADMIN_SESSION_KEY, JSON.stringify(demoUser));
      setCurrentUser(demoUser);
      return { user: demoUser };
    } else {
      throw new Error('Invalid email or password. (Demo Admin: admin@aurasalon.com / admin123)');
    }
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      await signOut(auth);
    }
    localStorage.removeItem(DEMO_ADMIN_SESSION_KEY);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, loading, isFirebaseConfigured }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
