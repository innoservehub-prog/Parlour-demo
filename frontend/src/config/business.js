/**
 * Aura Luxury Salon & Bridal Studio - Business Configuration
 * Centralized configuration for all salon info, contact details, services, packages, and offers.
 * Easily replace these values for any client without touching component code.
 */

export const BUSINESS_INFO = {
  name: "Aura Luxury Salon & Bridal Studio",
  shortName: "Aura Salon",
  tagline: "Enhance Your Natural Beauty",
  subTagline: "Hair • Skin • Makeup • Bridal • Self Care",
  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210", // Without + or spaces for api.whatsapp.com
  whatsappDisplay: "+91 98765 43210",
  email: "contact@aurasalon.com",
  instagramHandle: "@auraluxurysalon",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
  address: "42, Rose Bloom Boulevard, Luxury Avenue, Bandra West, Mumbai 400050",
  workingHours: "Monday – Sunday: 10:00 AM – 8:00 PM",
  workingHoursShort: "Mon - Sun: 10:00 AM - 8:00 PM",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4410651639735!2d72.825838!3d19.043589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c941a5477001%3A0x7d28c89b33a55850!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  
  heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
  aboutInteriorImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
  aboutSecondaryImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
};

export const HIGHLIGHTS = [
  {
    id: 1,
    title: "Premium Services",
    description: "Using top global luxury brands like L'Oréal Professionnel, MAC, Kryolan & O3+.",
    icon: "Sparkles",
  },
  {
    id: 2,
    title: "Hygienic & Safe",
    description: "Hospital-grade sterilization of all tools and single-use disposable kits.",
    icon: "ShieldCheck",
  },
  {
    id: 3,
    title: "Expert Professionals",
    description: "Certified beauty therapists and celebrity makeup artists with 8+ years experience.",
    icon: "Award",
  },
  {
    id: 4,
    title: "Personalized Care",
    description: "Complimentary skin & hair consultation tailored precisely to your unique needs.",
    icon: "HeartHandshake",
  },
];

