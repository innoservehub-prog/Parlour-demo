import { 
  collection, 
  addDoc, 
  onSnapshot, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../config/firebase';

const LOCAL_STORAGE_KEY = 'aura_salon_appointments_demo_data';

// Initial realistic seed appointments for demo and testing
const INITIAL_DEMO_APPOINTMENTS = [
  {
    id: "apt-101",
    customerName: "Priya Sharma",
    phone: "9876543210",
    email: "priya.sharma@example.com",
    service: "Bridal Makeup",
    preferredDate: "2026-10-15",
    preferredTime: "10:00 AM",
    message: "Need bridal trial and consultation for wedding reception.",
    status: "Pending",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "apt-102",
    customerName: "Ananya Deshmukh",
    phone: "9820123456",
    email: "ananya.d@example.com",
    service: "Hair Spa",
    preferredDate: "2026-10-06",
    preferredTime: "02:00 PM",
    message: "Suffering from post-travel hair dryness.",
    status: "Confirmed",
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: "apt-103",
    customerName: "Rhea Kapoor",
    phone: "9811223344",
    email: "rhea.k@example.com",
    service: "Hydra Facial",
    preferredDate: "2026-10-04",
    preferredTime: "11:00 AM",
    message: "Preparing for weekend photoshoot.",
    status: "Completed",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: "apt-104",
    customerName: "Sneha Patel",
    phone: "9988776655",
    email: "sneha.p@example.com",
    service: "Gel Polish & Nail Art",
    preferredDate: "2026-10-07",
    preferredTime: "04:00 PM",
    message: "Ombre French tip design preferred.",
    status: "Pending",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "apt-105",
    customerName: "Meera Sen",
    phone: "9765432109",
    email: "meera.sen@example.com",
    service: "Hair Cut & Blow Dry",
    preferredDate: "2026-10-03",
    preferredTime: "05:00 PM",
    message: "Short textured layers please.",
    status: "Cancelled",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
  {
    id: "apt-106",
    customerName: "Tanvi Verma",
    phone: "9833445566",
    email: "tanvi.v@example.com",
    service: "Royal Bridal Package",
    preferredDate: "2026-11-20",
    preferredTime: "10:00 AM",
    message: "Looking for full 2-day wedding and sangeet bridal package.",
    status: "Confirmed",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  }
];

// Helper to get local demo storage
const getLocalAppointments = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_DEMO_APPOINTMENTS));
      return INITIAL_DEMO_APPOINTMENTS;
    }
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_DEMO_APPOINTMENTS;
  }
};

const saveLocalAppointments = (appointments) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appointments));
    // Dispatch custom window event so listeners trigger in the same browser window
    window.dispatchEvent(new Event('aura_appointments_updated'));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
};

/**
 * Creates a new appointment in Firestore (or local fallback)
 */
export const createAppointment = async (appointmentData) => {
  const newAppointment = {
    customerName: appointmentData.customerName.trim(),
    phone: appointmentData.phone.trim(),
    email: appointmentData.email ? appointmentData.email.trim() : "",
    service: appointmentData.service,
    preferredDate: appointmentData.preferredDate,
    preferredTime: appointmentData.preferredTime,
    message: appointmentData.message ? appointmentData.message.trim() : "",
    status: "Pending", // Default status is always Pending
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'appointments'), {
        ...newAppointment,
        createdAt: serverTimestamp(),
      });
      return { id: docRef.id, ...newAppointment, success: true };
    } catch (error) {
      console.warn("Firestore write error, saving locally:", error);
    }
  }

  // Fallback: Local Demo Database
  const currentList = getLocalAppointments();
  const createdRecord = {
    ...newAppointment,
    id: `apt-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
  };
  saveLocalAppointments([createdRecord, ...currentList]);
  return { ...createdRecord, success: true };
};

/**
 * Real-time subscription to all appointments
 */
export const subscribeToAppointments = (callback) => {
  if (isFirebaseConfigured && db) {
    try {
      const q = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const appointments = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt || new Date().toISOString(),
          };
        });
        callback(appointments);
      }, (err) => {
        console.warn("Firestore snapshot error, falling back to local listener:", err);
        callback(getLocalAppointments());
      });

      return unsubscribe;
    } catch (error) {
      console.warn("Error setting up Firestore listener:", error);
    }
  }

  // Fallback: Local Storage listener
  const emitLocal = () => {
    callback(getLocalAppointments());
  };

  emitLocal();
  window.addEventListener('aura_appointments_updated', emitLocal);
  window.addEventListener('storage', emitLocal);

  return () => {
    window.removeEventListener('aura_appointments_updated', emitLocal);
    window.removeEventListener('storage', emitLocal);
  };
};

/**
 * Updates status of an appointment
 */
export const updateAppointmentStatus = async (id, newStatus) => {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'appointments', id);
      await updateDoc(docRef, {
        status: newStatus,
        updatedAt: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.warn("Firestore update error, updating locally:", error);
    }
  }

  const currentList = getLocalAppointments();
  const updated = currentList.map((apt) => 
    apt.id === id ? { ...apt, status: newStatus, updatedAt: new Date().toISOString() } : apt
  );
  saveLocalAppointments(updated);
  return true;
};

/**
 * Deletes an appointment
 */
export const deleteAppointment = async (id) => {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'appointments', id);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.warn("Firestore delete error, deleting locally:", error);
    }
  }

  const currentList = getLocalAppointments();
  const updated = currentList.filter((apt) => apt.id !== id);
  saveLocalAppointments(updated);
  return true;
};
