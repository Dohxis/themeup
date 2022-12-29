import { json } from "@remix-run/server-runtime";
import { Link, useLoaderData } from "@remix-run/react";
import { AccountButton } from "src/components/Account/AccountButton";
import { AnnouncementBar } from "src/components/AnnouncementBar/AnnouncementBar";
import { Button } from "src/components/Button/Button";
import { CartButton } from "src/components/Cart/CartButton";
import { Footer } from "src/components/Footer/Footer";
import { Layout } from "src/components/Layout/Layout";
import { Navigation } from "src/components/Navigation/Navigation";
import { OverlayedImage } from "src/components/OverlayedImage/OverlayedImage";
import { Row } from "src/components/Row/Row";
import { Section } from "src/components/Section/Section";
import { TitledImage } from "src/components/TitledImage/TitledImage";
import { cart, products } from "src/data/products";
import heroImage from "../../public/images/background.png";
import sectionImage from "../../public/images/section.png";
import blogOneImage from "../../public/images/blog-1.jpg";
import blogTwoImage from "../../public/images/blog-2.jpg";
import blogThreeImage from "../../public/images/blog-3.jpg";
import blogFourImage from "../../public/images/blog-4.jpg";

export const loader = async () => {
  return json({ cartProducts: cart });
};

export default function Index() {
  const { cartProducts } = useLoaderData<typeof loader>();

  return (
    <Layout.Root>
      <AnnouncementBar>
        Enjoy free shipping when you spend over 50 EUR on your purchase!
      </AnnouncementBar>

      <Navigation.Root>
        <Navigation.Header>
          <Navigation.TextLogo>Zephyr</Navigation.TextLogo>
        </Navigation.Header>

        <Navigation.Body>
          <Navigation.LinkItem href="/">Women</Navigation.LinkItem>
          <Navigation.LinkItem href="/">Men</Navigation.LinkItem>
          <Navigation.LinkItem href="/">Children</Navigation.LinkItem>
          <Navigation.LinkItem href="/">Shoes</Navigation.LinkItem>
        </Navigation.Body>

        <Navigation.Footer>
          <CartButton products={cartProducts} />
          <AccountButton.Root>
            <AccountButton.Item href="/account">Account</AccountButton.Item>
            <AccountButton.Item href="/orders">My orders</AccountButton.Item>
            <AccountButton.Item href="/logout">Logout</AccountButton.Item>
          </AccountButton.Root>
        </Navigation.Footer>
      </Navigation.Root>

      <OverlayedImage.Root imageUrl={heroImage}>
        <OverlayedImage.Title>
          Casual Clothing for Every Occasion
        </OverlayedImage.Title>
        <OverlayedImage.Description className="max-w-3xl">
          Discover our wide selection of fashionable and affordable casual
          clothes for every occasion. From work to weekend, we have something
          for everyone.
        </OverlayedImage.Description>
      </OverlayedImage.Root>

      <Layout.Body>
        <Section.TextWithImage
          imageUrl={sectionImage}
          title="Shop the Latest Fashion Trends"
          description="Shop our online store for the perfect outfit for any occasion. We have a wide selection of trendy clothing and accessories to choose from, so you can express your personal style. Find the perfect outfit to suit your needs and preferences in our range of sizes, styles, and colors. Shop now and elevate your personal style."
        >
          <div>
            <Button>Read more</Button>
          </div>
        </Section.TextWithImage>

        <Section.FeaturedProducts
          title="Trending products"
          description="Discover our latest fashion trends and shop the best products for your style!"
          products={products.slice(0, 8)}
        />

        <Layout.Section
          title="Latest blog posts"
          description="Stay up-to-date on the latest fashion trends and other news, all in one spot!"
        >
          <Row>
            <TitledImage
              as={Link}
              imageUrl={blogOneImage}
              title="5 Must-Have Pieces for Your Spring Wardrobe"
              to="#"
            />
            <TitledImage
              as={Link}
              imageUrl={blogTwoImage}
              title="Luxury Handbags and Accessories for Elevated Style"
              to="#"
            />
            <TitledImage
              as={Link}
              imageUrl={blogThreeImage}
              title="How to Style a Little Black Dress for Any Occasion"
              to="#"
            />
            <TitledImage
              as={Link}
              imageUrl={blogFourImage}
              title="Mix and Match: Creating Outfits with Accessories"
              to="#"
            />
          </Row>
        </Layout.Section>
      </Layout.Body>

      <Footer.Root>
        <div className="flex flex-col">
          <Navigation.TextLogo>Zephyr</Navigation.TextLogo>
          <span className="mt-2 text-xs text-gray-500">
            &copy; Zephyr, Inc. All rights reserved.
          </span>
        </div>
        <Footer.Column title="Shop">
          <Footer.Item href="#">Women clothes</Footer.Item>
          <Footer.Item href="#">Men clothes</Footer.Item>
          <Footer.Item href="#">Children clothes</Footer.Item>
          <Footer.Item href="#">Shoes</Footer.Item>
        </Footer.Column>
        <Footer.Column title="Company">
          <Footer.Item href="#">About us</Footer.Item>
          <Footer.Item href="#">Shipping information</Footer.Item>
          <Footer.Item href="#">Privacy policy</Footer.Item>
          <Footer.Item href="#">Terms of service</Footer.Item>
        </Footer.Column>
        <Footer.Column title="Social media">
          <Footer.Item href="#">Instagram</Footer.Item>
          <Footer.Item href="#">Facebook</Footer.Item>
          <Footer.Item href="#">Twitter</Footer.Item>
        </Footer.Column>
      </Footer.Root>

      {/* 
      <main className="py-16">
        <FeaturedCollection
          title="Obsessive Attention. Intelligent Effort."
          description="Functional handbags made of luxurious materials to improve people's lives in small but mighty ways."
          products={products}
        />
      </main> */}
    </Layout.Root>
  );
}
