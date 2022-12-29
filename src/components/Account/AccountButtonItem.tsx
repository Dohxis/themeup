import { Menu } from "@headlessui/react";
import { Link } from "@remix-run/react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface AccountButtonItemInterface {
  href: string;
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const AccountButtonItem: React.FunctionComponent<
  AccountButtonItemInterface
> = ({ href, className, children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to={href}
          className={classNames(
            "block px-4 py-2 text-sm text-gray-900 transition duration-150",
            active ? "bg-gray-100" : "",
            className
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
};
