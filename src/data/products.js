export const categories = [
  {
    id: 'cake',
    name: 'Cake & Cake Products',
    slug: 'cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    description: 'Fresh cakes, pastries, and baked delights from local bakeries.',
    productCount: '24 products',
  },
  {
    id: 'handcrafts',
    name: 'Handcrafts',
    slug: 'handcrafts',
    image: 'https://images.unsplash.com/photo-1452860606248-7fbf8ff9b870?w=600&q=80',
    description: 'Unique handmade items crafted by talented local artisans.',
    productCount: '18 products',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
    description: 'Gadgets, accessories, and tech from trusted local shops.',
    productCount: '15 products',
  },
  {
    id: 'clothing',
    name: 'Clothing',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80',
    description: 'Fashion and apparel from Batu\'s finest clothing stores.',
    productCount: '12 products',
  },
];

export const products = [
  {
    id: 1,
    name: 'Chocolate Celebration Cake',
    category: 'cake',
    categoryLabel: 'Cake & Cake Products',
    price: 850,
    currency: 'ETB',
    description: 'Rich chocolate layer cake perfect for birthdays and celebrations. Made fresh by local bakers.',
    shortDescription: 'Rich chocolate layer cake for celebrations.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
      'https://images.unsplash.com/photo-1563729787505-6d5e0f7b0a0a?w=800&q=80',
      'https://images.unsplash.com/photo-1464349095432-e9a1528cc9a2?w=800&q=80',
    ],
    shopName: 'Sweet Batu Bakery',
    featured: true,
    rating: 4.9,
    verified: true,
  },
  {
    id: 2,
    name: 'Handwoven Basket Set',
    category: 'handcrafts',
    categoryLabel: 'Handcrafts',
    price: 450,
    currency: 'ETB',
    description: 'Beautiful set of three handwoven baskets made from natural materials by local artisans.',
    shortDescription: 'Set of three handwoven natural baskets.',
    image: 'https://images.unsplash.com/photo-1452860606248-7fbf8ff9b870?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1452860606248-7fbf8ff9b870?w=800&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef526241cd81?w=800&q=80',
    ],
    shopName: 'Batu Crafts Collective',
    featured: true,
    rating: 4.8,
    verified: true,
  },
  {
    id: 3,
    name: 'Wireless Bluetooth Earbuds',
    category: 'electronics',
    categoryLabel: 'Electronics',
    price: 1200,
    currency: 'ETB',
    description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
    shortDescription: 'Wireless earbuds with noise cancellation.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
      'https://images.unsplash.com/photo-1598331668826-35ce9c6b5a0f?w=800&q=80',
    ],
    shopName: 'Tech Hub Batu',
    featured: true,
    rating: 4.8,
    verified: true,
  },
  {
    id: 4,
    name: 'Traditional Cotton Dress',
    category: 'clothing',
    categoryLabel: 'Clothing',
    price: 950,
    currency: 'ETB',
    description: 'Elegant traditional cotton dress with modern design elements. Available in multiple sizes.',
    shortDescription: 'Elegant traditional cotton dress.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d58169?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d58169?w=800&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    ],
    shopName: 'Batu Fashion House',
    featured: true,
    rating: 4.7,
    verified: true,
  },
  {
    id: 5,
    name: 'Vanilla Cupcake Box (12 pcs)',
    category: 'cake',
    categoryLabel: 'Cake & Cake Products',
    price: 320,
    currency: 'ETB',
    description: 'Box of twelve fluffy vanilla cupcakes with buttercream frosting.',
    shortDescription: 'Twelve fluffy vanilla cupcakes.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aafda8b08?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614707267537-b85aafda8b08?w=800&q=80',
    ],
    shopName: 'Sweet Batu Bakery',
    featured: false,
  },
  {
    id: 6,
    name: 'Ceramic Coffee Mug Set',
    category: 'handcrafts',
    categoryLabel: 'Handcrafts',
    price: 380,
    currency: 'ETB',
    description: 'Hand-painted ceramic mug set of four, each with unique local motifs.',
    shortDescription: 'Hand-painted ceramic mug set of four.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
    ],
    shopName: 'Batu Crafts Collective',
    featured: false,
  },
  {
    id: 7,
    name: 'Portable Power Bank 20000mAh',
    category: 'electronics',
    categoryLabel: 'Electronics',
    price: 890,
    currency: 'ETB',
    description: 'Fast-charging portable power bank with dual USB ports and LED indicator.',
    shortDescription: 'Fast-charging 20000mAh power bank.',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80',
    ],
    shopName: 'Tech Hub Batu',
    featured: false,
  },
  {
    id: 8,
    name: 'Men\'s Casual Linen Shirt',
    category: 'clothing',
    categoryLabel: 'Clothing',
    price: 650,
    currency: 'ETB',
    description: 'Lightweight linen shirt perfect for Batu\'s climate. Comfortable and stylish.',
    shortDescription: 'Lightweight casual linen shirt.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    ],
    shopName: 'Batu Fashion House',
    featured: false,
  },
  {
    id: 9,
    name: 'Red Velvet Cake Slice',
    category: 'cake',
    categoryLabel: 'Cake & Cake Products',
    price: 120,
    currency: 'ETB',
    description: 'Individual slice of premium red velvet cake with cream cheese frosting.',
    shortDescription: 'Premium red velvet cake slice.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3d6e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586985289688-ca3cf47d3d6e?w=800&q=80',
    ],
    shopName: 'Sweet Batu Bakery',
    featured: false,
  },
  {
    id: 10,
    name: 'Leather Wallet - Handcrafted',
    category: 'handcrafts',
    categoryLabel: 'Handcrafts',
    price: 520,
    currency: 'ETB',
    description: 'Genuine leather wallet handcrafted with traditional stitching techniques.',
    shortDescription: 'Handcrafted genuine leather wallet.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    ],
    shopName: 'Batu Crafts Collective',
    featured: false,
  },
  {
    id: 11,
    name: 'Smart Watch Fitness Tracker',
    category: 'electronics',
    categoryLabel: 'Electronics',
    price: 2100,
    currency: 'ETB',
    description: 'Feature-rich smartwatch with heart rate monitor, GPS, and 7-day battery.',
    shortDescription: 'Smartwatch with fitness tracking features.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    ],
    shopName: 'Tech Hub Batu',
    featured: false,
  },
  {
    id: 12,
    name: 'Women\'s Embroidered Scarf',
    category: 'clothing',
    categoryLabel: 'Clothing',
    price: 280,
    currency: 'ETB',
    description: 'Soft cotton scarf with beautiful traditional embroidery patterns.',
    shortDescription: 'Embroidered cotton scarf.',
    image: 'https://images.unsplash.com/photo-1601924994987-69fb26d0c737?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601924994987-69fb26d0c737?w=800&q=80',
    ],
    shopName: 'Batu Fashion House',
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Hanna Tadesse',
    role: 'Local Customer',
    text: 'Batu Gebeya made it so easy to find products from shops I didn\'t even know existed. Fast response and smooth delivery!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Daniel Mekonnen',
    role: 'Regular Buyer',
    text: 'I love supporting local businesses through Batu Gebeya. They handle everything — I just browse and contact them.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sara Bekele',
    role: 'Happy Customer',
    text: 'The variety of products is amazing. From cakes to electronics, I can find everything I need from Batu town.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Browse Products',
    description: 'Explore our curated selection of products from local Batu shops.',
    icon: 'search',
  },
  {
    step: 2,
    title: 'Contact Batu Gebeya',
    description: 'Reach out to us with the product you want. We handle all communication.',
    icon: 'message',
  },
  {
    step: 3,
    title: 'We Find the Product',
    description: 'Our team connects with local shops to source your item.',
    icon: 'package',
  },
  {
    step: 4,
    title: 'We Arrange Delivery',
    description: 'Sit back while we coordinate pickup and delivery to your door.',
    icon: 'truck',
  },
];