export const FEATURED_SERVICES = [
  {
    id: "hair-styling",
    name: "Hair Styling & Care",
    category: "hair",
    description: "Signature cuts, therapeutic hair spas, bespoke global colouring, and smoothing treatments.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    priceStarts: "₹299",
  },
  {
    id: "skin-care",
    name: "Skin Care & Facials",
    category: "skin",
    description: "Deep hydra-facials, anti-acne therapies, skin brightening, and restorative cleanups.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    priceStarts: "₹699",
  },
  {
    id: "makeup",
    name: "Luxury Makeup & Bridal",
    category: "makeup",
    description: "Flawless HD & airbrush bridal makeup, party glam, and traditional saree draping.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    priceStarts: "₹1,499",
  },
  {
    id: "nail-care",
    name: "Nail Care & Extensions",
    category: "nails",
    description: "Indulgent spa manicures, relaxing pedicures, chrome gel polish, and acrylic nail art.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
    priceStarts: "₹299",
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: "hair",
    name: "Hair Services",
    subtitle: "Precision cuts, luxurious therapies, and vibrant couture coloring.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Hair Cut – Women", price: 499, duration: "45 mins", desc: "Consultation, wash, signature cut & blow-dry setting." },
      { name: "Hair Cut – Men", price: 299, duration: "30 mins", desc: "Classic / textured cut with rinse and style styling." },
      { name: "Hair Styling / Blow Dry", price: 799, duration: "45 mins", desc: "Straight, curls, beach waves, or voluminous blowout." },
      { name: "Hair Spa (Hydrating/Protein)", price: 1499, duration: "60 mins", desc: "Deep conditioning, scalp massage & steam therapy." },
      { name: "Hair Smoothening / Keratin", price: 2999, duration: "180 mins", desc: "Frizz-free silky smooth hair lasting up to 6 months." },
      { name: "Hair Colour (Global / Highlights)", price: 2499, duration: "120 mins", desc: "Ammonia-free premium hair color with gloss shine." },
    ]
  },
  {
    id: "skin",
    name: "Skin Care",
    subtitle: "Nourishing facials designed to rejuvenate and illuminate your complexion.",
    image: "https://images.unsplash.com/photo-1512290900672-1f02e6a0d24e?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Basic Facial", price: 799, duration: "45 mins", desc: "Gentle cleanse, exfoliation, massage, and hydrating pack." },
      { name: "Anti-Acne Facial", price: 999, duration: "60 mins", desc: "Purifying treatment with tea tree and zinc soothing serum." },
      { name: "Brightening Facial (O3+ / Vitamin C)", price: 1299, duration: "60 mins", desc: "Radiance boost to reverse tan and even out pigmentation." },
      { name: "Anti-Ageing Facial", price: 1499, duration: "75 mins", desc: "Collagen infusion, lifting acupressure, and firming mask." },
      { name: "Hydra Facial", price: 1999, duration: "75 mins", desc: "Multi-step medical grade vacuum hydra-infusion & glow." },
      { name: "Face Cleanup", price: 699, duration: "30 mins", desc: "Quick scrub, steam, blackhead removal, and toner balance." },
    ]
  },
  {
    id: "makeup",
    name: "Makeup & Bridal",
    subtitle: "Artistry that accentuates your natural beauty for every special milestone.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Party Makeup", price: 1499, duration: "60 mins", desc: "Elegant evening makeup with lashes & standard hairstyling." },
      { name: "Engagement Makeup", price: 2499, duration: "90 mins", desc: "Glamorous contouring, eye artistry & hairdo." },
      { name: "HD Makeup", price: 3999, duration: "90 mins", desc: "High-definition camera ready finish with luxury cosmetics." },
      { name: "Airbrush Makeup", price: 5999, duration: "120 mins", desc: "Ultra-weightless, waterproof, 24-hour seamless finish." },
      { name: "Bridal Makeup", price: 4999, duration: "150 mins", desc: "Full bridal makeup, elaborate hair styling, draping & lashes." },
      { name: "Saree Draping & Styling", price: 699, duration: "30 mins", desc: "Classic, Gujarati, South Indian, or pleated modern drape." },
    ]
  },
  {
    id: "nails",
    name: "Nail Care",
    subtitle: "Polished hands and pampered feet with long-lasting artistic finishes.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Classic Manicure", price: 499, duration: "35 mins", desc: "Cuticle care, gentle scrub, soothing massage & regular polish." },
      { name: "Classic Pedicure", price: 699, duration: "45 mins", desc: "Foot soak, exfoliation, heel smoothing & nourishing cream." },
      { name: "Gel Polish Application", price: 999, duration: "45 mins", desc: "Chip-resistant UV cured gel polish lasting up to 3 weeks." },
      { name: "Nail Extensions (Acrylic / Gel)", price: 1499, duration: "90 mins", desc: "Full set extension with durable shaping and base coat." },
      { name: "Nail Art (Per Nail / Full Set)", price: 299, duration: "30 mins", desc: "Custom ombre, French tips, chrome shimmer, or stone accents." },
    ]
  },
  {
    id: "waxing-threading",
    name: "Waxing & Threading",
    subtitle: "Smooth, clean and painless grooming with hygienic strip & peel-off wax.",
    image: "https://images.unsplash.com/photo-1522337094346-290f26a0b500?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Eyebrow Threading", price: 80, duration: "15 mins", desc: "Precision arch shaping with antiseptic rose water touch." },
      { name: "Upper Lip Threading", price: 50, duration: "10 mins", desc: "Quick and gentle hair removal." },
      { name: "Full Face Threading / Waxing", price: 399, duration: "30 mins", desc: "Complete facial grooming with soothing aloe vera gel." },
      { name: "Half Arms Waxing (Rica / Honey)", price: 299, duration: "20 mins", desc: "Tan removal wax with pre and post-wax skin soothing lotion." },
      { name: "Full Arms Waxing (Rica / Honey)", price: 499, duration: "30 mins", desc: "Silky smooth arms including underarms." },
      { name: "Full Legs Waxing (Rica / Honey)", price: 699, duration: "40 mins", desc: "Deep exfoliation and smooth hair removal for both legs." },
    ]
  }
];

