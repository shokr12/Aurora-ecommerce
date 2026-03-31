const products = [
  // 1-8 Accessories
  { id: 1, name: "Minimalist Watch", price: 120, category: "Accessories", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", description: "A sleek, modern timepiece for everyday wear." },
  { id: 2, name: "Polarized Sunglasses", price: 85, category: "Accessories", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", description: "Classic design with modern UV protection." },
  { id: 3, name: "Leather Wallet", price: 45, category: "Accessories", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80", description: "Slim profile, massive storage capacity." },
  { id: 4, name: "Silver Bracelet", price: 65, category: "Accessories", sizes: ["6 inch", "7 inch", "8 inch"], image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80", description: "Minimalist sterling silver chain." },
  { id: 5, name: "Gold Plated Ring", price: 55, category: "Accessories", sizes: ["6", "7", "8", "9", "10"], image: "https://images.unsplash.com/photo-1605100804763-247f67b8548e?auto=format&fit=crop&w=800&q=80", description: "Sophisticated and elegant gold ring." },
  { id: 6, name: "Woven Belt", price: 30, category: "Accessories", sizes: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", description: "Comfortable and slightly stretchy daily belt." },
  { id: 7, name: "Silk Tie", price: 40, category: "Accessories", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1589756823695-278bc9b2c86b?auto=format&fit=crop&w=800&q=80", description: "Premium weave for formal occasions." },
  { id: 8, name: "Classic Fedora", price: 75, category: "Accessories", sizes: ["M", "L"], image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80", description: "Timeless style and superior sun protection." },

  // 9-14 Bags
  { id: 9, name: "Leather Backpack", price: 250, category: "Bags", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80", description: "Premium handcrafted leather bag." },
  { id: 10, name: "Canvas Tote", price: 25, category: "Bags", sizes: ["Medium", "Large"], image: "https://images.unsplash.com/photo-1597633244018-b2230198cd4a?auto=format&fit=crop&w=800&q=80", description: "Eco-friendly natural canvas." },
  { id: 11, name: "Travel Duffle", price: 140, category: "Bags", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", description: "Weekender bag with dedicated shoe compartment." },
  { id: 12, name: "Crossbody Bag", price: 60, category: "Bags", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80", description: "Lightweight utility bag for daily excursions." },
  { id: 13, name: "Business Briefcase", price: 180, category: "Bags", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1554342872-034a06541bad?auto=format&fit=crop&w=800&q=80", description: "Fits up to 15 inch laptops flawlessly." },
  { id: 14, name: "Hiking Pack", price: 110, category: "Bags", sizes: ["30L", "40L", "50L"], image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80", description: "Tear-resistant pack for adventurous terrains." },

  // 15-20 Electronics
  { id: 15, name: "Wireless Headphones", price: 199, category: "Electronics", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", description: "Noise-cancelling over-ear headphones." },
  { id: 16, name: "Smart Speaker", price: 145, category: "Electronics", sizes: ["Small", "Large"], image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80", description: "Voice-controlled high fidelity speaker." },
  { id: 17, name: "Mechanical Keyboard", price: 125, category: "Electronics", sizes: ["60%", "TKL", "Full Size"], image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80", description: "Tactile switches for the ultimate typing experience." },
  { id: 18, name: "Wireless Mouse", price: 65, category: "Electronics", sizes: ["One Size"], image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80", description: "Ergonomic shape with zero latency connectivity." },
  { id: 19, name: "4K Monitor", price: 340, category: "Electronics", sizes: ["27 inch", "32 inch"], image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=800&q=80", description: "Ultra-high definition color accurate display." },
  { id: 20, name: "Power Bank", price: 45, category: "Electronics", sizes: ["10000mAh", "20000mAh"], image: "https://images.unsplash.com/photo-1585338107520-21a7114b0b18?auto=format&fit=crop&w=800&q=80", description: "Fast-charging on the go power supply." },

  // 21-26 Footwear
  { id: 21, name: "Running Sneakers", price: 130, category: "Footwear", sizes: ["8", "9", "10", "11", "12"], image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80", description: "Lightweight and fully responsive cushioning." },
  { id: 22, name: "Leather Loafers", price: 160, category: "Footwear", sizes: ["8", "9", "10", "11"], image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=800&q=80", description: "Classic slip-on loafers perfect for the office." },
  { id: 23, name: "Chelsea Boots", price: 180, category: "Footwear", sizes: ["8", "9", "10", "11", "12"], image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80", description: "Suede finish with elastic sides." },
  { id: 24, name: "Canvas High-Tops", price: 65, category: "Footwear", sizes: ["7", "8", "9", "10", "11"], image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80", description: "Everyday street style essentials." },
  { id: 25, name: "Trail Runners", price: 140, category: "Footwear", sizes: ["9", "10", "11", "12"], image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", description: "Extra grip and durability for rugged terrains." },
  { id: 26, name: "Beach Sandals", price: 25, category: "Footwear", sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80", description: "Water-resistant and incredibly comfortable." },

  // 27-32 Apparel
  { id: 27, name: "Classic White Tee", price: 35, category: "Apparel", sizes: ["S", "M", "L", "XL"], image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", description: "Essential cotton crewneck t-shirt." },
  { id: 28, name: "Denim Jacket", price: 89, category: "Apparel", sizes: ["M", "L", "XL"], image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80", description: "Vintage wash denim outerwear." },
  { id: 29, name: "Chino Pants", price: 55, category: "Apparel", sizes: ["30", "32", "34", "36"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80", description: "Tailored fit breathable cotton slacks." },
  { id: 30, name: "Wool Sweater", price: 95, category: "Apparel", sizes: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80", description: "Merino wool blend for chilly nights." },
  { id: 31, name: "Puffer Coat", price: 220, category: "Apparel", sizes: ["M", "L", "XL"], image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80", description: "Extreme insulation for below-freezing temperatures." },
  { id: 32, name: "Graphic Hoodie", price: 60, category: "Apparel", sizes: ["S", "M", "L", "XL", "XXL"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80", description: "Heavyweight cotton blend with custom art." }
];

module.exports = products;
