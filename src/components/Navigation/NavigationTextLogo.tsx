import { Link } from "@remix-run/react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface NavigationTextLogoInterface {
  href?: string;
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const NavigationTextLogo: React.FunctionComponent<
  NavigationTextLogoInterface
> = ({ href = "/", className, children }) => {
  return (
    <Link
      to={href}
      className={classNames(
        "text-2xl font-semibold uppercase tracking-[0.25rem]",
        className
      )}
    >
      {children}
    </Link>
  );
};
