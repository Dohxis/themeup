import { Link } from "@remix-run/react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface FooterItemInterface {
  href: string;
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const FooterItem: React.FunctionComponent<FooterItemInterface> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link
      to={href}
      className={classNames("font-light text-gray-700", className)}
    >
      {children}
    </Link>
  );
};
