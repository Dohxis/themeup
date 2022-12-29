import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";

interface NavigationBodyInterface {
  className?: ClassNameType;
  centered?: boolean;
  children?: React.ReactNode;
}

export const NavigationBody: React.FunctionComponent<
  NavigationBodyInterface
> = ({ className, centered, children }) => {
  return (
    <div
      className={classNames(
        "flex flex-grow items-center space-x-4",
        { "justify-center": centered },
        className
      )}
    >
      {children}
    </div>
  );
};
