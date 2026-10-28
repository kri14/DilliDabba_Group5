import { MenuItem, SubscriptionPlan, FaqItem, StreakDay } from '../types';

export const WEEKLY_MENU: MenuItem[] = [
  {
    day: 'Monday',
    dayHindi: 'Somvaar',
    theme: 'Swaad-e-Maa Homestyle Comfort',
    sabzi1: 'Adraki Aloo Gobhi (Dry, mild turmeric & crushed coriander)',
    sabzi2: 'Green Peas & Methi Sukhi Sabzi',
    dal: 'Maa Ki Dal (Slow-simmered Kali Dal with hing-jeera tadka)',
    bread: '3 Tawa Phulkas with light desi ghee brush',
    rice: 'Jeera Steamed Rice (Basmati Tukda)',
    saladChutney: 'Crunchy Kakdi-Gajar Salad + Homemade Nimbu Achar',
    calories: 495,
    oilLevel: '< 3/4 tsp Cold-Pressed Mustard Oil',
    proteinGrams: 16,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    tags: ['Low Oil', 'Digestive Hing Tadka', 'Zero Food-Coma']
  },
  {
    day: 'Tuesday',
    dayHindi: 'Mangalvaar',
    theme: 'Dilli Special Paneer & Pulao',
    sabzi1: 'Paneer Bhurji / Shahi Lauki Kofta (Home gravy, zero cream)',
    sabzi2: 'Bhindi Masala (Crisp, zero slime, light amchur)',
    dal: 'Panchmel Dal (5 lentil protein boost with curry leaves)',
    bread: '3 Soft Phulkas / Ajwain Paratha option',
    rice: 'Matar Pulao with whole spices',
    saladChutney: 'Sirka Pyaz (or Beetroot Jain Salad) + Dhaniya Pudina Chutney',
    calories: 520,
    oilLevel: '< 1 tsp Cold-Pressed Groundnut Oil',
    proteinGrams: 22,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    tags: ['High Protein', 'Fresh Malai Paneer', 'No Commercial Paste']
  },
  {
    day: 'Wednesday',
    dayHindi: 'Budhvaar',
    theme: 'Light Masala Mid-Week Detox',
    sabzi1: 'Tinda Masala / Torai Chana Dal Sabzi (Mummy style comfort)',
    sabzi2: 'Jeera Aloo with Kasuri Methi',
    dal: 'Yellow Moong Dal Tadka with roasted garlic & jeera',
    bread: '3 Multigrain Chakki Rotis (Jowar, Chana & Wheat)',
    rice: 'Steamed Golden Sella Rice',
    saladChutney: 'Sprouted Moong Chaat + Fresh Boondi Raita',
    calories: 460,
    oilLevel: '< 0.5 tsp Cold-Pressed Mustard Oil',
    proteinGrams: 18,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    tags: ['Light on Stomach', 'Multigrain Goodness', 'Midweek Detox']
  },
  {
    day: 'Thursday',
    dayHindi: 'Veervaar',
    theme: 'Dilli Ka Hearty Rajma Chawal Day',
    sabzi1: 'Shahi Kashmiri Dum Aloo / Mixed Seasonal Veg',
    sabzi2: 'Gajar Matar Sukhi Sabzi',
    dal: 'Dilli Style Rajma Masala (Soft, creamy beans in onion-tomato gravy)',
    bread: '2 Warm Phulkas',
    rice: 'Fragrant Dehradun Basmati Rice (Unlimited portion on request)',
    saladChutney: 'Sliced Radish & Tomato Salad + Mirchi Ka Achar',
    calories: 535,
    oilLevel: '< 1 tsp Cold-Pressed Mustard Oil',
    proteinGrams: 20,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    tags: ['Dilli Classic', 'Slow-cooked Rajma', 'Workplace Favorite']
  },
  {
    day: 'Friday',
    dayHindi: 'Shukravaar',
    theme: 'Friday TGIF Feast & Free Dessert',
    sabzi1: 'Kadai Paneer Homestyle (Fresh capsicum & whole roasted coriander)',
    sabzi2: 'Aloo Methi or Kashmiri Baingan',
    dal: 'Chana Dal with Lahsuni Tadka',
    bread: '3 Tawa Phulkas + 1 Crisp Laccha Paratha',
    rice: 'Kashmiri Jeera Pulao',
    saladChutney: 'Cucumber Mint Raita + Roasted Papad Churi',
    specialAddon: 'FREE FRIDAY DESSERT: Desi Ghee Gajar Ka Halwa / Hot Gulab Jamun',
    calories: 560,
    oilLevel: '< 1 tsp Pure Cow Desi Ghee & Mustard Oil',
    proteinGrams: 24,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    tags: ['Free Friday Sweet', 'TGIF Special', 'Chef Choice']
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'mini-ghar-dabba',
    name: 'Mini Ghar Dabba',
    tagline: 'Light, healthy lunch for busy corporate workdays',
    pricePerMeal: 99,
    monthlyTotal: 2178,
    servingsDesc: '1 Dry Sabzi + 1 Homestyle Dal + 3 Tawa Phulkas + Steamed Rice + Salad',
    idealFor: 'Light eaters, solo techies & low-calorie diet seekers',
    includes: [
      'Daily morning fresh cooked meal',
      'Under 490 kcal & < 3/4 tsp oil',
      'Delivered hot in insulated bag by 1 PM',
      'Pause/Skip anytime via WhatsApp (Save meals)',
      'Free carrying forward of unused credits'
    ],
    popular: false
  },
  {
    id: 'classic-dilli-thali',
    name: 'Classic Dilli Thali',
    tagline: 'The complete home thali with sabzi, dal, curd & extras',
    badge: 'MOST POPULAR IN CYBER CITY & NOIDA',
    pricePerMeal: 115,
    monthlyTotal: 2530,
    servingsDesc: '1 Special Sabzi (Paneer 2x/wk) + 1 Dal + 4 Phulkas + Jeera Rice + Raita + Salad + Achar',
    idealFor: 'Full hearty lunch lovers wanting mummy ke haath jaisa swaad',
    includes: [
      'Rotating menu with 14-day zero repeat guarantee',
      'Includes Fresh Curd / Masala Raita daily',
      'FREE Friday Dessert included automatically',
      'Delivered guaranteed by 1 PM or FREE',
      'Priority WhatsApp desk dispatch concierge',
      'Carry-forward meals across next month'
    ],
    popular: true
  },
  {
    id: 'executive-fit-dabba',
    name: 'Executive High-Protein Dabba',
    tagline: 'High protein, low GI grains for gym-goers & active pros',
    pricePerMeal: 129,
    monthlyTotal: 2838,
    servingsDesc: '1 High-Protein Paneer/Soya/Sprouts + Thick Dal + 3 Multigrain Rotis + Brown/Millet Rice + Salad + Curd',
    idealFor: 'Fitness freaks, managers & wellness conscious executives',
    includes: [
      '25g+ natural vegetarian protein per meal',
      'Zero refined flour (Chakki Multigrain & Millets)',
      'Sprouted beans & seed mix salad included',
      'Custom macro breakdown label on each dabba',
      'Option for Jain (No onion-garlic) daily',
      'Free trial meal with immediate dispatch'
    ],
    popular: false
  }
];

