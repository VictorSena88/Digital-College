export const products = [
  {
    id: 1,
    title: "Nike Air Max 270",
    name: "Nike Air Max 270",
    reference: "Ref. NIKE270-BR",
    stars: 4.5,
    rating: 128,
    price: 299.99,
    priceDiscount: 209.99,
    description: "Tênis Nike confortável e estiloso.",
    image: "https://imgnike-a.akamaihd.net/360x360/0163497WA1.jpg",
    images: [
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1.jpg" },
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1_1.jpg" },
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Nike",
    sizes: [38, 39, 40, 41, 42],
    colors: ["#000000", "#FFFFFF"],
    relatedProducts: [2, 3, 4]
  },
  {
    id: 2,
    title: "Adidas Ultraboost",
    name: "Adidas Ultraboost",
    reference: "Ref. ADIDASUB-BR",
    stars: 4.7,
    rating: 200,
    price: 349.99,
    priceDiscount: 249.99,
    description: "Tênis Adidas com tecnologia de amortecimento.",
    image: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1.jpg",
    images: [
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1.jpg" },
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1_1.jpg" },
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1_2.jpg" }
    ],
    category: "Tênis",
    brand: "Adidas",
    sizes: [37, 38, 39, 40, 41],
    colors: ["#1a1a1a", "#eaeaea"],
    relatedProducts: [1, 3]
  },
  {
    id: 3,
    title: "Puma RS-X",
    name: "Puma RS-X",
    reference: "Ref. PUMARSX-BR",
    stars: 4.3,
    rating: 150,
    price: 279.99,
    priceDiscount: 199.99,
    description: "Tênis Puma com design retrô e conforto.",
    image: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1.jpg",
    images: [
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1.jpg" },
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1_1.jpg" },
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1_2.jpg" }
    ],
    category: "Tênis",
    brand: "Puma",
    sizes: [36, 38, 40, 42],
    colors: ["#d62828", "#003049"],
    relatedProducts: [1, 2]
  },
  {
    id: 4,
    title: "New Balance 574",
    name: "New Balance 574",
    reference: "Ref. NB574-BR",
    stars: 4.6,
    rating: 180,
    price: 249.99,
    priceDiscount: 179.99,
    description: "Tênis New Balance clássico e versátil.",
    image: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1.jpg",
    images: [
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1.jpg" },
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1_1.jpg" },
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1_2.jpg" }
    ],
    category: "Tênis",
    brand: "New Balance",
    sizes: [39, 40, 41, 42, 43],
    colors: ["#2b2d42", "#8d99ae"],
    relatedProducts: [1, 5]
  },
  {
    id: 5,
    title: "Asics Gel-Kayano",
    name: "Asics Gel-Kayano",
    reference: "Ref. ASICS-GKAYANO-BR",
    stars: 4.8,
    rating: 220,
    price: 399.99,
    priceDiscount: 299.99,
    description: "Tênis Asics com suporte e estabilidade.",
    image: "https://imgasics-a.akamaihd.net/360x360/0163501WA1.jpg",
    images: [
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1.jpg" },
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1_1.jpg" },
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1_2.jpg" }
    ],
    category: "Tênis",
    brand: "Asics",
    sizes: [37, 39, 41, 43],
    colors: ["#264653", "#e76f51"],
    relatedProducts: [4, 6]
  },
  {
    id: 6,
    title: "Reebok Classic Leather",
    name: "Reebok Classic Leather",
    reference: "Ref. REEBOKCL-BR",
    stars: 4.4,
    rating: 170,
    price: 229.99,
    priceDiscount: 169.99,
    description: "Tênis Reebok com design atemporal.",
    image: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1.jpg",
    images: [
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1.jpg" },
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1_1.jpg" },
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1_2.jpg" }
    ],
    category: "Tênis",
    brand: "Reebok",
    sizes: [36, 38, 40, 42],
    colors: ["#f5f3f4", "#22223b"],
    relatedProducts: [5, 7]
  },
  {
    id: 7,
    title: "Vans Old Skool",
    name: "Vans Old Skool",
    reference: "Ref. VANSOS-BR",
    stars: 4.5,
    rating: 190,
    price: 199.99,
    priceDiscount: 149.99,
    description: "Tênis Vans com estilo skater clássico.",
    image: "https://imgvans-a.akamaihd.net/360x360/0163503WA1.jpg",
    images: [
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1.jpg" },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_1.jpg" },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_2.jpg" }
    ],
    category: "Tênis",
    brand: "Vans",
    sizes: [35, 37, 39, 41],
    colors: ["#000000", "#ffffff", "#ff595e"],
    relatedProducts: [6, 8]
  },
  {
    id: 8,
    title: "Converse Chuck Taylor",
    name: "Converse Chuck Taylor",
    reference: "Ref. CONVERSECT-BR",
    stars: 4.6,
    rating: 210,
    price: 179.99,
    priceDiscount: 139.99,
    description: "Tênis Converse icônico e versátil.",
    image: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1.jpg",
    images: [
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1.jpg" },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_1.jpg" },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_2.jpg" }
    ],
    category: "Tênis",
    brand: "Converse",
    sizes: [36, 37, 38, 39, 40],
    colors: ["#ffffff", "#000000", "#e63946"],
    relatedProducts: [7]
  }
];



