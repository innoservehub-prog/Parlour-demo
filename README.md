# Aura Luxury Salon & Bridal Parlour Web Platform

A complete, production-ready **Beauty Parlour / Salon Website** with a separate, secure **Admin Dashboard** designed with a premium feminine luxury aesthetic (blush pink, soft peach, cream, muted rose, dark burgundy, and gold accents).

---

## 🌟 Key Features

### 1. Customer-Facing Website
- **Home Page**: Hero with natural beauty tagline, 4 core highlight pillars, Featured Services with starting prices, Flat 20% OFF promotional banner, verified client testimonials, and booking CTA.
- **About Us**: Salon story, Mission, Vision, Core Values, Expert Team cards with experience badges, and Salon Ambience gallery.
- **Services & Price Menu**: Complete category-based pricing (Hair, Skin, Makeup, Nails, Waxing & Threading) with service durations, descriptions, and direct booking buttons.
- **Bridal Packages**: 4 structured bridal packages (*Classic ₹7,999*, *Premium ₹12,999*, *Royal ₹18,999*, *Special Occasion ₹4,999*) with automated pre-selection on the booking form, plus Custom Bridal Consultation.
- **Offers & Promotions**: Tabbed promotions (*All*, *Festive*, *Combo*, *Seasonal*) featuring discount cards with coupon codes and claim links.
- **Gallery**: Interactive portfolio with category filter pills (*Bridal*, *Party*, *Hair*, *Skin*, *Ambience*) and full-screen lightbox preview.
- **Appointment / Booking**: Comprehensive form with name, phone, email, service selection, date picker, time slots, and message. Features duplicate submission protection, loading states, Firestore cloud sync, and direct WhatsApp booking.
- **Contact & Location**: Live contact cards, direct WhatsApp chat card, Instagram follow card, embedded Google Maps, and inquiry message form.
- **Floating WhatsApp Button**: Global floating button with instant pre-filled appointment enquiry.

### 2. Admin Dashboard (`/admin/login` & `/admin/dashboard`)
- **Completely Hidden Access**: No admin links or hints on the public customer site.
- **Secure Authentication**: Firebase Auth + persistent session guards with protected routes.
- **Real-Time Database Sync**: Live Firestore listener (`onSnapshot`) updates the table immediately without page refresh when customers submit bookings.
- **Dynamic Metric Cards**: Calculates *Total Appointments*, *Pending*, *Confirmed*, *Completed*, and *Cancelled* in real time with 1-click filtering.
- **Advanced Search & Filtering**: Instant search by customer name, phone number, and service; date filters (Today, Upcoming, Custom date); and sorting (Newest, Oldest, Appointment Date).
- **Interactive Action Suite**:
  - **View Modal**: Full breakdown of customer details and requests.
  - **Confirm / Complete / Cancel**: Instant single-click status updates in Firestore.
  - **WhatsApp Direct Contact**: Opens WhatsApp with prefilled personalized message acknowledging or confirming the exact service, date, and time.
  - **Delete Action**: Safe deletion with confirmation modal dialog.
- **Mobile Responsive Cards**: Converts tables into compact cards on mobile and tablet screens.

---

## 🎨 Design System & Palette

- **Blush Pink**: `#FDF2F4`, `#FCE7EC`, `#F7C6D2`
- **Soft Peach**: `#FFF6F2`, `#FFF0E8`
- **Cream / Off-White**: `#FAF7F2`, `#F0ECE4`
- **Muted Rose**: `#C97A8B`, `#B76678`, `#8E384A`
- **Dark Burgundy**: `#4A1525`, `#2E0B16`, `#1F060E`
- **Subtle Gold Accents**: `#C99E38`, `#DFC278`, `#E8D39E`
- **Serif Typography**: *Playfair Display* & *Cormorant Garamond*
- **Sans-Serif Body**: *Plus Jakarta Sans*

---

## 🚀 Getting Started

### 1. Installation
```bash
cd frontend
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🔐 Admin Access Credentials

- **Admin Login URL**: `http://localhost:3000/admin/login`
- **Demo Email**: `admin@aurasalon.com`
- **Demo Password**: `admin123`
*(Or click the "Fill Demo Admin Credentials" button on the login screen).*

---

## ⚙️ Configuration & Customization

All salon information is centralized in a single configuration file:
`frontend/src/config/business.js`

You can customize:
- `name`, `tagline`, `phone`, `whatsappNumber`, `email`, `address`
- `workingHours`, `googleMapsEmbedUrl`, `instagramUrl`, `facebookUrl`
- `SERVICE_CATEGORIES` (Services, prices, descriptions)
- `BRIDAL_PACKAGES` (Packages, pricing, features)
- `OFFERS_DATA` (Discounts, coupon codes, validity)
- `TEAM_MEMBERS` (Staff bios, photos, roles)
- `GALLERY_ITEMS` & `TESTIMONIALS`

---

## ☁️ Firebase Setup (Optional for Live Production)

1. Create a project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email/Password provider).
3. Create a **Cloud Firestore** database.
4. Copy your web app configuration into `frontend/.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
5. Apply the Firestore security rules from `firestore.rules`.
