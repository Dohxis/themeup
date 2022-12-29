import clsx from "clsx";
import React, { useState } from "react";
import { CartItem } from "./CartItem";
import { DeliveryOptionInterface } from "./DeliveryStep";

interface SidebarInterface {
  selectedDelivery: DeliveryOptionInterface;
}

export const Sidebar: React.FunctionComponent<SidebarInterface> = ({
  selectedDelivery,
}) => {
  const items = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-studio-denim-1_cb1da2bc-0ed8-4836-a120-dcf9f2caf1e3_360x.jpg?v=1637108123",
      name: "Studio Bag",
      quantity: 1,
      total: 49.99,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-mini-naomi-bag-harvest-1_360x.jpg?v=1637107230",
      name: "Mini Naomi Bag",
      quantity: 1,
      total: 29.99,
    },
  ];

  const [showsCouponInput, setShowsCouponInput] = useState(false);

  const subTotal = items.reduce((price, item) => price + item.total, 0);

  const vatTotal = (subTotal * 0.21).toFixed(2);

  const total = (subTotal + selectedDelivery.price).toFixed(2);

  return (
    <aside className="hidden border-l border-neutral-200 bg-neutral-50 md:block md:w-2/5">
      <div className="fixed flex w-full max-w-screen-sm flex-col px-6 pt-14 md:px-8 lg:px-16">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
          <li className="flex pt-4 text-sm text-neutral-800">
            <div className="mr-4 w-16 flex-shrink-0"></div>
            <div className="flex flex-grow flex-col justify-center border-b border-neutral-900/10 pb-4 font-medium">
              <span className="font-medium">Subtotal</span>
            </div>
            <div className="flex items-center border-b border-neutral-900/10 pb-4 font-semibold">
              {subTotal}€
            </div>
          </li>
          <li className="flex h-[36px] items-center">
            <div className="mr-4 w-16 flex-shrink-0"></div>

            <div
              className={clsx(
                "relative flex h-10 items-center overflow-hidden transition-all duration-150 ease-in-out",
                showsCouponInput ? "w-full opacity-100" : "w-0 opacity-0"
              )}
            >
              <input
                placeholder="Type promotion code or coupon"
                className={clsx(
                  "block h-9 w-full rounded-md border border-gray-200 px-3 py-2 text-sm font-light placeholder-gray-400 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-100"
                )}
              />
              <button
                className="absolute top-0 right-0 h-full px-3 text-sm font-medium tracking-tight text-indigo-800"
                type="button"
                onClick={() => setShowsCouponInput(!showsCouponInput)}
              >
                Add
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowsCouponInput(!showsCouponInput)}
              className={clsx(
                "-ml-3 flex items-center truncate rounded-md py-2 px-3 text-sm font-medium text-blue-800 transition-all duration-300 hover:bg-indigo-50",
                "relative flex h-10 items-center overflow-hidden transition-all duration-150 ease-in-out",
                !showsCouponInput ? "w-full opacity-100" : "w-0 opacity-0"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mr-2 h-4 w-4 fill-current"
              >
                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
              <span>Add promotion code or coupon</span>
            </button>
          </li>
          <li className="flex text-sm text-neutral-700">
            <div className="mr-4 w-16 flex-shrink-0"></div>
            <div className="flex flex-grow flex-col justify-center">
              <span className="">VAT (21%)</span>
            </div>
            <div className="flex items-center">{vatTotal}€</div>
          </li>
          <li className="flex text-sm text-neutral-700">
            <div className="mr-4 w-16 flex-shrink-0"></div>
            <div className="flex flex-grow flex-col justify-center">
              <span className="">Delivery</span>
              <span className="text-xs">{selectedDelivery.title}</span>
            </div>
            <div className="flex items-center">
              {selectedDelivery.price.toFixed(2)}€
            </div>
          </li>
          <li className="flex text-sm text-neutral-800">
            <div className="mr-4 w-16 flex-shrink-0"></div>
            <div className="flex flex-grow flex-col justify-center border-t border-neutral-900/10 pt-4 font-medium">
              <span className="font-medium">Total</span>
            </div>
            <div className="flex items-center border-t border-neutral-900/10 pt-4 text-base font-semibold">
              {total}€
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
