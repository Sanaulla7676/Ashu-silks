export type Product = {
  id: string;
  name: string;
  category: 'Kanjeevaram' | 'Banarasi' | 'Designer' | 'Cotton';
  price: number;
  compareAt?: number;
  stock: number;
  status: 'active' | 'draft' | 'archived';
  featured: boolean;
  fabric: string;
  color: string;
  description: string;
  image: string;
  createdAt: string;
};

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
};

export const initialProducts: Product[] = [
  {
    id: 'AS-001', name: 'Temple Border Kanjeevaram', category: 'Kanjeevaram', price: 18999,
    compareAt: 21999, stock: 12, status: 'active', featured: true, fabric: 'Pure Silk', color: 'Wine',
    description: 'A traditional pure silk drape with a structured temple border and restrained zari.',
    image: '/ashuvedio.mp4', createdAt: '2026-08-18',
  },
  {
    id: 'AS-002', name: 'Antique Zari Banarasi', category: 'Banarasi', price: 12999,
    compareAt: 14999, stock: 8, status: 'active', featured: true, fabric: 'Banarasi Silk', color: 'Emerald',
    description: 'Lustrous woven silk with an antique zari vocabulary for evening celebrations.',
    image: '/ashuvedio.mp4', createdAt: '2026-08-16',
  },
  {
    id: 'AS-003', name: 'Rose Gold Festive Edit', category: 'Designer', price: 8499,
    stock: 18, status: 'active', featured: true, fabric: 'Silk Blend', color: 'Rose',
    description: 'A contemporary festive drape designed around soft sheen and clean geometry.',
    image: '/ashuvedio.mp4', createdAt: '2026-08-12',
  },
  {
    id: 'AS-004', name: 'Handloom Everyday Cotton', category: 'Cotton', price: 3499,
    stock: 32, status: 'active', featured: false, fabric: 'Handloom Cotton', color: 'Ivory',
    description: 'Light, breathable and polished enough for daily wear, work and gifting.',
    image: '/ashuvedio.mp4', createdAt: '2026-08-08',
  },
  {
    id: 'AS-005', name: 'Bridal Peacock Zari', category: 'Kanjeevaram', price: 25999,
    compareAt: 29999, stock: 3, status: 'active', featured: true, fabric: 'Pure Silk', color: 'Peacock Blue',
    description: 'A statement bridal silk with dense zari detailing and a jewel-toned body.',
    image: '/ashuvedio.mp4', createdAt: '2026-08-05',
  },
];

export const initialOrders: Order[] = [
  { id: 'ORD-1008', customer: 'Priya S.', total: 18999, status: 'delivered', createdAt: '2026-08-20' },
  { id: 'ORD-1009', customer: 'Ananya R.', total: 12999, status: 'packed', createdAt: '2026-08-20' },
  { id: 'ORD-1010', customer: 'Meera K.', total: 8499, status: 'confirmed', createdAt: '2026-08-19' },
  { id: 'ORD-1011', customer: 'Nivedita P.', total: 3499, status: 'pending', createdAt: '2026-08-19' },
];

export const currency = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
