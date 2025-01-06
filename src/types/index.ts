export type User = {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  user_type: 'buyer' | 'seller';
  is_verified: boolean;
  created_at: string;
  bio?: string;
  skills?: string[];
  language_preferences: ('ar' | 'fr' | 'en')[];
};

export type Service = {
  id: string;
  seller_id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  delivery_time: number;
  created_at: string;
  images: string[];
};

export type Review = {
  id: string;
  service_id: string;
  buyer_id: string;
  rating: number;
  comment: string;
  created_at: string;
};