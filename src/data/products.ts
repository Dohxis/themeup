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
    description: "A beautiful and flowy maxi dress with a bold floral print.",
    price: 59.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n2_360x.jpg?v=1637107143",
  },
  {
    id: "2",
    name: "Studio Bag",
    description:
      "A classic and versatile denim jacket that can be dressed up or down.",
    price: 49.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-studio-denim-1_cb1da2bc-0ed8-4836-a120-dcf9f2caf1e3_360x.jpg?v=1637108123",
  },
  {
    id: "3",
    name: "Louise Slide Sandal",
    description: "A stylish and edgy mini skirt made from vegan leather.",
    price: 39.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb_360x.jpg?v=1637106712",
  },
  {
    id: "4",
    name: "Mini Naomi Bag",
    description:
      "A comfortable and casual t-shirt dress with a classic striped pattern.",
    price: 29.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-mini-naomi-bag-harvest-1_360x.jpg?v=1637107230",
  },
  {
    id: "5",
    name: "Helix",
    description:
      "A pair of crisp and clean white sneakers that go with everything.",
    price: 49.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-helix-multicolor-2_1800x1800_10c62242-6743-4d46-a251-defa246dd195_360x.jpg?v=1637107119",
  },
  {
    id: "6",
    name: "Bo Ivy",
    description:
      "A pair of sleek and stylish black high heels that are perfect for a night out.",
    price: 79.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-bo-ivy-emerald-1_73c3987e-5ec7-4e72-879a-2ba2e560648f_360x.jpg?v=1637107948",
  },
  {
    id: "7",
    name: "Pleated Heel Mule",
    description: "A trendy off-the-shoulder top with a bold striped pattern.",
    price: 39.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_360x.jpg?v=1637106673",
  },
  {
    id: "8",
    name: "Brick",
    description:
      "A spacious and stylish tote bag that can hold all of your essentials.",
    price: 49.99,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-brick-oil-yellow-1_360x.jpg?v=1637107420",
  },
];

export const cart: CartProductInterface[] = [
  { ...products[0], variant: "Color: Brown" },
  { ...products[1], variant: "Color: Blue" },
];
