export enum RoomType {
  STUDIO = 'Studio',
  ONE_BEDROOM = '1 Phòng Ngủ',
  TWO_BEDROOM = '2 Phòng Ngủ',
  DORM = 'Ký Túc Xá'
}

export interface Amenity {
  icon: string;
  name: string;
}

export interface Room {
  id: string;
  title: string;
  address: string;
  price: number;
  area: number; // m2
  type: RoomType;
  images: string[];
  description: string;
  amenities: string[];
  isAvailable: boolean;
  deposit: number;
  electricityPrice: number;
  waterPrice: number;
  coordinates: { lat: number; lng: number };
}

export interface FilterState {
  location: string;
  minPrice: number;
  maxPrice: number;
  keyword: string;
  roomType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}