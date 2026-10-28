export type DeliveryZone = 'Gurugram' | 'Noida' | 'Connaught Place';

export interface MenuItem {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  dayHindi: string;
  theme: string;
  sabzi1: string;
  sabzi2: string;
  dal: string;
  bread: string;
  rice: string;
  saladChutney: string;
  specialAddon?: string;
  calories: number;
  oilLevel: string;
  proteinGrams: number;
  image: string;
  tags: string[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  pricePerMeal: number;
  monthlyTotal: number;
  servingsDesc: string;
  idealFor: string;
  includes: string[];
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'delivery' | 'food' | 'flexibility' | 'general';
}

export interface StreakDay {
  day: string;
  shortDay: string;
  dish: string;
  calories: string;
  completed: boolean;
  paused: boolean;
  deliveryTime: string;
}

export interface FreeTrialFormState {
  fullName: string;
  phone: string;
  city: DeliveryZone;
  techParkOrArea: string;
  companyName: string;
  towerFloorDesk: string;
  dietPreference: 'Standard Ghar Jaisa' | 'Jain (No Onion & Garlic)' | 'Less Spicy / High Fiber' | 'High Protein Fitness';
  deliveryDate: string;
  appliedCoupon?: string;
}
