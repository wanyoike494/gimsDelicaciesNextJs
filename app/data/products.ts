export const WHATSAPP_NUMBER = "254724323377";

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  image: string;
  description: string;
  price: string;
  priceVal: number;
  isCustomQuote: boolean;
  badge: string;
}

export interface HeroSlide {
  title: string;
  tagline: string;
  category: string;
  image: string;
  ctaText: string;
  ctaAction: "whatsapp" | "catalog" | "uji";
  badge: string;
  desc: string;
}

export const PRODUCTS: Product[] = [
  // --- CAKES ---
  {
    id: 'cake-1',
    name: 'Luxury Grand Wedding Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: '/assets/weddingsCakes/aneta-voborilova-Hps0j8Uu8Us-unsplash.jpg',
    description: 'Multi-tiered elegant wedding masterpiece handcrafted with premium fondant, floral accents, and customized flavors.',
    price: 'Quote on Request',
    priceVal: 0,
    isCustomQuote: true,
    badge: 'Best Seller'
  },
  {
    id: 'cake-2',
    name: 'Graduation Celebration Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: '/assets/weddingsCakes/katie-rosario-QNyRp21hb5I-unsplash.jpg',
    description: 'Vibrant celebratory cake customized with graduation cap decor, rich buttercream frosting, and personalized messages.',
    price: 'KES 3,800',
    priceVal: 3800,
    isCustomQuote: false,
    badge: 'Popular'
  },
  {
    id: 'cake-3',
    name: 'Romantic Anniversary Tiered Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: '/assets/weddingsCakes/jacob-thomas-6jHpcBPw7i8-unsplash.jpg',
    description: 'Decadent multi-layered velvet cake infused with fresh berry reduction and hand-spun sugar pearls.',
    price: 'KES 4,500',
    priceVal: 4500,
    isCustomQuote: false,
    badge: 'Chef Favorite'
  },
  {
    id: 'cake-4',
    name: 'Gourmet Birthday Drip Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: '/assets/weddingsCakes/jasmine-bartel-8LtrMQfeDkQ-unsplash.jpg',
    description: 'Mouth-watering chocolate ganache drip cake topped with fresh berries, macarons, and golden sparkles.',
    price: 'KES 3,200',
    priceVal: 3200,
    isCustomQuote: false,
    badge: 'Festive'
  },
  {
    id: 'cake-5',
    name: 'Rustic Floral Celebration Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: '/assets/weddingsCakes/deva-williamson-rHz-DkDgA1k-unsplash.jpg',
    description: 'Semi-naked vanilla sponge cake adorned with fresh seasonal blooms and subtle caramel drizzles.',
    price: 'KES 3,500',
    priceVal: 3500,
    isCustomQuote: false,
    badge: 'Trending'
  },
  {
    id: 'cake-6',
    name: 'Custom Bespoke Event Cake',
    category: 'cakes',
    categoryName: 'Cakes',
    image: '/assets/weddingsCakes/2am-creatives-wk9iC7_keLY-unsplash.jpg',
    description: 'Fully custom designed cake created strictly according to your theme, flavor preferences, and size requirements.',
    price: 'Quote on Request',
    priceVal: 0,
    isCustomQuote: true,
    badge: 'Custom Order'
  },

  // --- COOKIES ---
  {
    id: 'cookie-1',
    name: 'Double Chocolate Chip Cookies (Box of 6)',
    category: 'cookies',
    categoryName: 'Cookies',
    image: '/assets/cookies/american-heritage-chocolate-DoK5qEy2L60-unsplash.jpg',
    description: 'Rich, gooey chocolate cookies packed with premium Belgian dark chocolate chunks.',
    price: 'KES 600',
    priceVal: 600,
    isCustomQuote: false,
    badge: 'Customer Pick'
  },
  {
    id: 'cookie-2',
    name: 'Golden Butter Sugar Cookies',
    category: 'cookies',
    categoryName: 'Cookies',
    image: '/assets/cookies/mae-mu-kID9sxbJ3BQ-unsplash.jpg',
    description: 'Melt-in-your-mouth golden butter cookies baked to delicate crisp perfection.',
    price: 'KES 500',
    priceVal: 500,
    isCustomQuote: false,
    badge: 'Freshly Baked'
  },
  {
    id: 'cookie-3',
    name: 'Gourmet Assorted Cookie Box (12 Pcs)',
    category: 'cookies',
    categoryName: 'Cookies',
    image: '/assets/cookies/food-photographer-jennifer-pallian-OfdDiqx8Cz8-unsplash.jpg',
    description: 'Delicious selection of chocolate chip, oatmeal raisin, almond, and butter crunch cookies.',
    price: 'KES 1,100',
    priceVal: 1100,
    isCustomQuote: false,
    badge: 'Great Value'
  },

  // --- CINNAMON ROLLS ---
  {
    id: 'cinnamon-1',
    name: 'Classic Glazed Cinnamon Rolls (4 Pack)',
    category: 'cinnamon',
    categoryName: 'Cinnamon Rolls',
    image: '/assets/cinnamonDolls/anisa-cakesandbakes-c07YNJmNfaE-unsplash.jpg',
    description: 'Soft, fluffy, oven-fresh cinnamon rolls swirled with Saigon cinnamon and smothered in cream cheese glaze.',
    price: 'KES 800',
    priceVal: 800,
    isCustomQuote: false,
    badge: 'Signature'
  },
  {
    id: 'cinnamon-2',
    name: 'Caramel Pecan Cinnamon Rolls',
    category: 'cinnamon',
    categoryName: 'Cinnamon Rolls',
    image: '/assets/cinnamonDolls/beth-macdonald-V6LEV6CBVLw-unsplash.jpg',
    description: 'Warm cinnamon rolls topped with house-made sticky salted caramel and toasted crunch pecans.',
    price: 'KES 950',
    priceVal: 950,
    isCustomQuote: false,
    badge: 'Indulgent'
  },

  // --- DONUTS ---
  {
    id: 'donut-1',
    name: 'Assorted Gourmet Donuts Box (6 Pcs)',
    category: 'donuts',
    categoryName: 'Donuts',
    image: '/assets/donuts/kobby-mendez-WXJ33HOrzvE-unsplash.jpg',
    description: 'Fluffy fried donuts with chocolate glaze, colorful sprinkles, strawberry drizzle, and cream filling.',
    price: 'KES 750',
    priceVal: 750,
    isCustomQuote: false,
    badge: 'Kid Favorite'
  },
  {
    id: 'donut-2',
    name: 'Rich Chocolate Ganache Donut',
    category: 'donuts',
    categoryName: 'Donuts',
    image: '/assets/donuts/elena-koycheva-PFzy4N0_R3M-unsplash.jpg',
    description: 'Decadent chocolate glazed doughnut dusted with dark chocolate shavings.',
    price: 'KES 150 / pc',
    priceVal: 150,
    isCustomQuote: false,
    badge: 'Sweet Treat'
  },

  // --- CUPCAKES & MUFFINS ---
  {
    id: 'cupcake-2',
    name: 'Fresh Blueberry Crumble Muffins (4 Pack)',
    category: 'cupcakes',
    categoryName: 'Cupcakes & Muffins',
    image: '/assets/cupcakesAndMuffins/jennie-brown-MKBoRZEGeiM-unsplash.jpg',
    description: 'Hearty baked muffins bursting with juicy fresh blueberries and a crunchy streusel sugar topping.',
    price: 'KES 650',
    priceVal: 650,
    isCustomQuote: false,
    badge: 'Breakfast Delight'
  },
  {
    id: 'cupcake-3',
    name: 'Decadent Chocolate Fudge Cupcakes',
    category: 'cupcakes',
    categoryName: 'Cupcakes & Muffins',
    image: '/assets/cupcakesAndMuffins/brian-chan-qJ0zGkrE1Zg-unsplash.jpg',
    description: 'Deep chocolate cupcakes crowned with swirl fudge cream and rainbow sugar sprinkles.',
    price: 'KES 850',
    priceVal: 850,
    isCustomQuote: false,
    badge: 'Must Try'
  },

  // --- SAMOSAS ---
  {
    id: 'samosa-1',
    name: 'Crispy Beef Samosas (Plate of 5)',
    category: 'samosas',
    categoryName: 'Samosas',
    image: '/assets/samosas/brett-jordan-mWu0EHu5zW8-unsplash.jpg',
    description: 'Golden-fried thin pastry pockets packed with spiced minced beef, spring onions, and coriander.',
    price: 'KES 350',
    priceVal: 350,
    isCustomQuote: false,
    badge: 'Savory Special'
  },
  {
    id: 'samosa-2',
    name: 'Spicy Chicken Samosas (Plate of 5)',
    category: 'samosas',
    categoryName: 'Samosas',
    image: '/assets/samosas/juli-moreira-3oc6OzX4LaQ-unsplash.jpg',
    description: 'Deliciously seasoned shredded chicken with aromatic Swahili spices wrapped in crispy pastry.',
    price: 'KES 400',
    priceVal: 400,
    isCustomQuote: false,
    badge: 'Hot & Crispy'
  },

  // --- REFRESHMENTS & DRINKS ---
  {
    id: 'drink-1',
    name: 'Thick Chocolate Fudge Milkshake',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: '/assets/milkShakes/abhishek-hajare-pYmOaWZAPqI-unsplash.jpg',
    description: 'Ultra-creamy milkshake blended with rich dark chocolate, topped with whipped cream and cocoa drizzle.',
    price: 'KES 350',
    priceVal: 350,
    isCustomQuote: false,
    badge: 'Chilled'
  },
  {
    id: 'drink-2',
    name: 'Strawberry Delight Milkshake',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: '/assets/milkShakes/laura-peruchi-p9ZPmOh3uOo-unsplash.jpg',
    description: 'Refreshing shake made from fresh strawberries, vanilla ice cream, and chilled dairy cream.',
    price: 'KES 350',
    priceVal: 350,
    isCustomQuote: false,
    badge: 'Refreshing'
  },
  {
    id: 'drink-3',
    name: 'Artisan Berry Sundae Ice Cream',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: '/assets/iceCreams/courtney-cook-QYsRxRPygwU-unsplash.jpg',
    description: 'Scoops of premium homemade vanilla ice cream topped with sweet raspberry syrup and waffle chips.',
    price: 'KES 300',
    priceVal: 300,
    isCustomQuote: false,
    badge: 'Cool Treat'
  },
  {
    id: 'drink-4',
    name: 'Creamy Berry Swirl Yoghurt (500ml)',
    category: 'drinks',
    categoryName: 'Drinks & Shakes',
    image: '/assets/yoghurts/sara-cervera-4caIPcmVDII-unsplash.jpg',
    description: 'Probiotic fresh cultured yoghurt infused with natural honey and mixed berry pulp.',
    price: 'KES 250',
    priceVal: 250,
    isCustomQuote: false,
    badge: 'Healthy & Tasty'
  },

  // --- UJI POWER ---
  {
    id: 'uji-1',
    name: 'Authentic Kenyan Uji Power (500ml / 1L)',
    category: 'uji',
    categoryName: 'Uji Power',
    image: '/assets/uji power/images.jfif',
    description: 'Kenyan traditional energy porridge slow-cooked with roasted peanuts, cassava, arrow roots, pumpkin seeds, milk & spices. Rich, wholesome, and energizing!',
    price: 'KES 200 (500ml) / KES 350 (1L)',
    priceVal: 200,
    isCustomQuote: false,
    badge: 'Kenyan Favorite ⭐'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Handcrafted Wedding & Celebration Cakes",
    tagline: "Baked with Love & Precision by Head Chef Alice Njambi",
    category: "Custom Wedding & Birthday Cakes",
    image: "/assets/weddingsCakes/aneta-voborilova-Hps0j8Uu8Us-unsplash.jpg",
    ctaText: "Order on WhatsApp",
    ctaAction: "whatsapp",
    badge: "Gims Signature Cakes",
    desc: "From breathtaking multi-tier wedding cakes to vibrant birthday & graduation treats, we turn your celebration dreams into delicious reality."
  },
  {
    title: "Freshly Baked Cinnamon Rolls & Cookies",
    tagline: "Warm, Fluffy, Gooey & Melt-in-Your-Mouth",
    category: "Pastries & Cookies",
    image: "/assets/cinnamonDolls/anisa-cakesandbakes-c07YNJmNfaE-unsplash.jpg",
    ctaText: "Explore Pastries",
    ctaAction: "catalog",
    badge: "Baked Fresh Daily",
    desc: "Indulge in sweet cinnamon swirls, rich chocolate chip cookies, and fluffy glazed donuts handcrafted every morning."
  },
  {
    title: "Authentic Kenyan Uji Power & Refreshment",
    tagline: "Nourishing Porridge made with Peanuts, Cassava & Arrowroots",
    category: "Energizing Refreshments",
    image: "/assets/uji power/images.jfif",
    ctaText: "Order Uji Power",
    ctaAction: "uji",
    badge: "100% Wholesome & Energizing",
    desc: "Fuel your day with our signature Uji Power alongside thick ice-cold milkshakes, artisanal ice creams, and fresh yoghurts."
  },
  {
    title: "Crispy Samosas & Savory Bites",
    tagline: "Hot, Golden & Spiced to Perfection",
    category: "Savory Snack Collection",
    image: "/assets/samosas/brett-jordan-mWu0EHu5zW8-unsplash.jpg",
    ctaText: "Order Snacks Now",
    ctaAction: "whatsapp",
    badge: "Crispy & Spicy",
    desc: "Delicious beef and chicken samosas cooked fresh on order for your home, office tea breaks, or special event catering."
  }
];