export const INITIAL_STREAK: StreakDay[] = [
  {
    day: 'Monday',
    shortDay: 'Mon',
    dish: 'Maa Ki Dal + 3 Phulkas + Jeera Rice',
    calories: '495 kcal',
    completed: true,
    paused: false,
    deliveryTime: '12:47 PM (Desk Delivery)'
  },
  {
    day: 'Tuesday',
    shortDay: 'Tue',
    dish: 'Paneer Bhurji + Bhindi + Panchmel Dal',
    calories: '520 kcal',
    completed: true,
    paused: false,
    deliveryTime: '12:51 PM (Desk Delivery)'
  },
  {
    day: 'Wednesday',
    shortDay: 'Wed',
    dish: 'Moong Dal Tadka + Torai + Multigrain Roti',
    calories: '460 kcal',
    completed: true,
    paused: false,
    deliveryTime: '12:44 PM (Desk Delivery)'
  },
  {
    day: 'Thursday',
    shortDay: 'Thu',
    dish: 'Dilli Rajma Masala + Basmati Rice + Raita',
    calories: '535 kcal',
    completed: true,
    paused: false,
    deliveryTime: '12:49 PM (Desk Delivery)'
  },
  {
    day: 'Friday',
    shortDay: 'Fri',
    dish: 'Kadai Paneer + TGIF Pulao + FREE DESSERT 🎁',
    calories: '560 kcal',
    completed: true,
    paused: false,
    deliveryTime: 'Scheduled for 12:45 PM'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Will my lunch reach my office hot and on time?',
    answer: 'Haan, your dabba reaches your office desk by 1 pm, packed hot in an insulated box. If we are late, that day\'s meal is on us.',
    category: 'delivery'
  },
  {
    question: 'Is the food really home-style, low oil and hygienic?',
    answer: 'Every meal is cooked fresh that morning in a home-style kitchen with less oil and mild masala. The menu changes daily, so no repeat sabzi in the same week.',
    category: 'food'
  },
  {
    question: 'Can I try it first, and can I pause or customise my plan?',
    answer: 'Your first meal is a free trial, and you can pause, skip or cancel any day from WhatsApp before 10 am. Jain, no onion-garlic and less-spicy options are available on request.',
    category: 'flexibility'
  },
  {
    question: 'Which office areas do you deliver to in Gurgaon, Noida and CP?',
    answer: 'We cover all major hubs including DLF Cyber City, Cyber Hub, Udyog Vihar, Golf Course Road, Sector 62 Noida, Sector 18, Expressway tech parks, and Connaught Place. Our dedicated riders hand-deliver directly to your desk or office reception.',
    category: 'delivery'
  },
  {
    question: 'What happens if I have Work-From-Home (WFH) or a client meeting?',
    answer: 'Simply send "Pause" on WhatsApp before 10:00 AM on that morning. Your meal credit never expires and automatically extends to the end of the subscription.',
    category: 'flexibility'
  },
  {
    question: 'What kind of oil and spices do you use in the kitchen?',
    answer: 'We only use authentic cold-pressed mustard, groundnut and pure cow desi ghee with zero palm oil or soda. All spices are whole roasted and stone-ground to keep food light and easy to digest.',
    category: 'food'
  }
];