export const whyChooseUs = [
  {
    title: 'Trusted Local Marketplace',
    description: 'We partner only with verified local businesses in Batu town.',
    icon: 'shield',
  },
  {
    title: 'Fast Response',
    description: 'Our team responds quickly to all product inquiries and orders.',
    icon: 'clock',
  },
  {
    title: 'Wide Product Selection',
    description: 'From cakes to electronics — discover diverse products in one place.',
    icon: 'grid',
  },
  {
    title: 'Local Business Support',
    description: 'Every order helps strengthen Batu\'s local economy.',
    icon: 'heart',
  },
];

export const contactInfo = {
  phone: '+251 911 234 567',
  email: 'hello@batugebeya.com',
  tiktok: 'https://tiktok.com/@batugebeya',
  instagram: 'https://instagram.com/batugebeya',
  address: 'Batu Town, Oromia Region, Ethiopia',
};

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getSuggestedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (p) => p.id !== current.id && p.category === current.category
  );
  const others = products.filter(
    (p) => p.id !== current.id && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatPrice(price, currency = 'ETB') {
  return `${price.toLocaleString()} ${currency}`;
}

export const verifiedSellers = [
  {
    id: 'sweet-batu-bakery',
    name: 'Sweet Batu Bakery',
    category: 'Baked Goods',
    rating: 4.9,
    slogan: 'Fresh cakes and pastries baked daily.',
  },
  {
    id: 'tech-hub-batu',
    name: 'Tech Hub Batu',
    category: 'Electronics',
    rating: 4.8,
    slogan: 'Reliable gadgets with vetted local support.',
  },
  {
    id: 'batu-crafts-collective',
    name: 'Batu Crafts Collective',
    category: 'Handcrafts',
    rating: 4.9,
    slogan: 'Artisan pieces made by trusted local makers.',
  },
  {
    id: 'batu-fashion-house',
    name: 'Batu Fashion House',
    category: 'Apparel',
    rating: 4.7,
    slogan: 'Stylish garments with fast local shipping.',
  },
];
