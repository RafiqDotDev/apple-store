export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface StorageOption {
  size: string;
  extraPrice: number;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  headline: string;
  tagline: string;
  category: 'iphone' | 'mac' | 'ipad' | 'watch' | 'airpods' | 'accessories';
  price: number;
  formattedPrice: string;
  monthlyPrice: string;
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
  mainImage: string;
  gallery: string[];
  colors: ColorOption[];
  storageOptions?: StorageOption[];
  specs: SpecItem[];
  description: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Products', icon: 'Sparkles' },
  { id: 'iphone', label: 'iPhone', icon: 'Smartphone' },
  { id: 'mac', label: 'Mac', icon: 'Laptop' },
  { id: 'ipad', label: 'iPad', icon: 'Tablet' },
  { id: 'watch', label: 'Apple Watch', icon: 'Watch' },
  { id: 'airpods', label: 'AirPods', icon: 'Headphones' },
  { id: 'accessories', label: 'Accessories', icon: 'Cable' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    headline: 'Titanium. Power. Precision.',
    tagline: 'Pro performance. Refined to the last detail.',
    category: 'iphone',
    price: 1199,
    formattedPrice: '$1,199',
    monthlyPrice: '$49.99/mo',
    rating: 4.95,
    isNew: true,
    isFeatured: true,
    mainImage: '/images/iphone17pro.jpg',
    gallery: [
      '/images/iphone17pro.jpg',
      '/images/iphone17pro.jpg',
      '/images/iphone17pro.jpg',
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#8F8B82' },
      { name: 'Black Titanium', hex: '#2C2B2E' },
      { name: 'Silver Titanium', hex: '#E2E3E5' },
      { name: 'Desert Titanium', hex: '#C2B2A3' }
    ],
    storageOptions: [
      { size: '256GB', extraPrice: 0 },
      { size: '512GB', extraPrice: 200 },
      { size: '1TB', extraPrice: 400 },
      { size: '2TB', extraPrice: 700 }
    ],
    specs: [
      { label: 'Chip', value: 'A19 Pro Bionic with 6-core GPU' },
      { label: 'Display', value: '6.3" Super Retina XDR ProMotion 120Hz' },
      { label: 'Camera', value: '48MP Triple Fusion with 6x Telephoto' },
      { label: 'Battery', value: 'Up to 29 hours video playback' },
      { label: 'Build', value: 'Grade 5 Titanium with Ceramic Shield' }
    ],
    description: 'Forged in Grade 5 titanium, iPhone 17 Pro introduces revolutionary thermal architecture, the powerhouse A19 Pro chip, and an all-new 48MP Pro camera system with optical precision.'
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    headline: 'A powerful new everyday experience.',
    tagline: 'Vibrant, fast, and engineered for tomorrow.',
    category: 'iphone',
    price: 799,
    formattedPrice: '$799',
    monthlyPrice: '$33.29/mo',
    rating: 4.88,
    isNew: true,
    mainImage: '/images/iphone17pro.jpg',
    gallery: [
      '/images/iphone17pro.jpg',
    ],
    colors: [
      { name: 'Ultramarine', hex: '#3B5998' },
      { name: 'Teal', hex: '#488B80' },
      { name: 'Pink', hex: '#E8A3B8' },
      { name: 'White', hex: '#F0F0F0' },
      { name: 'Black', hex: '#1C1C1E' }
    ],
    storageOptions: [
      { size: '128GB', extraPrice: 0 },
      { size: '256GB', extraPrice: 100 },
      { size: '512GB', extraPrice: 300 }
    ],
    specs: [
      { label: 'Chip', value: 'A18 Bionic with 5-core GPU' },
      { label: 'Display', value: '6.1" Super Retina XDR OLED' },
      { label: 'Camera', value: '48MP Dual Fusion Camera' },
      { label: 'Battery', value: 'Up to 24 hours video playback' }
    ],
    description: 'Featuring dynamic color infusion, robust aluminum chassis, action button, and all-day battery life tailored for pure simplicity.'
  },
  {
    id: 'macbook-pro-m4',
    name: 'MacBook Pro 16"',
    headline: 'Mac. Built to go further.',
    tagline: 'Performance that disappears into the experience.',
    category: 'mac',
    price: 1999,
    formattedPrice: '$1,999',
    monthlyPrice: '$83.29/mo',
    rating: 4.98,
    isNew: true,
    isFeatured: true,
    mainImage: '/images/macbook_m4.jpg',
    gallery: [
      '/images/macbook_m4.jpg',
    ],
    colors: [
      { name: 'Space Black', hex: '#1F2022' },
      { name: 'Silver', hex: '#E3E4E6' }
    ],
    storageOptions: [
      { size: '512GB SSD', extraPrice: 0 },
      { size: '1TB SSD', extraPrice: 200 },
      { size: '2TB SSD', extraPrice: 600 },
      { size: '4TB SSD', extraPrice: 1200 }
    ],
    specs: [
      { label: 'Processor', value: 'Apple M4 Max with 16-core CPU, 40-core GPU' },
      { label: 'Display', value: '16.2" Liquid Retina XDR (1600 nits peak)' },
      { label: 'Unified Memory', value: '36GB Unified Memory (Configurable up to 128GB)' },
      { label: 'Ports', value: '3x Thunderbolt 5, HDMI, SDXC, MagSafe 3' }
    ],
    description: 'The ultimate professional notebook. Driven by M4 Max silicon, delivering unprecedented computational capacity, battery life up to 24 hours, and unmatched color fidelity.'
  },
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air 15"',
    headline: 'Lean. Mean. M3 machine.',
    tagline: 'Impossibly thin, outrageously fast.',
    category: 'mac',
    price: 1299,
    formattedPrice: '$1,299',
    monthlyPrice: '$54.12/mo',
    rating: 4.90,
    mainImage: '/images/macbook_m4.jpg',
    gallery: [
      '/images/macbook_m4.jpg',
    ],
    colors: [
      { name: 'Midnight', hex: '#1E232A' },
      { name: 'Starlight', hex: '#F0E6D2' },
      { name: 'Space Gray', hex: '#53565A' },
      { name: 'Silver', hex: '#E3E4E6' }
    ],
    storageOptions: [
      { size: '256GB SSD', extraPrice: 0 },
      { size: '512GB SSD', extraPrice: 200 },
      { size: '1TB SSD', extraPrice: 400 }
    ],
    specs: [
      { label: 'Chip', value: 'Apple M3 chip with 8-core CPU' },
      { label: 'Display', value: '15.3" Liquid Retina display' },
      { label: 'Design', value: 'Fanless silent design, 11.5mm thin' }
    ],
    description: 'Designed for effortless portability without sacrificing computational power. Features a vibrant 15.3-inch display and up to 18 hours of battery.'
  },
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro 13"',
    headline: 'iPad. Your ideas, amplified.',
    tagline: 'Thinpossible design with Ultra Retina XDR.',
    category: 'ipad',
    price: 1299,
    formattedPrice: '$1,299',
    monthlyPrice: '$54.12/mo',
    rating: 4.96,
    isNew: true,
    isFeatured: true,
    mainImage: '/images/ipad_pro.jpg',
    gallery: [
      '/images/ipad_pro.jpg',
    ],
    colors: [
      { name: 'Space Black', hex: '#1C1D1F' },
      { name: 'Silver', hex: '#E2E3E5' }
    ],
    storageOptions: [
      { size: '256GB', extraPrice: 0 },
      { size: '512GB', extraPrice: 200 },
      { size: '1TB', extraPrice: 600 }
    ],
    specs: [
      { label: 'Chip', value: 'Apple M4 chip with Next-Gen Neural Engine' },
      { label: 'Display', value: 'Ultra Retina XDR Tandem OLED' },
      { label: 'Thickness', value: '5.1mm — Apple’s thinnest product ever' }
    ],
    description: 'The world’s most advanced display powered by tandem OLED technology. Driven by M4 silicon for extreme rendering, Apple Pencil Pro precision, and studio audio.'
  },
  {
    id: 'apple-watch-ultra-3',
    name: 'Apple Watch Ultra 3',
    headline: 'Time, redesigned.',
    tagline: 'The ultimate sports & adventure smartwatch.',
    category: 'watch',
    price: 799,
    formattedPrice: '$799',
    monthlyPrice: '$33.29/mo',
    rating: 4.97,
    isNew: true,
    isFeatured: true,
    mainImage: '/images/apple_watch_ultra.jpg',
    gallery: [
      '/images/apple_watch_ultra.jpg',
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#9E9A90' },
      { name: 'Black Titanium', hex: '#262628' }
    ],
    storageOptions: [
      { size: '49mm Titanium GPS + Cellular', extraPrice: 0 }
    ],
    specs: [
      { label: 'Case', value: '49mm aerospace-grade titanium' },
      { label: 'Display', value: '3,000 nits Always-On Retina display' },
      { label: 'Water Resistance', value: '100m water resistance & EN13319 dive rated' },
      { label: 'Battery', value: 'Up to 36 hours normal use (72h in Low Power)' }
    ],
    description: 'Engineered for extreme environments. Features dual-frequency GPS, Action button customization, depth gauge, and satellite safety alerts.'
  },
  {
    id: 'airpods-max-2',
    name: 'AirPods Max',
    headline: 'Sound without compromise.',
    tagline: 'High-fidelity audio engineered in pure luxury.',
    category: 'airpods',
    price: 549,
    formattedPrice: '$549',
    monthlyPrice: '$22.87/mo',
    rating: 4.92,
    isNew: true,
    isFeatured: true,
    mainImage: '/images/airpods_max.jpg',
    gallery: [
      '/images/airpods_max.jpg',
    ],
    colors: [
      { name: 'Silver', hex: '#E1E2E4' },
      { name: 'Space Black', hex: '#232426' },
      { name: 'Midnight', hex: '#1C232F' },
      { name: 'Starlight', hex: '#F0E6D2' }
    ],
    specs: [
      { label: 'Audio Tech', value: 'Apple-designed dynamic driver with Pro ANC' },
      { label: 'Port', value: 'USB-C Charging & Lossless Audio Cable support' },
      { label: 'Spatial Audio', value: 'Personalized Spatial Audio with dynamic head tracking' },
      { label: 'Battery', value: 'Up to 20 hours listening time with ANC enabled' }
    ],
    description: 'An unparalleled balance of computational audio, active noise cancellation, and custom acoustic architecture in a breathable knit mesh headband.'
  },
  {
    id: 'airpods-4-anc',
    name: 'AirPods 4 ANC',
    headline: 'Iconic design. Transformed audio.',
    tagline: 'Open-ear active noise cancellation redefined.',
    category: 'airpods',
    price: 179,
    formattedPrice: '$179',
    monthlyPrice: '$7.45/mo',
    rating: 4.85,
    mainImage: '/images/airpods_max.jpg',
    gallery: [
      '/images/airpods_max.jpg',
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' }
    ],
    specs: [
      { label: 'Chip', value: 'H2 Audio Chip' },
      { label: 'Noise Control', value: 'Active Noise Cancellation & Transparency Mode' },
      { label: 'Case', value: 'USB-C Wireless Charging case with Find My speaker' }
    ],
    description: 'The world’s first open-ear design featuring Pro-grade Active Noise Cancellation, Adaptive Audio, and seamless hands-free Siri gestures.'
  }
];

export const SERVICE_PERKS = [
  {
    id: 'authentic',
    icon: 'ShieldCheck',
    title: 'Authentic Products',
    description: '100% genuine Apple products sourced directly from official distribution channels.'
  },
  {
    id: 'support',
    icon: 'Sparkles',
    title: 'Premium Support',
    description: 'Dedicated concierge assistance before, during, and after every purchase.'
  },
  {
    id: 'secure',
    icon: 'Lock',
    title: 'Secure Payments',
    description: 'Encrypted, seamless checkout with trusted international payment protection.'
  },
  {
    id: 'delivery',
    icon: 'Truck',
    title: 'Fast Delivery',
    description: 'Complimentary expedited white-glove shipping across Pakistan & worldwide.'
  },
  {
    id: 'warranty',
    icon: 'Award',
    title: 'Official Warranty',
    description: 'Full official AppleCare & brand coverage included on all eligible hardware.'
  }
];