export const BRIDAL_PACKAGES = [
  {
    id: "classic-bridal",
    name: "Classic Bridal Package",
    price: 7999,
    priceDisplay: "₹7,999",
    tag: "Essential Bridal",
    description: "Ideal for the bride wanting timeless elegance with core pre-bridal and wedding day beauty.",
    features: [
      "HD Bridal Makeup for Wedding Day",
      "Bridal Hair Styling & Floral Placement",
      "Saree / Lehenga Draping & Pinning",
      "Eyelashes & Contact Lens Assistance",
      "Full Pre-Bridal Glow Facial",
      "Standard Manicure & Pedicure",
    ],
    highlighted: false,
  },
  {
    id: "premium-bridal",
    name: "Premium Bridal Package",
    price: 12999,
    priceDisplay: "₹12,999",
    tag: "Most Popular",
    description: "Comprehensive luxury package covering pre-bridal rejuvenation and wedding day radiance.",
    features: [
      "Signature HD / Airbrush Bridal Makeup",
      "Intricate Bridal Hair Artistry & Styling",
      "Luxury Pre-Bridal Hydra Gold Facial",
      "Full Body Rica Waxing & Polishing",
      "Spa Manicure & Deluxe Spa Pedicure",
      "Pre-Wedding Look Consultation Session",
      "Complimentary Makeup for 1 Family Member",
    ],
    highlighted: true,
  },
  {
    id: "royal-bridal",
    name: "Royal Bridal Package",
    price: 18999,
    priceDisplay: "₹18,999",
    tag: "Ultimate Luxury",
    description: "An opulent multi-day experience for the bride who wants flawless beauty for all wedding ceremonies.",
    features: [
      "2 Main Functions: Engagement/Sangeet + Wedding Makeup",
      "Premium Airbrush HD Makeup & 3D Lash Enhancements",
      "Advanced 7-Step Radiant Pre-Bridal Facial Session",
      "Full Body Scrub, Polishing & Luxury Oil Massage",
      "Gel Nail Extensions & Bridal Nail Art",
      "Full Hair Spa & Nourishing Scalp Therapy",
      "Complimentary Touch-up Kit for the Wedding Night",
      "Priority On-Location / Venue Availability Option",
    ],
    highlighted: false,
  },
  {
    id: "special-occasion",
    name: "Special Occasion Makeup",
    price: 4999,
    priceDisplay: "₹4,999",
    tag: "Bridesmaids & Reception",
    description: "Tailored for reception nights, bridesmaids, sangeet parties, and festive celebrations.",
    features: [
      "High-Definition Glamour Makeup",
      "Designer Hairdo (Buns, Hollywood Waves, Braids)",
      "Premium Lashes & Highlighter Accent",
      "Dupatta / Saree Draping",
      "Mini Facial Glow Prep",
    ],
    highlighted: false,
  }
];

export const BRIDAL_FEATURES = [
  {
    title: "Premium Products",
    description: "Internationally renowned brands (MAC, Huda Beauty, Kryolan, NARS) safe for all skin types.",
    icon: "Sparkles",
  },
  {
    title: "Personalized Consultation",
    description: "One-on-one session to design looks complementing your jewellery, lehenga, and skin tone.",
    icon: "UserCheck",
  },
  {
    title: "Trial Session",
    description: "Pre-wedding hair & makeup trial to test shades and lighting before the grand day.",
    icon: "Palette",
  },
  {
    title: "On-Location Service",
    description: "Our dedicated bridal glam team can travel directly to your hotel or wedding venue.",
    icon: "MapPin",
  },
];

