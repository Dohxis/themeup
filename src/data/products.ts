export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartProductInterface extends ProductInterface {
  variant: string;
}

export const products: ProductInterface[] = [
  {
    id: "1",
    name: "Small Convertible Flex Bag",
    description:
      "Our Small Convertible Flex Bag is the perfect accessory for any busy, on-the-go lifestyle. With its versatile design, this bag can be easily converted from a shoulder bag to a crossbody bag, making it perfect for any occasion. Made with durable materials, this bag is built to last and can hold all of your daily essentials with ease. The compact size is perfect for those who want a bag that is stylish and functional without weighing them down. Whether you're running errands or heading to the office, this Small Convertible Flex Bag is sure to become your go-to accessory. So, grab yours today and stay organized and stylish wherever you go!",
    price: 59.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n2_1280x.jpg",
  },
  {
    id: "2",
    name: "Studio Bag",
    description:
      "Our Studio Bag is the perfect addition to your everyday wardrobe. With its sleek and stylish design, this bag is perfect for the modern woman who is always on the go. Whether you're heading to work or running errands, this bag is spacious enough to hold all of your daily essentials, including your laptop, phone, wallet, and more. The durable materials and sturdy construction ensure that this bag will last for years to come. The adjustable shoulder straps allow you to customize the fit to your comfort, while the multiple pockets and compartments keep your items organized and easily accessible. So why wait? Add our Studio Bag to your collection today and take on the world in style!",
    price: 49.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-studio-denim-1_cb1da2bc-0ed8-4836-a120-dcf9f2caf1e3_1280x.jpg",
  },
  {
    id: "3",
    name: "Louise Slide Sandal",
    description:
      "The Louise Slide Sandal is the perfect footwear choice for warm weather. With a classic design and comfortable fit, these sandals are perfect for everyday wear. The upper is made of a soft, supple leather that conforms to the foot for a comfortable fit. The insole is padded with a cushioned footbed, providing all-day comfort and support. The outsole is made of a durable, slip-resistant rubber, providing excellent traction on a variety of surfaces. Whether you're running errands around town or heading to the beach, the Louise Slide Sandal has got you covered.",
    price: 39.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb_1280x.jpg",
  },
  {
    id: "4",
    name: "Mini Naomi Bag",
    description:
      "The Mini Naomi Bag is a chic and stylish accessory that will add the perfect finishing touch to any outfit. With a compact size and versatile design, this bag is perfect for both everyday use and special occasions. The exterior is crafted from high-quality leather and features a classic, timeless silhouette. The interior is spacious and well-organized, with a zippered pocket and slip pockets to keep your essentials organized and within easy reach. The Mini Naomi Bag comes with a detachable shoulder strap, allowing you to wear it crossbody or as a clutch. Whether you're heading to work or a night out on the town, the Mini Naomi Bag is the perfect companion.",
    price: 29.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-mini-naomi-bag-harvest-1_1280x.jpg",
  },
  {
    id: "5",
    name: "Helix",
    description:
      "The Helix sneakers are the perfect blend of style and comfort. With a sleek, modern design and comfortable fit, these sneakers are perfect for everyday wear. The upper is made of a breathable, lightweight mesh material that conforms to the foot for a comfortable fit. The insole is padded with a cushioned footbed, providing all-day comfort and support. The outsole is made of a durable, slip-resistant rubber, providing excellent traction on a variety of surfaces. Whether you're running errands around town or hitting the gym, the Helix sneakers have got you covered.",
    price: 49.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-helix-multicolor-2_1800x1800_10c62242-6743-4d46-a251-defa246dd195_1280x.jpg",
  },
  {
    id: "6",
    name: "Bo Ivy",
    description:
      "The Bo Ivy high heels are a classic and elegant footwear choice that will add a touch of sophistication to any outfit. With a sleek design and comfortable fit, these heels are perfect for both everyday wear and special occasions. The upper is made of a soft, supple leather that conforms to the foot for a comfortable fit. The insole is padded with a cushioned footbed, providing all-day comfort and support. The heel is slim and elegant, adding a touch of glamour to any ensemble. Whether you're heading to the office or a formal event, the Bo Ivy high heels are sure to make a statement.",
    price: 79.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-bo-ivy-emerald-1_73c3987e-5ec7-4e72-879a-2ba2e560648f_1280x.jpg",
  },
  {
    id: "7",
    name: "Pleated Heel Mule",
    description:
      "The Pleated Heel Mule is a stylish and comfortable footwear choice that is perfect for everyday wear. With a sleek, modern design and comfortable fit, these mules are sure to become a go-to in your shoe collection. The upper is made of a soft, supple leather that conforms to the foot for a comfortable fit. The insole is padded with a cushioned footbed, providing all-day comfort and support. The heel is adorned with pleats, adding a touch of texture and interest to the overall design. Whether you're running errands around town or dressing up for a night out, the Pleated Heel Mule is the perfect choice.",
    price: 39.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_1280x.jpg",
  },
  {
    id: "8",
    name: "Brick",
    description:
      "The Brick bag is a chic and stylish accessory that is perfect for everyday wear. With a classic design and spacious interior, this bag is sure to become a go-to in your accessory collection. The exterior is made of a high-quality leather that is durable and easy to care for. The interior is spacious and well-organized, with a zippered pocket and slip pockets to keep your essentials organized and within easy reach. The Brick bag comes with a detachable shoulder strap, allowing you to wear it crossbody or as a handheld bag. Whether you're heading to work or running errands around town, the Brick bag is the perfect companion.",
    price: 49.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-brick-oil-yellow-1_1280x.jpg",
  },
];

export const cart: CartProductInterface[] = [
  { ...products[0], variant: "Color: Brown" },
  { ...products[1], variant: "Color: Blue" },
];
