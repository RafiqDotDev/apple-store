export type PTAStatus = "PTA Approved" | "Non-PTA" | "VIP PTA";

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  tagline: string;
  category: "mobile" | "accessory" | "laptop" | "watch";
  price: number; // in PKR
  originalPrice?: number;
  discountPercentage?: number;
  ptaStatus: PTAStatus;
  warranty: string;
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isDeal?: boolean;
  badge?: string;
  images: string[];
  colors: ProductColor[];
  storageOptions: string[];
  shortSpecs: string[];
  fullSpecs: Record<string, string>;
  description: string;
};

export type CustomerSetup = {
  id: string;
  name: string;
  handle: string;
  city: string;
  productName: string;
  comment: string;
  rating: number;
  imageUrl: string;
  verified: boolean;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "iphone-17-pro-max",
    slug: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    tagline: "Forged in Titanium with Next-Gen A19 Pro Chip",
    category: "mobile",
    price: 499999,
    originalPrice: 539999,
    discountPercentage: 7,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Official Apple Warranty",
    rating: 4.9,
    reviewCount: 142,
    isBestSeller: true,
    isNew: true,
    badge: "BEST SELLER",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Natural Titanium", hex: "#C2BCB2" },
      { name: "Desert Titanium", hex: "#D4C4B5" },
      { name: "Black Titanium", hex: "#35363A" },
      { name: "White Titanium", hex: "#F3F2ED" }
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    shortSpecs: ["6.9\" Super Retina XDR 120Hz", "A19 Pro Chip", "48MP Triple Pro Camera System", "Titanium Frame"],
    fullSpecs: {
      Display: "6.9-inch Super Retina XDR OLED, 120Hz ProMotion",
      Processor: "Apple A19 Pro 3nm Bionic Chip",
      Camera: "48MP Main + 48MP Ultra Wide + 48MP Telephoto (5x Optical Zoom)",
      Battery: "4685 mAh, 30W Fast Charging, MagSafe 25W",
      Build: "Grade 5 Titanium frame, Ceramic Shield glass front/back",
      OS: "iOS 19 with Apple Intelligence",
      WaterResistance: "IP68 (6m up to 30 mins)"
    },
    description: "The ultimate iPhone experience. Featuring a groundbreaking titanium design, the immensely powerful A19 Pro chip, and the most versatile camera system ever on an iPhone."
  },
  {
    id: "galaxy-s26-ultra",
    slug: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    tagline: "Ultra Power with Galaxy AI & Built-in S Pen",
    category: "mobile",
    price: 479999,
    originalPrice: 519999,
    discountPercentage: 8,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Official Samsung Warranty",
    rating: 4.8,
    reviewCount: 98,
    isBestSeller: true,
    isNew: true,
    badge: "NEW RELEASE",
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Titanium Gray", hex: "#7E8287" },
      { name: "Titanium Black", hex: "#22252A" },
      { name: "Titanium Violet", hex: "#5C586B" },
      { name: "Titanium Yellow", hex: "#EADDA3" }
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    shortSpecs: ["6.8\" Dynamic AMOLED 2X 120Hz", "Snapdragon 8 Gen 4", "200MP Quad Camera", "S Pen Included"],
    fullSpecs: {
      Display: "6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz Adaptable",
      Processor: "Snapdragon 8 Gen 4 for Galaxy",
      Camera: "200MP Main + 50MP Telephoto 5x + 10MP Telephoto 3x + 50MP Ultra-Wide",
      Battery: "5000 mAh, 45W Fast Charging",
      Build: "Armor Aluminum & Titanium chassis, Gorilla Glass Armor",
      OS: "One UI 7.0 (Android 15) with Galaxy AI"
    },
    description: "Welcome to the era of mobile AI. With Galaxy S26 Ultra in your hands, you can unleash whole new levels of creativity, productivity, and possibility."
  },
  {
    id: "iphone-16-pro",
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    tagline: "Pro Camera Control with A18 Pro Chip",
    category: "mobile",
    price: 399999,
    originalPrice: 429999,
    discountPercentage: 7,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Official Apple Warranty",
    rating: 4.9,
    reviewCount: 176,
    isBestSeller: true,
    badge: "POPULAR",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Desert Titanium", hex: "#D4C4B5" },
      { name: "Natural Titanium", hex: "#C2BCB2" },
      { name: "Black Titanium", hex: "#35363A" }
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    shortSpecs: ["6.3\" Super Retina XDR 120Hz", "A18 Pro Chip", "Camera Control Button", "48MP Fusion Camera"],
    fullSpecs: {
      Display: "6.3-inch Super Retina XDR OLED, 120Hz ProMotion",
      Processor: "Apple A18 Pro Chip",
      Camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      Battery: "3582 mAh, 25W MagSafe Charging",
      OS: "iOS 18 with Apple Intelligence"
    },
    description: "Stunning titanium design. Camera Control for instant photos and videos. 4K 120 fps Dolby Vision recording."
  },
  {
    id: "pixel-9-pro-xl",
    slug: "pixel-9-pro-xl",
    name: "Google Pixel 9 Pro XL",
    brand: "Google",
    tagline: "The Most Powerful Pixel Yet with Gemini AI",
    category: "mobile",
    price: 349999,
    originalPrice: 389999,
    discountPercentage: 10,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Store Warranty",
    rating: 4.7,
    reviewCount: 64,
    isBestSeller: false,
    isNew: true,
    badge: "BEST AI PHONE",
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Obsidian", hex: "#232528" },
      { name: "Porcelain", hex: "#F3F1EC" },
      { name: "Hazel", hex: "#6E7A70" },
      { name: "Rose Quartz", hex: "#E8C8C8" }
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    shortSpecs: ["6.8\" Super Actua Display 120Hz", "Google Tensor G4", "50MP Triple Pro Camera", "16GB RAM"],
    fullSpecs: {
      Display: "6.8-inch Super Actua LTPO OLED, 120Hz, 3000 nits peak",
      Processor: "Google Tensor G4 + Titan M2 Security Chip",
      Camera: "50MP Main + 48MP Ultra-Wide + 48MP 5x Telephoto",
      Memory: "16GB RAM + 256GB Storage",
      OS: "Clean Android 15 with 7 years of OS updates"
    },
    description: "Pixel 9 Pro XL brings unmatched computational photography, Gemini Advanced AI integration, and sleek luxury build quality."
  },
  {
    id: "nothing-phone-3",
    slug: "nothing-phone-3",
    name: "Nothing Phone (3)",
    brand: "Nothing",
    tagline: "Transparent Iconicity with Glyph Matrix Interface",
    category: "mobile",
    price: 219999,
    originalPrice: 249999,
    discountPercentage: 12,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Store Warranty",
    rating: 4.8,
    reviewCount: 52,
    isNew: true,
    badge: "UNIQUE DESIGN",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Transparent Dark", hex: "#1A1A1A" },
      { name: "Transparent White", hex: "#F0F0F0" }
    ],
    storageOptions: ["256GB", "512GB"],
    shortSpecs: ["6.7\" 120Hz Flexible OLED", "Glyph Matrix Lights", "Snapdragon 8s Gen 3", "50MP Dual Camera"],
    fullSpecs: {
      Display: "6.7-inch Flexible LTPO OLED, 120Hz, 1600 nits",
      Glyph: "Customizable Glyph Interface LED strips",
      Processor: "Snapdragon 8s Gen 3",
      Camera: "50MP Sony IMX890 Main + 50MP Ultra-Wide",
      OS: "Nothing OS 3.0 (Android 15)"
    },
    description: "Pure light. Pure design. Phone (3) pairs transparent engineering with a refined Glyph interface and ultra-responsive Nothing OS."
  },
  {
    id: "magsafe-duo-charger",
    slug: "magsafe-duo-charger",
    name: "Apple MagSafe Duo Charger",
    brand: "Apple",
    tagline: "Conveniently Charges iPhone, Apple Watch & AirPods",
    category: "accessory",
    price: 34999,
    originalPrice: 39999,
    discountPercentage: 12,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Official Apple Warranty",
    rating: 4.9,
    reviewCount: 210,
    isDeal: true,
    badge: "BUY 2 GET 1 FREE",
    images: [
      "https://images.unsplash.com/photo-1622445268465-84288c52084c?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" }
    ],
    storageOptions: ["Standard"],
    shortSpecs: ["15W Fast Wireless Charging", "Folds Flat for Travel", "MagSafe Precision Alignment"],
    fullSpecs: {
      Compatibility: "iPhone 12 and newer, Apple Watch, AirPods Pro/Wireless Case",
      Input: "USB-C to Lightning Cable included",
      Output: "Up to 15W peak wireless power"
    },
    description: "The MagSafe Duo Charger conveniently charges your compatible iPhone, Apple Watch, Wireless Charging Case for AirPods, and other Qi-certified devices."
  },
  {
    id: "airpods-max-usb-c",
    slug: "airpods-max-usb-c",
    name: "AirPods Max (USB-C)",
    brand: "Apple",
    tagline: "Ultimate High-Fidelity Audio with Active Noise Cancellation",
    category: "accessory",
    price: 189999,
    originalPrice: 209999,
    discountPercentage: 9,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Official Apple Warranty",
    rating: 4.9,
    reviewCount: 88,
    isBestSeller: true,
    badge: "PRO AUDIO",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Space Black", hex: "#1D1E22" },
      { name: "Starlight", hex: "#EBE6D9" },
      { name: "Sky Blue", hex: "#7AA2C8" },
      { name: "Midnight", hex: "#1C2430" }
    ],
    storageOptions: ["Standard"],
    shortSpecs: ["USB-C Audio & Charging", "Pro Active Noise Cancellation", "Spatial Audio with Dynamic Head Tracking"],
    fullSpecs: {
      Audio: "Apple-designed dynamic driver, Pro ANC, Transparency mode",
      Battery: "Up to 20 hours listening time on a single charge",
      Connectivity: "Bluetooth 5.3, USB-C lossless audio input"
    },
    description: "AirPods Max deliver astonishingly detailed, high-fidelity audio for an unparalleled listening experience."
  },
  {
    id: "apple-watch-ultra-2",
    slug: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    tagline: "Next-Level Rugged Endurance with Brightest 3000-Nit Display",
    category: "watch",
    price: 259999,
    originalPrice: 279999,
    discountPercentage: 7,
    ptaStatus: "PTA Approved",
    warranty: "1 Year Official Apple Warranty",
    rating: 4.9,
    reviewCount: 115,
    isBestSeller: true,
    badge: "RUGGED PRO",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { name: "Black Titanium", hex: "#2B2B2B" },
      { name: "Natural Titanium", hex: "#C0BBAF" }
    ],
    storageOptions: ["GPS + Cellular"],
    shortSpecs: ["49mm Titanium Case", "3000-Nit Display", "Dual-Frequency Precision GPS", "Up to 72 Hours Battery"],
    fullSpecs: {
      Case: "49mm Aerospace grade titanium, Sapphire front crystal",
      Display: "Always-On Retina display up to 3000 nits",
      Water: "100m water resistance, EN13319 scuba dive certified",
      Chip: "S9 SiP with Double Tap gesture control"
    },
    description: "The ultimate sports and adventure watch. Packed with groundbreaking capabilities, a stunning 3000-nit display, and rugged titanium case."
  }
];

