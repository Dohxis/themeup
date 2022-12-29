import { Link } from "@remix-run/react";
import type { CartProductInterface } from "src/data/products";

interface CartModalLineItemInterface {
  product: CartProductInterface;
}

export const CartModalLineItem: React.FunctionComponent<
  CartModalLineItemInterface
> = ({ product }) => {
  return (
    <li className="flex py-6">
      <div className="mr-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm border border-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1">
        <div className="mr-2 flex flex-grow flex-col justify-between">
          <div className="flex flex-col">
            <Link
              to={`/products/${product.id}`}
              className="font-medium text-gray-900"
            >
              {product.name}
            </Link>

            <span className="mb-1 text-sm font-light text-gray-600">
              {product.variant}
            </span>
          </div>

          <div className="flex text-gray-900">
            <div className="mr-2 flex flex-shrink rounded-sm border border-gray-200">
              <button className="flex w-7 items-center justify-center border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12H19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <input
                className="max-w-[45px] py-0.5 px-2 text-center text-sm"
                value={1}
              />

              <button className="flex w-7 items-center justify-center border-l border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <button className="flex w-7 items-center justify-center rounded-sm border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-none stroke-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-shrink-0 font-medium text-gray-900">
          <span>{product.price}€</span>
        </div>
      </div>
    </li>
  );
};
