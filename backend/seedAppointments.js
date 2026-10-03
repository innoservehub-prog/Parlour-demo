import admin from 'firebase-admin';
import dotenv from 'dotenv';
import { readFileSync, existsSync } from 'fs';

dotenv.config();

/**
 * Script to seed sample appointments to live Firestore database if service account is provided.
 */
async function seedFirestore() {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT || './serviceAccountKey.json';

  if (!existsSync(serviceAccountPath)) {
    console.log("ℹ️  Note: serviceAccountKey.json not found in backend/ directory.");
    console.log("👉 To seed directly to live Firebase Cloud Firestore, place your Firebase Service Account JSON key here and run 'npm run seed'.");
    return;
  }

  const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const db = admin.firestore();

  const seedData = [
    {
      customerName: "Priya Sharma",
      phone: "9876543210",
      email: "priya.sharma@example.com",
      service: "Bridal Makeup",
      preferredDate: "2026-10-15",
      preferredTime: "10:00 AM",
      message: "Need bridal trial for wedding reception.",
      status: "Pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    },
    {
      customerName: "Ananya Deshmukh",
      phone: "9820123456",
      email: "ananya.d@example.com",
      service: "Hair Spa",
      preferredDate: "2026-10-06",
      preferredTime: "02:00 PM",
      message: "Dry hair treatment with steam.",
      status: "Confirmed",
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    },
    {
      customerName: "Rhea Kapoor",
      phone: "9811223344",
      email: "rhea.k@example.com",
      service: "Hydra Facial",
      preferredDate: "2026-10-04",
      preferredTime: "11:00 AM",
      message: "Preparing for pre-wedding shoot.",
      status: "Completed",
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    }
  ];

  console.log("Seeding appointments to Firestore...");
  for (const apt of seedData) {
    const docRef = await db.collection('appointments').add(apt);
    console.log(`✓ Seeded appointment with ID: ${docRef.id}`);
  }
  console.log("🎉 Seeding completed successfully!");
}

seedFirestore().catch(console.error);
