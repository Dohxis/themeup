import { Link } from "@remix-run/react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface NavigationLinkItemInterface {
  href: string;
  prefetch?: "intent" | "render" | "none";
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const NavigationLinkItem: React.FunctionComponent<
  NavigationLinkItemInterface
> = ({ href, prefetch = "intent", className, children }) => {
  return (
    <Link
      to={href}
      prefetch={prefetch}
      className={classNames(
        "text-sm font-medium text-gray-700 transition duration-150 hover:text-gray-500",
        className
      )}
    >
      {children}
    </Link>
  );
};