export const DELIVERY_HUBS = [
  {
    city: 'Gurugram',
    hubs: ['DLF Cyber City (Building 5, 8, 9, 10, 14)', 'Cyber Hub & Horizon Centre', 'Udyog Vihar Phase 1-5', 'Golf Course Extn & Sohna Rd', 'Candor TechSpace Sector 48'],
    timing: 'Batches arrive 12:30 PM - 12:55 PM'
  },
  {
    city: 'Noida',
    hubs: ['Sector 62 Institutional Area (Stellar, Candor)', 'Sector 18 & Atta Commercial Hub', 'Sector 125, 126 & 127 Tech Boulevard', 'Sector 135 & 142 Advant Navis', 'Noida-Greater Noida Expressway IT Parks'],
    timing: 'Batches arrive 12:25 PM - 12:50 PM'
  },
  {
    city: 'Connaught Place (CP), Delhi',
    hubs: ['Barakhamba Road & Statesman House', 'Kasturba Gandhi Marg & HT House', 'Inner & Outer Circle Corporate Chambers', 'Tolstoy Marg & Shivaji Stadium Metro Station area'],
    timing: 'Batches arrive 12:35 PM - 1:00 PM'
  }
];

export const HYGIENE_PHOTOS = [
  {
    title: '4:30 AM Fresh Batch Cooking',
    desc: 'Sabzi cut & cooked fresh each sunrise. Never frozen gravies or leftover curries.',
    tag: 'Fresh Mandi Produce',
    stat: '0 Frozen Items',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Grade 304 Stainless Steel Hot Dabbas',
    desc: 'Zero plastic contact with hot dal or roti. Packed in triple-insulated stainless steel.',
    tag: 'Food Grade Steel',
    stat: '100% BPA Free',
    imageUrl: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Cold-Pressed Oils & Whole Spices',
    desc: 'Less than 1 tsp cold pressed oil per sabzi. Zero soda, zero artificial colors or MSG.',
    tag: 'Heart Friendly',
    stat: '< 1 Tsp Oil',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Commercial Sanitization & Hairnets',
    desc: 'Gloves, double hairnets, daily temperature logs, and RO water for all cooking & cleaning.',
    tag: 'FSSAI 5-Star Kitchen',
    stat: '100% RO Water',
    imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80'
  }
];

export const CORPORATE_CLIENTS = [
  'Google Cyber City',
  'Paytm Noida Sec 62',
  'DLF Downtown',
  'KPMG Cyber Hub',
  'Genpact Sector 18',
  'Zomato Gurgaon HQ',
  'Adobe Noida Sec 132',
  'Wipro Sec 62'
];