export const MOCK_CUSTOMER_SETUPS: CustomerSetup[] = [
  {
    id: "setup-1",
    name: "Saim Chaudhry",
    handle: "@saim_setups",
    city: "Lahore",
    productName: "iPhone 17 Pro Max (Desert Titanium)",
    comment: "Ordered from NEXORA and received delivery in Lahore within 24 hours! PTA status was pre-verified and authentic. The unboxing experience was unreal!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
    verified: true
  },
  {
    id: "setup-2",
    name: "Zainab Ali",
    handle: "@zainab_creatives",
    city: "Karachi",
    productName: "AirPods Max + MagSafe Duo",
    comment: "The sound quality of AirPods Max is incredible! NEXORA gave me a great deal with instant WhatsApp support. 100% recommended for authentic Apple products in Pakistan.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    verified: true
  },
  {
    id: "setup-3",
    name: "Hamza Farooq",
    handle: "@hamza_tech_pk",
    city: "Islamabad",
    productName: "Galaxy S26 Ultra 512GB",
    comment: "Super smooth transaction. Received full official warranty documentation. The pixel arcade store theme is so cool and unique!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop",
    verified: true
  },
  {
    id: "setup-4",
    name: "Bilal Raza",
    handle: "@bilal_gadgets",
    city: "Rawalpindi",
    productName: "Apple Watch Ultra 2",
    comment: "Best store for tech enthusiasts in Pakistan. Cash on Delivery was seamless. Will definitely buy my next phone from NEXORA!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    verified: true
  }
];
