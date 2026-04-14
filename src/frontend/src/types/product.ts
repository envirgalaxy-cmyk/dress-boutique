export interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountPercent: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Blooming Garden Midi Dress",
    description:
      "A delicate floral midi dress with puff sleeves, gathered waist, and soft cotton fabric. Perfect for brunch dates and garden parties.",
    originalPrice: 2499,
    discountPercent: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    category: "Midi",
    inStock: true,
  },
  {
    id: "2",
    name: "Celestial Slip Dress",
    description:
      "Luxurious satin slip dress in champagne blush. Minimalist elegance with adjustable straps and bias-cut silhouette.",
    originalPrice: 3199,
    discountPercent: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1566479179817-f4c2e73f4a59?w=600&q=80",
    category: "Slip",
    inStock: true,
  },
  {
    id: "3",
    name: "Serenity Maxi Dress",
    description:
      "Flowing embroidered maxi dress with mirror work detailing. Lightweight georgette fabric that moves beautifully with every step.",
    originalPrice: 3899,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    category: "Maxi",
    inStock: true,
  },
  {
    id: "4",
    name: "Cloud Nine Tiered Dress",
    description:
      "Dreamy tiered ruffle dress in soft sky blue. Breathable fabric with an elastic waistband for all-day comfort.",
    originalPrice: 2799,
    discountPercent: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80",
    category: "Tiered",
    inStock: true,
  },
  {
    id: "5",
    name: "Rose Petal Wrap Dress",
    description:
      "Classic wrap dress in pale rose with a V-neckline and tie waist. Versatile enough for the office or a dinner date.",
    originalPrice: 2299,
    discountPercent: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    category: "Wrap",
    inStock: true,
  },
  {
    id: "6",
    name: "Aurora Balloon Sleeve Dress",
    description:
      "Statement balloon-sleeve dress with subtle embroidery at the hem. A showstopper for festive occasions and weddings.",
    originalPrice: 4299,
    discountPercent: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=600&q=80",
    category: "Festive",
    inStock: true,
  },
  {
    id: "7",
    name: "Sunlit Linen Shirt Dress",
    description:
      "Relaxed linen shirt dress in warm sand. Button-down front with rolled sleeves — effortlessly chic for daywear.",
    originalPrice: 1999,
    discountPercent: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80",
    category: "Casual",
    inStock: true,
  },
  {
    id: "8",
    name: "Moonlit Velvet Mini Dress",
    description:
      "Plush velvet mini dress in dusty lavender with a square neckline and short puff sleeves. Elegant evening wear.",
    originalPrice: 3499,
    discountPercent: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    category: "Evening",
    inStock: false,
  },
  {
    id: "9",
    name: "Meadow Flounce Sundress",
    description:
      "Cheerful flounce sundress with spaghetti straps and a square neckline. Vibrant floral print in soft peach and green.",
    originalPrice: 1799,
    discountPercent: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    category: "Casual",
    inStock: true,
  },
  {
    id: "10",
    name: "Pearl Cottage Midi Dress",
    description:
      "Romantic cottagecore midi dress with lace trim and pintuck detailing. In soft cream with floral embroidery at the collar.",
    originalPrice: 2899,
    discountPercent: 18,
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    category: "Midi",
    inStock: true,
  },
];
