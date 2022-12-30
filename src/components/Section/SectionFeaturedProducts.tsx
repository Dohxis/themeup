import { Link } from "@remix-run/react";
import React from "react";
import type { ProductInterface } from "src/data/products";
import type { ClassNameType } from "src/library/ClassNames";
import { Layout } from "../Layout/Layout";

interface SectionFeaturedProductsInterface {
  title?: string;
  description?: string;
  titleClassName?: ClassNameType;
  descriptionClassName?: ClassNameType;
  products: ProductInterface[];
}

export const SectionFeaturedProducts: React.FunctionComponent<
  SectionFeaturedProductsInterface
> = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  products,
}) => {
  return (
    <Layout.Section
      title={title}
      titleClassName={titleClassName}
      description={description}
      descriptionClassName={descriptionClassName}
    >
      <div className="grid grid-cols-4 gap-2">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="mb-2 w-full"
            />
            <h3>{product.name}</h3>
            <span className="text-sm font-light">{product.price}€</span>
          </Link>
        ))}
      </div>
    </Layout.Section>
  );
};
