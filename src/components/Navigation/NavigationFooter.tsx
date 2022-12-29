import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface NavigationFooterInterface {
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const NavigationFooter: React.FunctionComponent<
  NavigationFooterInterface
> = ({ className, children }) => {
  return (
    <div className={classNames("flex items-center space-x-6", className)}>
      {children}
    </div>
  );
};
