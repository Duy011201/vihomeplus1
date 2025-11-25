import { Room, RoomType, Testimonial, BlogPost } from './types';

export const ROOMS: Room[] = [
  {
    id: '1',
    title: 'HIVOME Luxury Studio - Q1',
    address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
    price: 7500000,
    area: 35,
    type: RoomType.STUDIO,
    images: [
      'https://picsum.photos/id/10/800/600',
      'https://picsum.photos/id/11/800/600',
      'https://picsum.photos/id/12/800/600'
    ],
    description: 'Studio sang trọng ngay trung tâm Quận 1, đầy đủ nội thất, view thành phố cực đẹp. An ninh 24/7, giờ giấc tự do.',
    amenities: ['Wifi', 'AC', 'Kitchen', 'Parking', 'Elevator', 'Security'],
    isAvailable: true,
    deposit: 7500000,
    electricityPrice: 4000,
    waterPrice: 100000,
    coordinates: { lat: 10.776, lng: 106.701 }
  },
  {
    id: '2',
    title: 'Căn hộ Mini HIVOME - Bình Thạnh',
    address: '45 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP.HCM',
    price: 5200000,
    area: 28,
    type: RoomType.ONE_BEDROOM,
    images: [
      'https://picsum.photos/id/13/800/600',
      'https://picsum.photos/id/14/800/600'
    ],
    description: 'Phòng mới xây, sạch sẽ, gần các trường đại học lớn. Có ban công thoáng mát.',
    amenities: ['Wifi', 'AC', 'Parking', 'Laundry'],
    isAvailable: true,
    deposit: 5200000,
    electricityPrice: 3800,
    waterPrice: 25000,
    coordinates: { lat: 10.795, lng: 106.720 }
  },
  {
    id: '3',
    title: 'Phòng trọ giá rẻ HIVOME - Gò Vấp',
    address: '89 Quang Trung, Gò Vấp, TP.HCM',
    price: 3500000,
    area: 20,
    type: RoomType.DORM,
    images: [
      'https://picsum.photos/id/15/800/600',
      'https://picsum.photos/id/16/800/600'
    ],
    description: 'Phòng trọ tiết kiệm cho sinh viên, giờ giấc tự do, không chung chủ.',
    amenities: ['Wifi', 'Parking'],
    isAvailable: false,
    deposit: 3500000,
    electricityPrice: 3500,
    waterPrice: 20000,
    coordinates: { lat: 10.830, lng: 106.665 }
  },
  {
    id: '4',
    title: 'HIVOME Family Suite - Quận 7',
    address: '200 Nguyễn Thị Thập, Quận 7, TP.HCM',
    price: 9000000,
    area: 55,
    type: RoomType.TWO_BEDROOM,
    images: [
      'https://picsum.photos/id/17/800/600',
      'https://picsum.photos/id/18/800/600'
    ],
    description: 'Căn hộ 2 phòng ngủ rộng rãi, thích hợp cho gia đình nhỏ hoặc nhóm bạn.',
    amenities: ['Wifi', 'AC', 'Kitchen', 'Pool', 'Gym'],
    isAvailable: true,
    deposit: 9000000,
    electricityPrice: 4000,
    waterPrice: 15000,
    coordinates: { lat: 10.735, lng: 106.725 }
  },
    {
    id: '5',
    title: 'Studio Ban Công - Phú Nhuận',
    address: '33 Phan Xích Long, Phú Nhuận',
    price: 6000000,
    area: 32,
    type: RoomType.STUDIO,
    images: [
      'https://picsum.photos/id/20/800/600',
      'https://picsum.photos/id/21/800/600'
    ],
    description: 'Studio thoáng đãng, ban công lớn, nhiều cây xanh. Khu vực sầm uất nhiều tiện ích.',
    amenities: ['Wifi', 'AC', 'Kitchen', 'Balcony'],
    isAvailable: true,
    deposit: 6000000,
    electricityPrice: 4000,
    waterPrice: 100000,
    coordinates: { lat: 10.796, lng: 106.685 }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    role: 'Sinh viên',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Phòng rất sạch đẹp và giống hệt trong hình. Chủ nhà thân thiện, hỗ trợ nhiệt tình.',
    rating: 5
  },
  {
    id: '2',
    name: 'Trần Thị B',
    role: 'Nhân viên văn phòng',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Giá cả hợp lý so với chất lượng. Hệ thống an ninh tốt, mình rất yên tâm khi đi làm về khuya.',
    rating: 4
  },
  {
    id: '3',
    name: 'Lê Hoàng C',
    role: 'Freelancer',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    content: 'Wifi cực mạnh, không gian yên tĩnh rất thích hợp để làm việc tại nhà.',
    rating: 5
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: '5 Mẹo trang trí phòng trọ nhỏ trở nên rộng rãi',
    excerpt: 'Khám phá những cách đơn giản để biến không gian nhỏ của bạn thành nơi ở lý tưởng.',
    image: 'https://picsum.photos/id/40/400/300',
    date: '10/05/2024',
    author: 'Admin'
  },
  {
    id: '2',
    title: 'Những lưu ý khi ký hợp đồng thuê nhà',
    excerpt: 'Đừng bỏ qua những điều khoản quan trọng này để bảo vệ quyền lợi của bạn.',
    image: 'https://picsum.photos/id/42/400/300',
    date: '08/05/2024',
    author: 'Luật sư Tú'
  },
  {
    id: '3',
    title: 'Sống xanh tại nhà trọ: Tại sao không?',
    excerpt: 'Gợi ý các loại cây trồng trong nhà dễ chăm sóc và lọc không khí tốt.',
    image: 'https://picsum.photos/id/48/400/300',
    date: '01/05/2024',
    author: 'GreenLife'
  }
];