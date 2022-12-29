import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface AccountButtonRootInterface {
  children?: React.ReactNode;
}

export const AccountButtonRoot: React.FunctionComponent<
  AccountButtonRootInterface
> = ({ children }) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-gray-800 transition duration-150 hover:text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-none stroke-current"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-1 w-48 origin-top-right rounded-sm border border-gray-200 bg-white py-1 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
