import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface NavigationHeaderInterface {
  className?: ClassNameType;
  children?: React.ReactNode;
}

export const NavigationHeader: React.FunctionComponent<
  NavigationHeaderInterface
> = ({ className, children }) => {
  return (
    <div className={classNames("flex items-center space-x-4", className)}>
      {children}
    </div>
  );
};
