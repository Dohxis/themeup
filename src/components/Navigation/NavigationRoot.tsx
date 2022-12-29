import { useContext } from "react";
import type { ClassNameType } from "src/library/ClassNames";
import { classNames } from "src/library/ClassNames";
import LayoutContext from "../Layout/LayoutContext";

interface NavigationRootInterface {
  className?: ClassNameType;
  innerClassName?: ClassNameType;
  children?: React.ReactNode;
}

export const NavigationRoot: React.FunctionComponent<
  NavigationRootInterface
> = ({ className, innerClassName, children }) => {
  const layoutContext = useContext(LayoutContext);

  return (
    <div className={classNames("border-b", className)}>
      <nav
        className={classNames(
          "mx-auto flex items-center space-x-8 py-4",
          layoutContext.sectionClassNames,
          innerClassName
        )}
      >
        {children}
      </nav>
    </div>
  );
};
