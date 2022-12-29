import { Dialog, Transition } from "@headlessui/react";
import { Link } from "@remix-run/react";
import { Fragment, useState } from "react";
import type { CartProductInterface } from "src/data/products";
import { Button } from "../Button/Button";
import { CartModalLineItem } from "./CartItem";

interface CartButtonInterface {
  products: CartProductInterface[];
}

export const CartButton: React.FunctionComponent<CartButtonInterface> = ({
  products,
}) => {
  const [open, setOpen] = useState(false);

  const subTotal = products.reduce((price, item) => price + item.price, 0);

  return (
    <>
      <div className="relative">
        <button
          className="text-gray-800 transition duration-150 hover:text-gray-600"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-none stroke-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z"
              strokeWidth="1.65"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="absolute top-0 right-0 -mt-1.5 -mr-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
          {products.length}
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-[65%] transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto p-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-xl font-semibold text-gray-900">
                            Cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className=" -mr-2 p-2 text-gray-500 transition duration-150 hover:text-gray-400"
                              onClick={() => setOpen(false)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 fill-none stroke-current"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M18 6L6 18M6 6L18 18"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <ul className="divide-y divide-gray-200">
                          {products.map((product, key) => (
                            <CartModalLineItem key={key} product={product} />
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-gray-200 p-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{subTotal}€</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout
                        </p>

                        <div className="mt-6">
                          <Button as={Link} to="/checkout">
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