export const OFFERS_DATA = [
  {
    id: "flat-20",
    category: "all",
    title: "FLAT 20% OFF",
    subtitle: "On All Salon Services",
    code: "BEAUTY20",
    description: "Enjoy 20% discount on all standalone hair, skin, nail, and grooming services this month.",
    validity: "Valid till end of month",
    badge: "Limited Time",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "bridal-10",
    category: "festive",
    title: "Bridal Special 10% OFF",
    subtitle: "On Premium & Royal Bridal Packages",
    code: "BRIDAL10",
    description: "Book your wedding package 30 days in advance and receive a flat 10% instant rebate + free trial.",
    validity: "For upcoming wedding season",
    badge: "Bridal Exclusive",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "festive-glow",
    category: "festive",
    title: "Festive Glow Offer",
    subtitle: "Brightening Facial + Manicure + Threading",
    code: "GLOWFEST",
    description: "Complete festive makeover bundle at just ₹1,699 (Original ₹2,200). Shine radiant at every celebration.",
    validity: "Valid on all festival weeks",
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "spa-facial-combo",
    category: "combo",
    title: "Hair Spa + Facial Combo",
    subtitle: "Deep Scalp Nourishment & Hydra Facial",
    code: "RELAX2IN1",
    description: "Revitalize from head to toe with our luxury L'Oréal hair spa paired with customized hydrating facial.",
    validity: "Weekdays Monday – Thursday",
    badge: "Combo Deal",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "refer-earn",
    category: "seasonal",
    title: "Refer & Earn",
    subtitle: "₹300 Salon Voucher for Both",
    code: "FRIENDS300",
    description: "Invite your friends! When they visit for their first service, both of you receive a ₹300 beauty credit.",
    validity: "Always active",
    badge: "Community",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "first-visit",
    category: "seasonal",
    title: "First Visit 15% OFF",
    subtitle: "Warm Welcome to Aura Salon",
    code: "WELCOME15",
    description: "First time at Aura? Enjoy 15% off on any hair styling or facial service of your choice.",
    validity: "For new clients only",
    badge: "New Guest",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "bridal",
    categoryName: "Bridal Makeup",
    title: "Royal North Indian Bridal Glamour",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop",
    caption: "HD finish with traditional red lehenga, matte eyes and soft rose lips.",
  },
  {
    id: 2,
    category: "hair",
    categoryName: "Hair Styles",
    title: "Caramel Balayage & Soft Waves",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    caption: "Seamless hand-painted balayage with high-gloss Keratin shine.",
  },
  {
    id: 3,
    category: "party",
    categoryName: "Party Makeup",
    title: "Smokey Rose Cocktail Glam",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    caption: "Dewy glass skin, dramatic winged eyes, and Hollywood curls.",
  },
  {
    id: 4,
    category: "skin",
    categoryName: "Skin Care",
    title: "Hydra Oxygen Infusion Glow",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    caption: "Post-hydra facial glow with clear, plumped and refreshed skin texture.",
  },
  {
    id: 5,
    category: "ambience",
    categoryName: "Salon Ambience",
    title: "Luxury Styling Station & Warm Lighting",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
    caption: "A calming oasis designed with plush pink velour and warm golden mirrors.",
  },
  {
    id: 6,
    category: "bridal",
    categoryName: "Bridal Makeup",
    title: "Contemporary Minimalist Bridal Look",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    caption: "Subtle pastel bridal makeup with soft champagne shimmer.",
  },
  {
    id: 7,
    category: "hair",
    categoryName: "Hair Styles",
    title: "Floral Textured Bridal Braid",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    caption: "Intricate mermaid braid accented with fresh baby's breath and jasmine.",
  },
  {
    id: 8,
    category: "ambience",
    categoryName: "Salon Ambience",
    title: "Private Bridal Dressing Suite",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    caption: "Exclusive VIP lounge for bridal dressing, photoshoots, and entourage comfort.",
  },
  {
    id: 9,
    category: "party",
    categoryName: "Party Makeup",
    title: "Sun-Kissed Golden Glow Makeup",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop",
    caption: "Golden hour glow makeup for sangeet and outdoor cocktail parties.",
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Riya Mehta",
    role: "Founder & Master Makeup Artist",
    experience: "12+ Years Experience",
    bio: "Certified by London College of Fashion. Known for her signature breathable bridal aesthetics and celebrity looks.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Simran Kaur",
    role: "Creative Hair Director & Specialist",
    experience: "9+ Years Experience",
    bio: "Trained at Vidal Sassoon. Expert in precision cuts, balayage hair color artistry, and restorative scalp therapies.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pooja Verma",
    role: "Senior Skin Care & Aesthetician",
    experience: "8+ Years Experience",
    bio: "CIDESCO certified skin specialist providing targeted dermatological facials and acne recovery treatments.",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Anjali Rao",
    role: "Senior Nail Artist & Extensionist",
    experience: "6+ Years Experience",
    bio: "Master of gel sculpting, 3D floral nail art, chrome finishes, and soothing reflexology spa pedicures.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Kavita Singhania",
    service: "Royal Bridal Package",
    rating: 5,
    date: "October 2026",
    comment: "Riya and her team made my wedding day magical! The makeup stayed fresh through tears, dance, and 12 hours of rituals. Everyone couldn't stop complimenting my look!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Neha Joshi",
    service: "Hydra Facial & Hair Spa",
    rating: 5,
    date: "September 2026",
    comment: "The most relaxing salon experience in the city. The blush pink decor, soothing music, and Pooja’s gentle hands during the facial gave my skin an instant glassy glow.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pooja Malhotra",
    service: "Balayage & Hair Smoothening",
    rating: 5,
    date: "August 2026",
    comment: "Simran completely transformed my dull hair into rich hazelnut waves. The shine is unreal and the salon maintains absolute hygiene standards. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  }
];

export const APPOINTMENT_SERVICES = [
  "Hair Styling",
  "Hair Cut",
  "Hair Spa",
  "Skin Care",
  "Facial",
  "Makeup",
  "Bridal Makeup",
  "Classic Bridal Package",
  "Premium Bridal Package",
  "Royal Bridal Package",
  "Special Occasion Makeup",
  "Nail Care",
  "Waxing",
  "Threading",
  "Other"
];

export const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM"
];
